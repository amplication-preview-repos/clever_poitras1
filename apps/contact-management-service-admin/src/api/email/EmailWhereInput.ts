import { ContactListRelationFilter } from "../contact/ContactListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EmailWhereInput = {
  contacts?: ContactListRelationFilter;
  emailAddress?: StringNullableFilter;
  id?: StringFilter;
  notes?: StringNullableFilter;
  typeField?: "Option1";
};
