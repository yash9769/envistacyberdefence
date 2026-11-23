import { useEffect, useState, type FormEvent } from "react";
import { useParams, useNavigate } from "react-router";
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  ShieldCheck,
  SealCheck,
} from "@phosphor-icons/react";
import { Btn } from "../components/ui";
import { CERTIFICATES, findCertificate, type Certificate } from "../data/certificates";

const WRAP = "mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8";

/* Only letters, numbers, dashes and slashes are valid in a certificate ID —
   mirrors the printed format, same filtering the evoastra reference uses. */
function normalizeId(raw: string) {
  return raw.toUpperCase().replace(/[^A-Z0-9/-]/g, "");
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
}

type LookupState = "idle" | "checking" | "found" | "not-found";

function ResultPanel({ state, id, cert }: { state: LookupState; id: string; cert?: Certificate }) {
  if (state === "checking") {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md sm:p-8">
        <div className="mx-auto h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-[#B4FF00]" />
        <p className="mt-3 text-sm text-slate-300">Checking…</p>
      </div>
    );
  }

  if (state === "found" && cert) {
    const isValid = cert.status === "valid";
    return (
      <div
        className={`rounded-2xl border p-6 backdrop-blur-md sm:p-8 ${
          isValid ? "border-lime-400/30 bg-lime-500/5" : "border-red-400/30 bg-red-500/5"
        }`}
      >
        <div className="flex items-center gap-2.5">
          {isValid ? (
            <CheckCircle size={22} weight="fill" className="text-[#B4FF00]" />
          ) : (
            <XCircle size={22} weight="fill" className="text-red-400" />
          )}
          <span
            className={`font-mono text-xs font-bold uppercase tracking-widest ${
              isValid ? "text-[#B4FF00]" : "text-red-400"
            }`}
          >
            {isValid ? "Verified" : "Revoked"}
          </span>
        </div>

        <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-white">{cert.internName}</h3>

        <dl className="mt-6 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-2">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-slate-400">Certificate ID</dt>
            <dd className="mt-1 text-sm font-medium text-white">{cert.id}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-slate-400">Designation</dt>
            <dd className="mt-1 text-sm font-medium text-white">{cert.program}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-slate-400">Department</dt>
            <dd className="mt-1 text-sm font-medium text-white">{cert.department}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-slate-400">Duration</dt>
            <dd className="mt-1 text-sm font-medium text-white">
              {formatDate(cert.startDate)} – {formatDate(cert.endDate)}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-slate-400">Issued</dt>
            <dd className="mt-1 text-sm font-medium text-white">{formatDate(cert.issueDate)}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-slate-400">Type</dt>
            <dd className="mt-1 text-sm font-medium text-white">Certificate of Internship</dd>
          </div>
        </dl>
      </div>
    );
  }

  if (state === "not-found") {
    return (
      <div className="rounded-2xl border border-red-400/30 bg-red-500/5 p-6 text-center backdrop-blur-md sm:p-8">
        <XCircle size={26} weight="fill" className="mx-auto text-red-400" />
        <h3 className="mt-3 font-display text-lg font-bold text-white">Not found</h3>
        <p className="mt-2 text-sm text-slate-300">
          No certificate matches <span className="font-mono">{id}</span>. Check the ID for typos — it's printed
          on the certificate, or contact{" "}
          <a href="mailto:connect@envistacyberdefence.com" className="text-[#B4FF00] hover:underline">
            connect@envistacyberdefence.com
          </a>
          .
        </p>
      </div>
    );
  }

  return null;
}

/* Purely decorative — not the real certificate, just a visual echo of its
   shape so the page doesn't look like a bare form. */
