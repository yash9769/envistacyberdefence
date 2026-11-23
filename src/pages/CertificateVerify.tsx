import { useState, type FormEvent } from "react";
import { useParams, useNavigate } from "react-router";
import {
  CheckCircle,
  XCircle,
  MagnifyingGlass,
  CalendarBlank,
  Buildings,
  IdentificationCard,
} from "@phosphor-icons/react";
import { Kicker, Btn } from "../components/ui";
import { findCertificate, type Certificate } from "../data/certificates";

const WRAP = "mx-auto w-full max-w-[720px] px-4 sm:px-6 lg:px-8";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function ResultCard({ cert }: { cert: Certificate }) {
  const isValid = cert.status === "valid";
  return (
    <div
      className={`rounded-2xl border p-6 backdrop-blur-md sm:p-8 ${
        isValid ? "border-lime-400/30 bg-lime-500/5" : "border-red-400/30 bg-red-500/5"
      }`}
    >
      <div className="flex items-center gap-3">
        {isValid ? (
          <CheckCircle size={28} weight="fill" className="text-[#B4FF00]" />
        ) : (
          <XCircle size={28} weight="fill" className="text-red-400" />
        )}
        <span
          className={`font-mono text-xs font-bold uppercase tracking-widest ${
            isValid ? "text-[#B4FF00]" : "text-red-400"
          }`}
        >
          {isValid ? "Certificate Verified" : "Certificate Revoked"}
        </span>
      </div>

      <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-white">{cert.internName}</h2>
      <p className="mt-1 text-sm text-slate-300">{cert.program}</p>

      <div className="mt-6 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
        <div className="flex items-start gap-2.5">
          <Buildings size={18} className="mt-0.5 shrink-0 text-slate-400" />
          <div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400">Department</div>
            <div className="text-sm font-medium text-white">{cert.department}</div>
          </div>
        </div>
        <div className="flex items-start gap-2.5">
          <CalendarBlank size={18} className="mt-0.5 shrink-0 text-slate-400" />
          <div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400">Internship Duration</div>
            <div className="text-sm font-medium text-white">
              {formatDate(cert.startDate)} – {formatDate(cert.endDate)}
            </div>
          </div>
        </div>
        <div className="flex items-start gap-2.5">
          <CalendarBlank size={18} className="mt-0.5 shrink-0 text-slate-400" />
          <div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400">Issue Date</div>
            <div className="text-sm font-medium text-white">{formatDate(cert.issueDate)}</div>
          </div>
        </div>
        <div className="flex items-start gap-2.5">
          <IdentificationCard size={18} className="mt-0.5 shrink-0 text-slate-400" />
          <div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400">Certificate ID</div>
            <div className="text-sm font-medium text-white">{cert.id}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NotFoundCard({ id }: { id: string }) {
  return (
    <div className="rounded-2xl border border-red-400/30 bg-red-500/5 p-6 text-center backdrop-blur-md sm:p-8">
      <XCircle size={28} weight="fill" className="mx-auto text-red-400" />
      <h2 className="mt-4 font-display text-xl font-bold text-white">No certificate found</h2>
      <p className="mt-2 text-sm text-slate-300">
        We couldn't find a certificate matching ID <span className="font-mono">{id}</span>. Double-check the
        ID printed on the certificate, or the QR code used to get here.
      </p>
    </div>
  );
}

export default function CertificateVerify() {
  const { certificateId } = useParams<{ certificateId?: string }>();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const lookedUp = certificateId ? findCertificate(certificateId) : undefined;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (query.trim()) navigate(`/verify/${encodeURIComponent(query.trim())}`);
  }

  return (
    <section className="relative overflow-hidden bg-[#150a2e] px-4 pt-28 pb-20 text-white sm:px-6 sm:pt-36 sm:pb-24 lg:px-8 dark:bg-[#0c061e]">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-600/30 to-fuchsia-600/15 blur-[120px]" />

      <div className={WRAP}>
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-violet-200">
              Certificate Verification
            </span>
          </div>
          <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Verify an Envista Internship Certificate
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-[#d8cefa] sm:text-base">
            Scan the QR code on the certificate, or enter its ID below, to confirm it was genuinely issued by
            Envista Cyber Defence.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. ECD-INT-2026-0001"
            className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 font-mono text-sm text-white placeholder:text-slate-400 outline-none backdrop-blur-md focus:border-[#B4FF00]"
          />
          <button
            type="submit"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#B4FF00] px-6 py-3 text-[13px] font-semibold text-[#0d1020] transition hover:brightness-110"
          >
            <MagnifyingGlass size={16} weight="bold" />
            Verify
          </button>
        </form>

        <div className="mt-8">
          {certificateId ? (
            lookedUp ? (
              <ResultCard cert={lookedUp} />
            ) : (
              <NotFoundCard id={certificateId} />
            )
          ) : null}
        </div>

        {!certificateId && (
          <div className="mt-10 text-center">
            <Kicker tone="accent">Need help?</Kicker>
            <p className="mt-2 text-sm text-slate-300">
              If a certificate doesn't verify and you believe it should, contact{" "}
              <a href="mailto:connect@envistacyberdefence.com" className="text-[#B4FF00] hover:underline">
                connect@envistacyberdefence.com
              </a>
              .
            </p>
            <div className="mt-6 flex justify-center">
              <Btn to="/">Back to home</Btn>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
