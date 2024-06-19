import { ContactCreateNestedManyWithoutPhonesInput } from "./ContactCreateNestedManyWithoutPhonesInput";

export type PhoneCreateInput = {
  contacts?: ContactCreateNestedManyWithoutPhonesInput;
  notes?: string | null;
  phoneNumber?: string | null;
  typeField?: "Option1" | null;
};
