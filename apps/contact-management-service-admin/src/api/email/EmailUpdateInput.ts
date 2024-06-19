import { ContactUpdateManyWithoutEmailsInput } from "./ContactUpdateManyWithoutEmailsInput";

export type EmailUpdateInput = {
  contacts?: ContactUpdateManyWithoutEmailsInput;
  emailAddress?: string | null;
  notes?: string | null;
  typeField?: "Option1" | null;
};
