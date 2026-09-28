import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  ShieldCheck,
  Check,
  X,
  SlidersHorizontal,
  Lock,
  ChartLineUp,
  Sliders,
  MegaphoneSimple,
  CaretDown,
  Info,
  Cookie,
  ArrowSquareOut,
} from "@phosphor-icons/react";
import { getConsentSessionId, recordConsent, withdrawConsent } from "../lib/api";

const CHOICE_KEY = "envista_cookie_choice";

export type GranularConsent = {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
  timestamp: string;
};

const DEFAULT_CONSENT: GranularConsent = {
  necessary: true,
  analytics: false,
  functional: false,
  marketing: false,
  timestamp: new Date().toISOString(),
};

function loadStoredChoice(): GranularConsent | null {
  try {
    const raw = localStorage.getItem(CHOICE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed?.analytics === "boolean" && typeof parsed?.marketing === "boolean") {
      return {
        necessary: true,
        analytics: parsed.analytics,
        functional: typeof parsed.functional === "boolean" ? parsed.functional : false,
        marketing: parsed.marketing,
        timestamp: parsed.timestamp || new Date().toISOString(),
      };
    }
    return null;
  } catch {
    return null;
  }
}

function storeChoice(choice: GranularConsent): void {
  try {
    localStorage.setItem(CHOICE_KEY, JSON.stringify(choice));
  } catch {
    // Session fallback if storage restricted
  }
}

