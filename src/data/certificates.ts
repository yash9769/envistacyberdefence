export type CertificateStatus = "valid" | "revoked";

export type Certificate = {
  id: string;
  internName: string;
  program: string;
  department: string;
  startDate: string;
  /* Expected/planned end date. When `ongoing` is true, the internship has
     not actually concluded yet and the UI shows "Present" instead. */
  endDate: string;
  ongoing?: boolean;
  issueDate: string;
  status: CertificateStatus;
  /* Path to the signed PDF under public/, e.g. "/certificates/ID.pdf".
     Omit until the PDF is actually in place. */
  downloadUrl?: string;
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
  {
    id: "ECD-INT-2026-0002",
    internName: "Yashodhan Rajapkar",
    program: "Offensive Security Intern",
    department: "Offensive Security",
    startDate: "2026-07-01",
    endDate: "2026-11-23",
    ongoing: true,
    issueDate: "2026-11-23",
    status: "valid",
    downloadUrl: "/certificates/ECD-INT-2026-0002.pdf",
  },
];

export function findCertificate(id: string): Certificate | undefined {
  return CERTIFICATES.find((c) => c.id.toLowerCase() === id.trim().toLowerCase());
}
