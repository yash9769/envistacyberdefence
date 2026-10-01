import React, { useMemo, useRef, Component, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import svgRaw from "../../imports/envista-mark.svg?raw";
import shieldPng from "../../imports/envista-mark.png";
import orbitSvgRaw from "../../imports/cybercrest-orbit.svg?raw";

// --- GRACEFUL WEBGL ERROR BOUNDARY ---
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
    console.warn("WebGL Canvas fallback engaged in HeroVisual:", error);
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

// --- 3D PURPLE METALLIC SHIELD EMBLEM (USER'S BRAND MARK) ---
function Shield3D() {
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
      console.error("Failed to parse 3D shield SVG shapes:", e);
      return [];
    }
  }, []);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      // Smooth continuous Y-axis rotation that lingers on the front face and turns through the edge
      const rot = meshRef.current.rotation.y;
      const speed = 0.78 - Math.pow(Math.cos(rot), 2) * 0.46;
      meshRef.current.rotation.y += delta * speed;
    }
  });

  // Machined 3D metal emblem: substantial breadth (~10.5% of width) matching CyberCrest reference
  const extrudeSettings = useMemo(
    () => ({
      depth: 46,
      bevelEnabled: true,
      bevelThickness: 3.8,
      bevelSize: 2.6,
      bevelSegments: 5,
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
    throw new Error("Unable to parse 3D shield geometry");
  }

  // Proportions matched to CyberCrest: shield occupies ~50% of orbit diameter
  const scale = 0.0056;

  return (
    <group ref={meshRef}>
      {/* Centering the 440x508 SVG path exactly at (0, 0, 0) with Z-depth centered */}
      <group position={[-220 * scale, 254 * scale, -(46 / 2) * scale]} scale={[scale, -scale, scale]}>
        {shapes.map((shape, index) => (
          <mesh key={index} castShadow receiveShadow>
            <extrudeGeometry args={[shape, extrudeSettings]} />
            <meshPhysicalMaterial
              map={brandTexture}
              color="#ffffff" // Neutral base so authentic brand gradient renders with full fidelity
              emissive="#3b0764"
              emissiveIntensity={0.26}
              metalness={0.88} // High-luster machined alloy
              roughness={0.15} // Glossy specular shine
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

// --- STUDIO LIGHTING & HIGH-SPECULAR SWEEP (RELIABLE ZERO-ASSET SETUP) ---
function LightingSystem() {
  const sweepLightRef = useRef<THREE.DirectionalLight>(null);
  const pinkSweepRef = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (sweepLightRef.current) {
      // Dynamic sweeping specular highlight glinting across the face and beveled edges
      sweepLightRef.current.position.set(Math.sin(t * 0.85) * 9, 3, Math.cos(t * 0.85) * 5 + 6);
    }
    if (pinkSweepRef.current) {
      // Dynamic moving pink specular point light rimming the shield from behind
      pinkSweepRef.current.position.set(Math.sin(t * 0.75) * 4.2, Math.cos(t * 0.95) * 2.8, -2.5);
    }
  });

  return (
    <>
      <ambientLight intensity={1.4} />
      {/* Front key light for consistent metallic depth */}
      <directionalLight position={[3, 5, 8]} intensity={4.8} color="#ffffff" />
      {/* Sweeping sharp white specular reflection */}
      <directionalLight
        ref={sweepLightRef}
        color="#ffffff"
        intensity={6.0}
        position={[6, 3, 7]}
      />
      {/* Top-right rim light highlighting the sculpted top bevel */}
      <directionalLight position={[5, 7, -3]} intensity={4.0} color="#f3e8ff" />
      {/* Left edge rim light highlighting the 3D extrusion breadth as it rotates */}
      <directionalLight position={[-8, 3, 2]} intensity={5.0} color="#d8b4fe" />

      {/* SOPHISTICATED VIOLET-ORCHID & SUBTLE WARM VELVET RIM LIGHTS */}
      <directionalLight position={[0, 2, -6]} intensity={5.0} color="#c084fc" />
      <pointLight ref={pinkSweepRef} color="#e879f9" intensity={5.2} distance={15} />
      <directionalLight position={[0, -6, 3]} intensity={2.6} color="#a855f7" />
    </>
  );
}

// --- MAIN HERO VISUAL COMPONENT ---
export default function HeroVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative mx-auto aspect-square w-full max-w-[520px] lg:max-w-[580px] xl:max-w-[620px] flex items-center justify-center ${className}`}
    >
      {/* ========================================================================= */}
      {/* RADIANT LIGHT WHITE / OFF-WHITE GRADIENT HALO BEHIND REVOLVING SHIELD       */}
      {/* ========================================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-visible select-none"
      >
        {/* 1. Luminous Pure White / Off-White Core Halo (Direct high-contrast back-glow) */}
        <div
          className="absolute h-[220px] w-[220px] sm:h-[290px] sm:w-[290px] rounded-full opacity-95 blur-[32px]"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.98) 0%, rgba(250, 250, 255, 0.85) 30%, rgba(240, 242, 254, 0.5) 55%, transparent 75%)",
          }}
        />

        {/* 2. Soft Off-White & Pale Platinum Extended Bloom */}
        <div
          className="absolute h-[340px] w-[340px] sm:h-[430px] sm:w-[430px] rounded-full opacity-70 blur-[60px]"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.65) 0%, rgba(245, 243, 255, 0.42) 35%, rgba(237, 233, 254, 0.2) 60%, transparent 80%)",
          }}
        />

        {/* 3. Outer Brand Royal Purple Atmospheric Soft Depth */}
        <div
          className="absolute h-[440px] w-[440px] sm:h-[520px] sm:w-[520px] rounded-full opacity-35 blur-[95px]"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.4) 0%, rgba(91, 33, 182, 0.2) 45%, transparent 75%)",
          }}
        />
      </div>

      {/* 3D WebGL Canvas rendering the 3D rotating metallic shield */}
      <div className="absolute inset-0 z-[1]">
        <WebGLErrorBoundary>
          <Canvas
            camera={{ position: [0, 0, 10], fov: 45 }}
            gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
            dpr={[1, 2]}
          >
            <Suspense fallback={null}>
              <LightingSystem />
              <Shield3D />
            </Suspense>
          </Canvas>
        </WebGLErrorBoundary>
      </div>

      {/* 
        ENHANCED HIGH-VISIBILITY CYBERCREST ORBIT SYSTEM (INLINE DOM):
        4 stages (DISCOVER, TEST, PROTECT, RESILIENCE) in bold high-contrast glowing neon typography,
        revolving around the 3D metallic Envista shield.
      */}
      <div
        className="pointer-events-none absolute inset-0 z-10 flex h-full w-full select-none items-center justify-center [&>svg]:h-full [&>svg]:w-full [&>svg]:object-contain drop-shadow-[0_0_24px_rgba(180,255,0,0.22)]"
        dangerouslySetInnerHTML={{ __html: orbitSvgRaw }}
      />
    </div>
  );
}
