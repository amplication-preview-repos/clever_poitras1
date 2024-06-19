import { ContactUpdateManyWithoutCompaniesInput } from "./ContactUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  contacts?: ContactUpdateManyWithoutCompaniesInput;
  industry?: string | null;
  name?: string | null;
  notes?: string | null;
};
