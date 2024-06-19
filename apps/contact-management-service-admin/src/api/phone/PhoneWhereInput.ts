import { ContactListRelationFilter } from "../contact/ContactListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PhoneWhereInput = {
  contacts?: ContactListRelationFilter;
  id?: StringFilter;
  notes?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  typeField?: "Option1";
};
