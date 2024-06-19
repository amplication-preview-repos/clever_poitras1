import { SortOrder } from "../../util/SortOrder";

export type AddressOrderByInput = {
  city?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  postalCode?: SortOrder;
  state?: SortOrder;
  street?: SortOrder;
  updatedAt?: SortOrder;
};
