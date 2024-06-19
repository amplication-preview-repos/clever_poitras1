import { Contact } from "../contact/Contact";

export type Email = {
  contacts?: Array<Contact>;
  createdAt: Date;
  emailAddress: string | null;
  id: string;
  notes: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
