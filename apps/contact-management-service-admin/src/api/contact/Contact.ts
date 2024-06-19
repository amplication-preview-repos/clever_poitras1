import { Address } from "../address/Address";
import { Company } from "../company/Company";
import { Email } from "../email/Email";
import { Phone } from "../phone/Phone";

export type Contact = {
  address?: Address | null;
  company?: Company | null;
  createdAt: Date;
  email?: Email | null;
  firstName: string | null;
  id: string;
  jobTitle: string | null;
  lastName: string | null;
  notes: string | null;
  phone?: Phone | null;
  updatedAt: Date;
};
