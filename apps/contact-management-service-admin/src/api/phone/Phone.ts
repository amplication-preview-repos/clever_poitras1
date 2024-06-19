import { Contact } from "../contact/Contact";

export type Phone = {
  contacts?: Array<Contact>;
  createdAt: Date;
  id: string;
  notes: string | null;
  phoneNumber: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
