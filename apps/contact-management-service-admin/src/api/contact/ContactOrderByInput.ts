import { SortOrder } from "../../util/SortOrder";

export type ContactOrderByInput = {
  addressId?: SortOrder;
  companyId?: SortOrder;
  createdAt?: SortOrder;
  emailId?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  jobTitle?: SortOrder;
  lastName?: SortOrder;
  notes?: SortOrder;
  phoneId?: SortOrder;
  updatedAt?: SortOrder;
};
