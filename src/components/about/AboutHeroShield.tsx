import React, { useMemo, useRef, Suspense, Component } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import svgRaw from "../../imports/envista-mark.svg?raw";
import shieldPng from "../../imports/envista-mark.png";

class WebGLErrorBoundary extends Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any) {
    console.warn("WebGL Canvas failed gracefully in AboutHeroShield:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex h-full w-full items-center justify-center p-8">
            <img
              src={shieldPng}
              alt="Envista Shield"
              className="h-44 w-44 object-contain drop-shadow-[0_0_40px_rgba(168,85,247,0.85)] animate-float"
            />
          </div>
        )
      );
    }
    return this.props.children;
  }
}

// --- 3D METALLIC PURPLE SHIELD FOR ABOUT HERO ---
function Shield3DAbout() {
  const meshRef = useRef<THREE.Group>(null);

  // Synchronous, zero-latency in-memory SVG parsing — eliminates external fetch/data-URI bugs in production
  const shapes = useMemo(() => {
    try {
      const loader = new SVGLoader();
      const data = loader.parse(svgRaw);
      const allShapes: THREE.Shape[] = [];
      for (const path of data.paths) {
        allShapes.push(...SVGLoader.createShapes(path));
      }
      return allShapes;
    } catch (e) {
      console.error("Failed to parse 3D shield SVG shapes in About:", e);
      return [];
    }
  }, []);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      // Continuous 360-degree revolving rotation matching CyberCrest reference
      // Gently pauses/lingers slightly on the front face and turns smoothly through the edges
      const rot = meshRef.current.rotation.y;
      const speed = 0.82 - Math.pow(Math.cos(rot), 2) * 0.44;
      meshRef.current.rotation.y += delta * speed;
      // Subtle organic tilt to show off top and lateral beveled facets
      meshRef.current.rotation.x = 0.08 + Math.sin(rot * 2) * 0.035;
      meshRef.current.position.y = Math.sin(rot * 2) * 0.05;
    }
  });

  const extrudeSettings = useMemo(
    () => ({
      depth: 48,
      bevelEnabled: true,
      bevelThickness: 4.0,
      bevelSize: 2.8,
      bevelSegments: 6,
    }),
    []
  );

  // Authentic Envista brand gradient texture sampled directly from logo.png
  const brandTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      // Diagonal gradient matching the exact sampled color distribution in logo.png:
      // Vibrant coral-pink at top-right, transitioning to luminous magenta at top crest,
      // rich royal purple through the center/apex, and deep electric violet on the left.
      const grad = ctx.createLinearGradient(512, 40, 40, 480);
      grad.addColorStop(0.0, "#f8739f"); // Vivid coral-pink highlight at top-right
      grad.addColorStop(0.18, "#e25e9e"); // Radiant rose-orchid
      grad.addColorStop(0.36, "#b553a8"); // Crown luminous magenta-orchid
      grad.addColorStop(0.58, "#9337b0"); // Mid electric violet
      grad.addColorStop(0.78, "#7426b6"); // Signature brand purple
      grad.addColorStop(1.0, "#5e26b6"); // Deep electric indigo-purple
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 512);
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.ClampToEdgeWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    return tex;
  }, []);

  if (shapes.length === 0) {
    throw new Error("Unable to parse 3D shield geometry in About");
  }

  // Scale matched to prominent hero presence
  const scale = 0.0072;

  return (
    <group ref={meshRef}>
      <group
        position={[-220 * scale, 254 * scale, -(48 / 2) * scale]}
        scale={[scale, -scale, scale]}
      >
        {shapes.map((shape, index) => (
          <mesh key={index} castShadow receiveShadow>
            <extrudeGeometry args={[shape, extrudeSettings]} />
            <meshPhysicalMaterial
              map={brandTexture}
              color="#ffffff" // Neutral base so authentic brand gradient renders with full fidelity
              emissive="#3b0764"
              emissiveIntensity={0.25}
              metalness={0.90} // High-luster machined alloy
              roughness={0.14} // Glossy specular shine
              clearcoat={1.0} // High-gloss studio lacquer
              clearcoatRoughness={0.06}
              reflectivity={1.0}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

// --- LIGHTING WITH SWEEPING SPECULAR HIGHLIGHTS (RELIABLE ZERO-ASSET SETUP) ---
function AboutLightingSystem() {
  const sweepRef = useRef<THREE.DirectionalLight>(null);

  useFrame(({ clock }) => {
    if (sweepRef.current) {
      const t = clock.getElapsedTime() * 0.75;
      sweepRef.current.position.set(Math.sin(t) * 10, 4, Math.cos(t) * 6 + 7);
    }
  });

  return (
    <>
      <ambientLight intensity={1.4} />
      {/* Front primary key light */}
      <directionalLight position={[2, 6, 9]} intensity={4.8} color="#ffffff" />
      {/* Dynamic sweeping specular shine */}
      <directionalLight
        ref={sweepRef}
        color="#ffffff"
        intensity={6.2}
        position={[6, 3, 8]}
      />
      {/* High-angle rim light for top beveled edges */}
      <directionalLight position={[0, 8, -4]} intensity={4.2} color="#f5d0fe" />
      {/* Lateral rim lights highlighting the 3D thickness */}
      <directionalLight position={[-9, 2, 2]} intensity={5.2} color="#d8b4fe" />
      <directionalLight position={[9, 2, 2]} intensity={4.2} color="#c084fc" />
      {/* Subtle bottom warm magenta fill */}
      <directionalLight position={[0, -7, 4]} intensity={2.4} color="#e879f9" />
    </>
  );
}

export default function AboutHeroShield({ className = "" }: { className?: string }) {
  return (
    <div className={`relative mx-auto aspect-[16/10] w-full max-w-[580px] sm:max-w-[640px] md:max-w-[700px] flex items-center justify-center ${className}`}>
      {/* ========================================================================= */}
      {/* RADIANT LIGHT WHITE / OFF-WHITE GRADIENT HALO BEHIND REVOLVING SHIELD       */}
      {/* ========================================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-visible select-none"
      >
        {/* 1. Luminous Pure White / Off-White Core Halo (Direct high-contrast back-glow) */}
        <div
          className="absolute h-[210px] w-[210px] sm:h-[280px] sm:w-[280px] rounded-full opacity-95 blur-[32px]"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.98) 0%, rgba(250, 250, 255, 0.85) 30%, rgba(240, 242, 254, 0.5) 55%, transparent 75%)",
          }}
        />

        {/* 2. Soft Off-White & Pale Platinum Extended Bloom */}
        <div
          className="absolute h-[330px] w-[330px] sm:h-[420px] sm:w-[420px] rounded-full opacity-70 blur-[60px]"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.65) 0%, rgba(245, 243, 255, 0.42) 35%, rgba(237, 233, 254, 0.2) 60%, transparent 80%)",
          }}
        />

        {/* 3. Outer Brand Royal Purple Atmospheric Soft Depth */}
        <div
          className="absolute h-[430px] w-[430px] sm:h-[520px] sm:w-[520px] rounded-full opacity-35 blur-[95px]"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.4) 0%, rgba(91, 33, 182, 0.2) 45%, transparent 75%)",
          }}
        />
      </div>

      {/* 3D WebGL Canvas */}
      <div className="relative h-full w-full z-[1]">
        <WebGLErrorBoundary>
          <Canvas
            camera={{ position: [0, 0, 9.2], fov: 40 }}
            gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
            dpr={[1, 2]}
          >
            <Suspense fallback={null}>
              <AboutLightingSystem />
              <Shield3DAbout />
            </Suspense>
          </Canvas>
        </WebGLErrorBoundary>
      </div>
    </div>
  );
}
