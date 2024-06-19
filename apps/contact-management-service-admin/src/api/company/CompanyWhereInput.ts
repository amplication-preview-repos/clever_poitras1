import { ContactListRelationFilter } from "../contact/ContactListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CompanyWhereInput = {
  contacts?: ContactListRelationFilter;
  id?: StringFilter;
  industry?: StringNullableFilter;
  name?: StringNullableFilter;
  notes?: StringNullableFilter;
};
