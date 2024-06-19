import { ContactCreateNestedManyWithoutCompaniesInput } from "./ContactCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  contacts?: ContactCreateNestedManyWithoutCompaniesInput;
  industry?: string | null;
  name?: string | null;
  notes?: string | null;
};
