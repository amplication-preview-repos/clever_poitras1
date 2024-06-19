import { ContactUpdateManyWithoutPhonesInput } from "./ContactUpdateManyWithoutPhonesInput";

export type PhoneUpdateInput = {
  contacts?: ContactUpdateManyWithoutPhonesInput;
  notes?: string | null;
  phoneNumber?: string | null;
  typeField?: "Option1" | null;
};