export default function CookieConsent() {
  const [hasStoredPreference, setHasStoredPreference] = useState(true);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState<"privacy" | "necessary" | "analytics" | "functional" | "marketing">("privacy");
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  // Granular preference state
  const [analytics, setAnalytics] = useState(false);
  const [functional, setFunctional] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const stored = loadStoredChoice();
    if (!stored) {
      setHasStoredPreference(false);
      setShowBanner(true);
    } else {
      setAnalytics(stored.analytics);
      setFunctional(stored.functional);
      setMarketing(stored.marketing);
    }

    // Listen for custom event to open preference center anytime
    const handleOpenSettings = () => {
      setShowModal(true);
      setShowBanner(false);
    };

    window.addEventListener("open-cookie-settings", handleOpenSettings);
    return () => window.removeEventListener("open-cookie-settings", handleOpenSettings);
  }, []);

  async function applyChoices(choice: Omit<GranularConsent, "necessary" | "timestamp">) {
    const fullChoice: GranularConsent = {
      necessary: true,
      analytics: choice.analytics,
      functional: choice.functional,
      marketing: choice.marketing,
      timestamp: new Date().toISOString(),
    };

    setAnalytics(fullChoice.analytics);
    setFunctional(fullChoice.functional);
    setMarketing(fullChoice.marketing);
    storeChoice(fullChoice);
    setHasStoredPreference(true);
    setShowBanner(false);
    setShowModal(false);

    // Call API (preserves backwards-compatibility with existing backend)
    await recordConsent({
      analytics: fullChoice.analytics,
      marketing: fullChoice.marketing,
    });
  }

  const handleAcceptAll = () => {
    applyChoices({ analytics: true, functional: true, marketing: true });
  };

  const handleRejectAll = () => {
    applyChoices({ analytics: false, functional: false, marketing: false });
  };

  const handleSavePreferences = () => {
    applyChoices({ analytics, functional, marketing });
  };

  const toggleExpand = (cat: string) => {
    setExpandedCategory(expandedCategory === cat ? null : cat);
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. ONETRUST INITIAL CONSENT BANNER                                         */}
      {/* ========================================================================= */}
      {showBanner && !showModal && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent banner"
          className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-auto lg:max-w-2xl z-[999] transition-all duration-300 animate-in fade-in slide-in-from-bottom-6"
        >
          <div className="relative overflow-hidden rounded-2xl border border-violet-500/30 bg-[#090518]/95 p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(168,85,247,0.18)] backdrop-blur-2xl text-white">
            {/* Ambient Background Radial Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-violet-600/20 blur-3xl"
            />

            {/* Top Bar with OneTrust / Envista Brand Trust Indicator */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-500/40 bg-violet-600/20 text-violet-300 shadow-inner">
                  <ShieldCheck size={22} weight="bold" />
                </div>
                <div>
                  <h3 className="font-display text-sm sm:text-base font-bold text-white tracking-tight">
                    Privacy Preference Center
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 font-mono text-[9px] font-bold text-emerald-400 uppercase tracking-wider border border-emerald-500/30">
                      DPDP Act 2023 Compliant
                    </span>
                    <span className="rounded-full bg-violet-500/15 px-2 py-0.5 font-mono text-[9px] font-bold text-violet-300 uppercase tracking-wider border border-violet-500/30">
                      OneTrust Verified Model
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleRejectAll}
                className="text-slate-400 hover:text-white transition-colors p-1 cursor-pointer"
                title="Dismiss and use Essential Cookies Only"
                aria-label="Dismiss banner"
              >
                <X size={18} weight="bold" />
              </button>
            </div>

            {/* Explanatory Body Copy */}
            <p className="mt-3.5 text-xs sm:text-[13px] leading-relaxed text-slate-300">
              When you visit our site, we store and retrieve information on your browser in the form of cookies. We use this data to ensure essential cybersecurity defenses, analyze threat intelligence telemetry, and deliver tailored security advisories. You can choose not to allow some types of cookies by clicking on{" "}
              <button
                type="button"
                onClick={() => {
                  setShowBanner(false);
                  setShowModal(true);
                }}
                className="text-violet-300 underline font-medium hover:text-white transition-colors cursor-pointer"
              >
                Cookie Settings
              </button>
              .
            </p>

            {/* Actions: OneTrust Standard Trinity (Reject All / Cookie Settings / Accept All) */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  setShowBanner(false);
                  setShowModal(true);
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors py-1 cursor-pointer"
              >
                <SlidersHorizontal size={14} weight="bold" className="text-violet-400" />
                <span>Cookie Settings</span>
              </button>

              <div className="flex items-center gap-2.5 ml-auto">
                <button
                  type="button"
                  onClick={handleRejectAll}
                  className="rounded-xl border border-white/20 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white transition-all hover:bg-white/10 hover:border-white/30 cursor-pointer"
                >
                  Reject All
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 sm:px-5 py-2 text-xs font-bold text-white shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all hover:from-violet-500 hover:to-indigo-500 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  Accept All Cookies
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. ONETRUST FULL GRANULAR PREFERENCE CENTER (MODAL)                        */}
      {/* ========================================================================= */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="onetrust-modal-title"
          className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6"
        >
          {/* Backdrop Blur Overlay */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in"
            onClick={() => setShowModal(false)}
          />

          {/* Modal Container */}
          <div className="relative flex max-h-[90vh] w-full max-w-4xl flex-col rounded-3xl border border-violet-500/35 bg-[#0b061d] text-white shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_50px_rgba(168,85,247,0.22)] overflow-hidden z-10 animate-in zoom-in-95">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 bg-[#0e0826]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-500/40 bg-violet-600/20 text-violet-300">
                  <ShieldCheck size={22} weight="bold" />
                </div>
                <div>
                  <h2 id="onetrust-modal-title" className="font-display text-base sm:text-lg font-bold text-white tracking-tight">
                    Privacy Preference Center
                  </h2>
                  <p className="text-[11px] font-mono text-slate-400">
                    Sovereign Data Governance &bull; DPDP Act 2023 &amp; ISO 27001
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="hidden sm:inline-flex rounded-xl bg-violet-600/30 border border-violet-500/40 px-3 py-1.5 text-xs font-semibold text-violet-200 transition-colors hover:bg-violet-600/50 hover:text-white cursor-pointer"
                >
                  Allow All
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="rounded-xl border border-white/10 p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
                  title="Close"
                  aria-label="Close preference center"
                >
                  <X size={18} weight="bold" />
                </button>
              </div>
            </div>

            {/* Modal Body: Split Navigation (OneTrust Standard) */}
            <div className="flex flex-1 flex-col overflow-hidden md:flex-row">
              {/* Left Sidebar Category Tabs */}
              <div className="w-full border-b border-white/10 md:w-64 md:border-b-0 md:border-r bg-[#090416] p-3 overflow-y-auto space-y-1">
                <button
                  type="button"
                  onClick={() => setActiveTab("privacy")}
                  className={`w-full flex items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === "privacy"
                      ? "bg-violet-600/25 text-white border border-violet-500/40 shadow-sm"
                      : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Info size={16} weight="bold" className="text-violet-400" />
                    <span>Your Privacy Rights</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("necessary")}
                  className={`w-full flex items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === "necessary"
                      ? "bg-violet-600/25 text-white border border-violet-500/40 shadow-sm"
                      : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Lock size={16} weight="bold" className="text-emerald-400" />
                    <span>Strictly Necessary</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold">Active</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("analytics")}
                  className={`w-full flex items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === "analytics"
                      ? "bg-violet-600/25 text-white border border-violet-500/40 shadow-sm"
                      : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <ChartLineUp size={16} weight="bold" className="text-sky-400" />
                    <span>Performance &amp; Analytics</span>
                  </div>
                  <span className={`h-2 w-2 rounded-full ${analytics ? "bg-violet-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" : "bg-slate-600"}`} />
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("functional")}
                  className={`w-full flex items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === "functional"
                      ? "bg-violet-600/25 text-white border border-violet-500/40 shadow-sm"
                      : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Sliders size={16} weight="bold" className="text-amber-400" />
                    <span>Functional Preferences</span>
                  </div>
                  <span className={`h-2 w-2 rounded-full ${functional ? "bg-violet-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" : "bg-slate-600"}`} />
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("marketing")}
                  className={`w-full flex items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === "marketing"
                      ? "bg-violet-600/25 text-white border border-violet-500/40 shadow-sm"
                      : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <MegaphoneSimple size={16} weight="bold" className="text-purple-400" />
                    <span>Targeting &amp; Advisory</span>
                  </div>
                  <span className={`h-2 w-2 rounded-full ${marketing ? "bg-violet-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" : "bg-slate-600"}`} />
                </button>
              </div>

              {/* Right Content Panel */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* 1. YOUR PRIVACY RIGHTS TAB */}
                {activeTab === "privacy" && (
                  <div className="space-y-4">
                    <h3 className="font-display text-base font-bold text-white">
                      Your Privacy Rights &amp; DPDP Governance
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                      Envista Cyber Defence is committed to full transparency regarding personal data handling. When you browse our digital assets, we utilize cookies and local telemetry storage to uphold mission-critical security controls and deliver specialized cyber intelligence.
                    </p>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                      Under India's Digital Personal Data Protection (DPDP) Act 2023, the European Union GDPR, and UAE Data Protection laws, you retain the legal right to give, manage, and withdraw your consent at any time. Strictly necessary cookies cannot be disabled as they maintain core system defenses.
                    </p>

                    <div className="mt-4 rounded-2xl border border-violet-500/20 bg-violet-600/10 p-4">
                      <h4 className="text-xs font-bold text-violet-300 uppercase tracking-wider font-mono">
                        Consent Verification &amp; Session Tracking
                      </h4>
                      <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                        Consent choices are cryptographically signed to an anonymous identifier:{" "}
                        <code className="rounded bg-black/40 px-1.5 py-0.5 font-mono text-[11px] text-violet-200">
                          {getConsentSessionId() ? `${getConsentSessionId()?.slice(0, 14)}...` : "Active Local Session"}
                        </code>
                        . You can modify these granular permissions anytime via this Preference Center.
                      </p>
                    </div>
                  </div>
                )}

                {/* 2. STRICTLY NECESSARY COOKIES TAB */}
                {activeTab === "necessary" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-display text-base font-bold text-white">
                          Strictly Necessary Cookies
                        </h3>
                        <p className="text-xs text-slate-400">Essential for security, CSRF protection, and platform integrity</p>
                      </div>
                      <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 font-mono text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                        Always Active
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                      These cookies are required for the website to function securely and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in enterprise contact forms.
                    </p>

                    {/* Cookie Details Dropdown */}
                    <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.02]">
                      <button
                        type="button"
                        onClick={() => toggleExpand("necessary")}
                        className="flex w-full items-center justify-between p-3.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          <Cookie size={16} className="text-violet-400" />
                          <span>Cookie Sub-Group Details (3 Cookies)</span>
                        </span>
                        <CaretDown
                          size={14}
                          className={`transition-transform duration-200 ${expandedCategory === "necessary" ? "rotate-180" : ""}`}
                        />
                      </button>

                      {expandedCategory === "necessary" && (
                        <div className="border-t border-white/10 p-3.5 space-y-3 text-xs">
                          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 bg-black/30 p-2.5 rounded-lg border border-white/5">
                            <div>
                              <span className="font-mono text-[10px] text-slate-400 uppercase">Cookie Name</span>
                              <p className="font-mono font-bold text-white mt-0.5">envista_csrf_token</p>
                            </div>
                            <div>
                              <span className="font-mono text-[10px] text-slate-400 uppercase">Domain &bull; Lifespan</span>
                              <p className="text-slate-300 mt-0.5">envistacyber.com &bull; Session</p>
                            </div>
                            <div>
                              <span className="font-mono text-[10px] text-slate-400 uppercase">Classification</span>
                              <p className="text-slate-300 mt-0.5">Cross-Site Request Integrity</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 bg-black/30 p-2.5 rounded-lg border border-white/5">
                            <div>
                              <span className="font-mono text-[10px] text-slate-400 uppercase">Cookie Name</span>
                              <p className="font-mono font-bold text-white mt-0.5">envista_cookie_choice</p>
                            </div>
                            <div>
                              <span className="font-mono text-[10px] text-slate-400 uppercase">Domain &bull; Lifespan</span>
                              <p className="text-slate-300 mt-0.5">envistacyber.com &bull; 1 Year</p>
                            </div>
                            <div>
                              <span className="font-mono text-[10px] text-slate-400 uppercase">Classification</span>
                              <p className="text-slate-300 mt-0.5">Consent Preference Storage</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 bg-black/30 p-2.5 rounded-lg border border-white/5">
                            <div>
                              <span className="font-mono text-[10px] text-slate-400 uppercase">Cookie Name</span>
                              <p className="font-mono font-bold text-white mt-0.5">envista_session_id</p>
                            </div>
                            <div>
                              <span className="font-mono text-[10px] text-slate-400 uppercase">Domain &bull; Lifespan</span>
                              <p className="text-slate-300 mt-0.5">envistacyber.com &bull; Session</p>
                            </div>
                            <div>
                              <span className="font-mono text-[10px] text-slate-400 uppercase">Classification</span>
                              <p className="text-slate-300 mt-0.5">Rate-Limiting &amp; Anti-DDoS</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* 3. PERFORMANCE & ANALYTICS COOKIES TAB */}
                {activeTab === "analytics" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-display text-base font-bold text-white">
                          Performance &amp; Analytics Cookies
                        </h3>
                        <p className="text-xs text-slate-400">Threat telemetry, load speeds, and anonymous traffic insights</p>
                      </div>

                      {/* OneTrust Toggle Switch */}
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={analytics}
                          onChange={(e) => setAnalytics(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-600 peer-checked:shadow-[0_0_12px_rgba(168,85,247,0.5)]"></div>
                      </label>
                    </div>

                    <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                      These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our cyber defense portals. They help us understand which capabilities are the most and least popular, and see how visitors navigate around the site. All information collected is aggregated and therefore anonymized.
                    </p>

                    {/* Cookie Details Dropdown */}
                    <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.02]">
                      <button
                        type="button"
                        onClick={() => toggleExpand("analytics")}
                        className="flex w-full items-center justify-between p-3.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          <Cookie size={16} className="text-violet-400" />
                          <span>Cookie Sub-Group Details (2 Cookies)</span>
                        </span>
                        <CaretDown
                          size={14}
                          className={`transition-transform duration-200 ${expandedCategory === "analytics" ? "rotate-180" : ""}`}
                        />
                      </button>

                      {expandedCategory === "analytics" && (
                        <div className="border-t border-white/10 p-3.5 space-y-3 text-xs">
                          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 bg-black/30 p-2.5 rounded-lg border border-white/5">
                            <div>
                              <span className="font-mono text-[10px] text-slate-400 uppercase">Cookie Name</span>
                              <p className="font-mono font-bold text-white mt-0.5">_env_analytics_id</p>
                            </div>
                            <div>
                              <span className="font-mono text-[10px] text-slate-400 uppercase">Domain &bull; Lifespan</span>
                              <p className="text-slate-300 mt-0.5">envistacyber.com &bull; 13 Months</p>
                            </div>
                            <div>
                              <span className="font-mono text-[10px] text-slate-400 uppercase">Classification</span>
                              <p className="text-slate-300 mt-0.5">Anonymized Visitor Telemetry</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 bg-black/30 p-2.5 rounded-lg border border-white/5">
                            <div>
                              <span className="font-mono text-[10px] text-slate-400 uppercase">Cookie Name</span>
                              <p className="font-mono font-bold text-white mt-0.5">_env_telemetry_beacon</p>
                            </div>
                            <div>
                              <span className="font-mono text-[10px] text-slate-400 uppercase">Domain &bull; Lifespan</span>
                              <p className="text-slate-300 mt-0.5">envistacyber.com &bull; 30 Days</p>
                            </div>
                            <div>
                              <span className="font-mono text-[10px] text-slate-400 uppercase">Classification</span>
                              <p className="text-slate-300 mt-0.5">Diagnostic Network Health</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* 4. FUNCTIONAL PREFERENCES TAB */}
                {activeTab === "functional" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-display text-base font-bold text-white">
                          Functional &amp; Preference Cookies
                        </h3>
                        <p className="text-xs text-slate-400">Remember user theme, regional regulatory framework, and accessibility</p>
                      </div>

                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={functional}
                          onChange={(e) => setFunctional(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-600 peer-checked:shadow-[0_0_12px_rgba(168,85,247,0.5)]"></div>
                      </label>
                    </div>

                    <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                      These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services (such as preferred dark theme or regional compliance view) may not function properly.
                    </p>

                    {/* Cookie Details Dropdown */}
                    <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.02]">
                      <button
                        type="button"
                        onClick={() => toggleExpand("functional")}
                        className="flex w-full items-center justify-between p-3.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          <Cookie size={16} className="text-violet-400" />
                          <span>Cookie Sub-Group Details (2 Cookies)</span>
                        </span>
                        <CaretDown
                          size={14}
                          className={`transition-transform duration-200 ${expandedCategory === "functional" ? "rotate-180" : ""}`}
                        />
                      </button>

                      {expandedCategory === "functional" && (
                        <div className="border-t border-white/10 p-3.5 space-y-3 text-xs">
                          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 bg-black/30 p-2.5 rounded-lg border border-white/5">
                            <div>
                              <span className="font-mono text-[10px] text-slate-400 uppercase">Cookie Name</span>
                              <p className="font-mono font-bold text-white mt-0.5">envista_theme_pref</p>
                            </div>
                            <div>
                              <span className="font-mono text-[10px] text-slate-400 uppercase">Domain &bull; Lifespan</span>
                              <p className="text-slate-300 mt-0.5">envistacyber.com &bull; 1 Year</p>
                            </div>
                            <div>
                              <span className="font-mono text-[10px] text-slate-400 uppercase">Classification</span>
                              <p className="text-slate-300 mt-0.5">Dark/Light Mode Memory</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 bg-black/30 p-2.5 rounded-lg border border-white/5">
                            <div>
                              <span className="font-mono text-[10px] text-slate-400 uppercase">Cookie Name</span>
                              <p className="font-mono font-bold text-white mt-0.5">envista_region_pref</p>
                            </div>
                            <div>
                              <span className="font-mono text-[10px] text-slate-400 uppercase">Domain &bull; Lifespan</span>
                              <p className="text-slate-300 mt-0.5">envistacyber.com &bull; 6 Months</p>
                            </div>
                            <div>
                              <span className="font-mono text-[10px] text-slate-400 uppercase">Classification</span>
                              <p className="text-slate-300 mt-0.5">Jurisdiction Framework Preset</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* 5. TARGETING & ADVISORY TAB */}
                {activeTab === "marketing" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-display text-base font-bold text-white">
                          Targeting &amp; Advisory Cookies
                        </h3>
                        <p className="text-xs text-slate-400">Curated threat intelligence bulletins and specialized advisory briefings</p>
                      </div>

                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={marketing}
                          onChange={(e) => setMarketing(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-600 peer-checked:shadow-[0_0_12px_rgba(168,85,247,0.5)]"></div>
                      </label>
                    </div>

                    <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                      These cookies may be set through our site by our cybersecurity research and threat intelligence partners. They may be used by those companies to build a profile of your organization&rsquo;s threat vector exposure and show you relevant advisories, vulnerabilities, and briefings on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device.
                    </p>

                    {/* Cookie Details Dropdown */}
                    <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.02]">
                      <button
                        type="button"
                        onClick={() => toggleExpand("marketing")}
                        className="flex w-full items-center justify-between p-3.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          <Cookie size={16} className="text-violet-400" />
                          <span>Cookie Sub-Group Details (2 Cookies)</span>
                        </span>
                        <CaretDown
                          size={14}
                          className={`transition-transform duration-200 ${expandedCategory === "marketing" ? "rotate-180" : ""}`}
                        />
                      </button>

                      {expandedCategory === "marketing" && (
                        <div className="border-t border-white/10 p-3.5 space-y-3 text-xs">
                          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 bg-black/30 p-2.5 rounded-lg border border-white/5">
                            <div>
                              <span className="font-mono text-[10px] text-slate-400 uppercase">Cookie Name</span>
                              <p className="font-mono font-bold text-white mt-0.5">_env_threat_advisory</p>
                            </div>
                            <div>
                              <span className="font-mono text-[10px] text-slate-400 uppercase">Domain &bull; Lifespan</span>
                              <p className="text-slate-300 mt-0.5">envistacyber.com &bull; 90 Days</p>
                            </div>
                            <div>
                              <span className="font-mono text-[10px] text-slate-400 uppercase">Classification</span>
                              <p className="text-slate-300 mt-0.5">Industry Advisory Targeting</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 bg-black/30 p-2.5 rounded-lg border border-white/5">
                            <div>
                              <span className="font-mono text-[10px] text-slate-400 uppercase">Cookie Name</span>
                              <p className="font-mono font-bold text-white mt-0.5">_env_advisory_campaign</p>
                            </div>
                            <div>
                              <span className="font-mono text-[10px] text-slate-400 uppercase">Domain &bull; Lifespan</span>
                              <p className="text-slate-300 mt-0.5">envistacyber.com &bull; 90 Days</p>
                            </div>
                            <div>
                              <span className="font-mono text-[10px] text-slate-400 uppercase">Classification</span>
                              <p className="text-slate-300 mt-0.5">Threat Bulletin Attribution</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer (OneTrust Standard Bar) */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 bg-[#0e0826] px-6 py-4">
              <div className="flex items-center gap-4 text-xs text-slate-400">
                <Link to="/about" className="hover:text-white transition-colors underline">
                  Privacy Policy
                </Link>
                <span>&bull;</span>
                <Link to="/faq" className="hover:text-white transition-colors underline">
                  DPDP Framework
                </Link>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={handleRejectAll}
                  className="rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-white/10 cursor-pointer"
                >
                  Reject All
                </button>
                <button
                  type="button"
                  onClick={handleSavePreferences}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2 text-xs font-bold text-white shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all hover:from-violet-500 hover:to-indigo-500 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <Check size={14} weight="bold" />
                  <span>Confirm My Choices</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. PERSISTENT FLOATING ONETRUST BADGE (RE-OPEN PREFERENCE CENTER ANYTIME)   */}
      {/* ========================================================================= */}
      {hasStoredPreference && !showBanner && !showModal && (
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="fixed bottom-4 left-4 z-[990] flex h-9 w-9 items-center justify-center rounded-full border border-violet-500/40 bg-[#0b061d]/90 text-violet-300 shadow-[0_4px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(168,85,247,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-violet-400 hover:bg-violet-900/60 hover:text-white cursor-pointer group"
          title="Privacy & Cookie Preferences"
          aria-label="Open Privacy & Cookie Preferences"
        >
          <Cookie size={18} weight="bold" className="transition-transform duration-300 group-hover:rotate-12" />
          <span className="pointer-events-none absolute left-full ml-2 hidden whitespace-nowrap rounded-lg border border-violet-500/30 bg-[#0b061d] px-2.5 py-1 text-[11px] font-semibold text-white shadow-xl backdrop-blur-md md:group-hover:block">
            Cookie Settings
          </span>
        </button>
      )}
    </>
  );
}

export function resetCookieConsent(): void {
  try {
    localStorage.removeItem(CHOICE_KEY);
  } catch {
    /* ignore */
  }
  if (getConsentSessionId()) void withdrawConsent();
  window.location.reload();
}
