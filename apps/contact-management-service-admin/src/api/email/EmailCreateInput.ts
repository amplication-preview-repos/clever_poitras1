import { ContactCreateNestedManyWithoutEmailsInput } from "./ContactCreateNestedManyWithoutEmailsInput";

export type EmailCreateInput = {
  contacts?: ContactCreateNestedManyWithoutEmailsInput;
  emailAddress?: string | null;
  notes?: string | null;
  typeField?: "Option1" | null;
};
