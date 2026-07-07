export interface VisaApplication {
  id: number;
  fullName: string;
  passport: string;
  country: string;
  visaType: string;
  status: "Pending" | "Approved" | "Rejected";
}
