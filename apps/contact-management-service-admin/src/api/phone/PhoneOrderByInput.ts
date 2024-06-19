import { SortOrder } from "../../util/SortOrder";

export type PhoneOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  phoneNumber?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
