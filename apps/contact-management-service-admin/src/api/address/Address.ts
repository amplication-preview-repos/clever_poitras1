import { Contact } from "../contact/Contact";

export type Address = {
  city: string | null;
  contacts?: Array<Contact>;
  country: string | null;
  createdAt: Date;
  id: string;
  notes: string | null;
  postalCode: string | null;
  state: string | null;
  street: string | null;
  updatedAt: Date;
};
