import { ContactCreateNestedManyWithoutAddressesInput } from "./ContactCreateNestedManyWithoutAddressesInput";

export type AddressCreateInput = {
  city?: string | null;
  contacts?: ContactCreateNestedManyWithoutAddressesInput;
  country?: string | null;
  notes?: string | null;
  postalCode?: string | null;
  state?: string | null;
  street?: string | null;
};
