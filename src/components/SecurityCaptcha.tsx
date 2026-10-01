import React, { useState, useEffect, useRef, useCallback } from "react";

interface SecurityCaptchaProps {
  onVerify: (isValid: boolean) => void;
  error?: string;
  onClearError?: () => void;
  resetTrigger?: number;
}

// Unambiguous alphanumeric characters (excluding 0, O, 1, I, l)
const CHAR_POOL = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";

const CAPTCHA_COLORS = [
  "#B4FF00", // Cyber Lime
  "#a855f7", // Purple
  "#38bdf8", // Sky
  "#34d399", // Emerald
  "#f43f5e", // Rose
  "#fbbf24", // Amber
];

const FONTS = ["bold 22px 'Space Mono', monospace", "bold 24px 'Inter', sans-serif", "bold 23px 'JetBrains Mono', monospace", "900 24px 'Outfit', sans-serif"];

export default function SecurityCaptcha({
  onVerify,
  error,
  onClearError,
  resetTrigger,
}: SecurityCaptchaProps) {
  const [captchaCode, setCaptchaCode] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Generate random 6-character code
  const generateNewCode = useCallback(() => {
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += CHAR_POOL.charAt(Math.floor(Math.random() * CHAR_POOL.length));
    }
    setCaptchaCode(result);
    setUserInput("");
    setIsVerified(false);
    onVerify(false);
    if (onClearError) onClearError();
    return result;
  }, [onVerify, onClearError]);

  // Draw code with cyber-defense distortion onto canvas
  const drawCaptcha = useCallback((code: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Background gradient
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, "#090518");
    grad.addColorStop(0.5, "#140b2a");
    grad.addColorStop(1, "#0a041c");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Subtle interference grid
    ctx.strokeStyle = "rgba(180, 255, 0, 0.08)";
    ctx.lineWidth = 1;
    for (let x = 12; x < width; x += 16) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 10; y < height; y += 14) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Random noise dots
    for (let i = 0; i < 45; i++) {
      ctx.fillStyle = CAPTCHA_COLORS[Math.floor(Math.random() * CAPTCHA_COLORS.length)];
      ctx.globalAlpha = 0.35;
      ctx.beginPath();
      ctx.arc(
        Math.random() * width,
        Math.random() * height,
        Math.random() * 1.8 + 0.5,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    // Interference curved lines
    for (let i = 0; i < 3; i++) {
      ctx.strokeStyle = CAPTCHA_COLORS[i % CAPTCHA_COLORS.length];
      ctx.globalAlpha = 0.45;
      ctx.lineWidth = Math.random() * 1.5 + 1;
      ctx.beginPath();
      ctx.moveTo(0, Math.random() * height);
      ctx.bezierCurveTo(
        width * 0.25, Math.random() * height,
        width * 0.75, Math.random() * height,
        width, Math.random() * height
      );
      ctx.stroke();
    }

    // Render each character with rotation, shadow and color
    ctx.globalAlpha = 1;
    const charSpacing = width / (code.length + 0.6);

    for (let i = 0; i < code.length; i++) {
      const char = code[i];
      const font = FONTS[Math.floor(Math.random() * FONTS.length)];
      ctx.font = font;

      const color = CAPTCHA_COLORS[i % CAPTCHA_COLORS.length];
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 6;

      const x = (i + 0.6) * charSpacing;
      const y = height / 2 + (Math.random() * 8 - 4) + 6;
      const angle = (Math.random() * 32 - 16) * (Math.PI / 180);

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.fillText(char, 0, 0);
      ctx.restore();
    }

    // Reset shadow
    ctx.shadowBlur = 0;
  }, []);

  // Initial code generation
  useEffect(() => {
    const code = generateNewCode();
    drawCaptcha(code);
  }, []); // Run once on mount

  // Redraw when captchaCode changes
  useEffect(() => {
    if (captchaCode) {
      drawCaptcha(captchaCode);
    }
  }, [captchaCode, drawCaptcha]);

  // Handle external reset (e.g. on form submission)
  useEffect(() => {
    if (resetTrigger !== undefined && resetTrigger > 0) {
      const code = generateNewCode();
      drawCaptcha(code);
    }
  }, [resetTrigger]);

  // Input change and auto-validation
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^a-zA-Z0-9]/g, "").slice(0, 6).toUpperCase();
    setUserInput(val);

    if (error && onClearError) {
      onClearError();
    }

    const matched = val === captchaCode.toUpperCase();
    setIsVerified(matched);
    onVerify(matched);
  };

  // Audio accessibility readout
  const handleSpeakCaptcha = () => {
    if (!("speechSynthesis" in window) || isSpeaking) return;
    const utterance = new SpeechSynthesisUtterance();
    // Spell out letters with spaces
    utterance.text = `Security code: ${captchaCode.split("").join(", ")}`;
    utterance.rate = 0.85;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="rounded-xl border border-white/15 bg-gradient-to-b from-[#0e0724] to-[#070314] p-3.5 sm:p-4 shadow-inner transition-colors duration-200">
      {/* Header Label */}
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-[#B4FF00] animate-pulse shadow-[0_0_8px_#B4FF00]" />
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-200">
            Security Verification
          </span>
          <span className="hidden sm:inline-block font-mono text-[9px] uppercase tracking-widest text-slate-400 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded">
            Anti-Bot
          </span>
        </div>
        {isVerified ? (
          <span className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-[#B4FF00]">
            <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
            Verified
          </span>
        ) : (
          <span className="text-[11px] text-slate-400">
            Enter 6-char code
          </span>
        )}
      </div>

      {/* Captcha Canvas + Controls + Input Row */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        {/* Canvas Display with cyber frame */}
        <div className="relative group/canvas shrink-0 rounded-lg overflow-hidden border border-lime-500/30 bg-[#090518] shadow-[0_0_15px_rgba(180,255,0,0.08)]">
          <canvas
            ref={canvasRef}
            width={180}
            height={50}
            className="block h-[46px] w-[170px] sm:w-[180px] cursor-pointer select-none"
            onClick={generateNewCode}
            title="Click code to refresh"
          />
          {/* Subtle scanline overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
        </div>

        {/* Action Buttons: Refresh + Speech */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={generateNewCode}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-slate-300 transition-all hover:bg-white/10 hover:text-[#B4FF00] hover:border-lime-500/40 active:scale-95 cursor-pointer"
            title="Generate new security code"
            aria-label="Refresh Captcha Code"
          >
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>

          {"speechSynthesis" in window && (
            <button
              type="button"
              onClick={handleSpeakCaptcha}
              className={`flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 transition-all hover:bg-white/10 hover:border-sky-400/40 active:scale-95 cursor-pointer ${
                isSpeaking ? "text-sky-400 border-sky-400/50 bg-sky-950/30" : "text-slate-300 hover:text-sky-300"
              }`}
              title="Listen to security code"
              aria-label="Speak Captcha Code"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Captcha Input */}
        <div className="relative flex-1">
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            maxLength={6}
            placeholder="ENTER CODE"
            autoComplete="off"
            spellCheck={false}
            className={`w-full rounded-lg border px-3 py-2.5 font-mono text-sm sm:text-base font-bold tracking-widest uppercase transition-all duration-200 outline-none placeholder:text-slate-500 placeholder:tracking-normal placeholder:font-sans placeholder:text-xs placeholder:font-normal ${
              isVerified
                ? "border-[#B4FF00] bg-lime-950/20 text-[#B4FF00] shadow-[0_0_14px_rgba(180,255,0,0.18)]"
                : error
                ? "border-rose-500/80 bg-rose-950/20 text-rose-200 focus:border-rose-400"
                : "border-white/15 bg-[#0b051e] text-white focus:border-[#B4FF00] focus:shadow-[0_0_12px_rgba(180,255,0,0.15)]"
            }`}
          />
          {isVerified && (
            <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#B4FF00]">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Validation Error Message */}
      {error && (
        <p className="mt-2 text-[11px] font-medium text-rose-400 flex items-center gap-1.5">
          <svg className="h-3.5 w-3.5 shrink-0 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}
