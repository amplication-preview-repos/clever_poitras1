import { Contact } from "../contact/Contact";

export type Company = {
  contacts?: Array<Contact>;
  createdAt: Date;
  id: string;
  industry: string | null;
  name: string | null;
  notes: string | null;
  updatedAt: Date;
};
