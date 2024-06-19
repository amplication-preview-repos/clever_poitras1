import { ContactUpdateManyWithoutAddressesInput } from "./ContactUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  city?: string | null;
  contacts?: ContactUpdateManyWithoutAddressesInput;
  country?: string | null;
  notes?: string | null;
  postalCode?: string | null;
  state?: string | null;
  street?: string | null;
};
