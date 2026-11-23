export type CertificateStatus = "valid" | "revoked";

export type Certificate = {
  id: string;
  internName: string;
  program: string;
  department: string;
  startDate: string;
  endDate: string;
  issueDate: string;
  status: CertificateStatus;
};

/* Each intern certificate's QR code encodes a URL in the form
   /verify/<id> — add a record here when a new certificate is issued. */
export const CERTIFICATES: Certificate[] = [
  {
    id: "ECD-INT-2026-0001",
    internName: "Sample Intern",
    program: "Cybersecurity Internship Program",
    department: "Offensive Security",
    startDate: "2026-06-01",
    endDate: "2026-08-31",
    issueDate: "2026-09-01",
    status: "valid",
  },
];

export function findCertificate(id: string): Certificate | undefined {
  return CERTIFICATES.find((c) => c.id.toLowerCase() === id.trim().toLowerCase());
}
