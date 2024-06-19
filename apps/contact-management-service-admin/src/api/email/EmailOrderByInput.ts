import { SortOrder } from "../../util/SortOrder";

export type EmailOrderByInput = {
  createdAt?: SortOrder;
  emailAddress?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