function CertificateMockup() {
  return (
    <div className="relative hidden lg:block" aria-hidden="true">
      <div className="relative mx-auto aspect-[1/1.414] w-full max-w-[320px] -rotate-2 rounded-2xl border border-violet-300/20 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-sm">
        <div className="absolute inset-3 rounded-xl border border-violet-300/15" />
        <div className="relative flex h-full flex-col items-center justify-center text-center">
          <ShieldCheck size={28} weight="fill" className="text-[#c4b5fd]" />
          <div className="mt-3 font-mono text-[9px] uppercase tracking-[0.25em] text-violet-200/70">
            Certificate of Internship
          </div>
          <div className="mt-4 h-[1px] w-16 bg-violet-300/20" />
          <div className="mt-4 font-display text-[13px] italic text-white/70">
            Awarded for completing a cybersecurity internship
          </div>
          <div className="mt-6 h-2 w-32 rounded-full bg-white/10" />
          <div className="mt-2 h-2 w-24 rounded-full bg-white/10" />
        </div>
        <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#7c3aed] shadow-[0_0_20px_rgba(124,58,237,0.5)]">
          <SealCheck size={20} weight="fill" className="text-white" />
        </div>
      </div>
      <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-lime-400/30 bg-lime-500/10 px-3 py-1.5 font-mono text-[11px] font-semibold text-[#B4FF00]">
        <CheckCircle size={13} weight="fill" />
        {CERTIFICATES.length} certificate{CERTIFICATES.length === 1 ? "" : "s"} on record
      </div>
    </div>
  );
}

export default function CertificateVerify() {
  const { certificateId } = useParams<{ certificateId?: string }>();
  const navigate = useNavigate();
  const [query, setQuery] = useState(() => (certificateId ? normalizeId(certificateId) : ""));
  const [state, setState] = useState<LookupState>("idle");
  const [resolved, setResolved] = useState<{ id: string; cert?: Certificate } | null>(null);

  /* Auto-verifies on load when the URL already carries an ID — this is what
     makes a QR code on a printed certificate work: it points straight at
     /verify/<id> and the result appears with no extra interaction. */
  useEffect(() => {
    if (!certificateId) {
      setState("idle");
      setResolved(null);
      return;
    }
    setState("checking");
    const timer = setTimeout(() => {
      const cert = findCertificate(certificateId);
      setResolved({ id: certificateId, cert });
      setState(cert ? "found" : "not-found");
    }, 350);
    return () => clearTimeout(timer);
  }, [certificateId]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (query.trim()) navigate(`/verify/${encodeURIComponent(query.trim())}`);
  }

  return (
    <section className="relative overflow-hidden bg-[#150a2e] px-4 pt-28 pb-20 text-white sm:px-6 sm:pt-36 sm:pb-24 lg:px-8">
      <div className="pointer-events-none absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-violet-600/30 to-fuchsia-600/15 blur-[120px]" />

      <div className={WRAP}>
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-violet-200">
            Home / Internships / Verify
          </span>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Verify an Envista <em className="text-[#B4FF00] not-italic">certificate.</em>
            </h1>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#d8cefa] sm:text-base">
              Enter the certificate ID printed on the certificate to confirm it was genuinely issued by Envista
              Cyber Defence.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md sm:p-6">
              <label htmlFor="cid" className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                Certificate ID
              </label>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <input
                  id="cid"
                  name="id"
                  type="text"
                  required
                  maxLength={40}
                  autoCapitalize="characters"
                  spellCheck={false}
                  value={query}
                  onChange={(e) => setQuery(normalizeId(e.target.value))}
                  placeholder="e.g. ECD-INT-2026-0001"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 font-mono text-base font-bold uppercase tracking-wider text-white placeholder:text-slate-500 placeholder:normal-case placeholder:tracking-normal placeholder:font-normal outline-none focus:border-[#B4FF00]"
                />
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#B4FF00] px-6 py-3 text-[13px] font-semibold text-[#0d1020] transition hover:brightness-110"
                >
                  Verify
                  <ArrowRight size={16} weight="bold" />
                </button>
              </div>
              <p className="mt-3 flex items-center gap-1.5 text-xs text-slate-400">
                <ShieldCheck size={14} />
                We only show the certificate that matches the exact ID you enter.
              </p>
            </form>

            {state !== "idle" && (
              <div className="mt-6">
                <ResultPanel state={state} id={resolved?.id ?? certificateId ?? ""} cert={resolved?.cert} />
              </div>
            )}

            {state === "idle" && (
              <div className="mt-8">
                <Btn to="/">Back to home</Btn>
              </div>
            )}
          </div>

          <CertificateMockup />
        </div>
      </div>
    </section>
  );
}
