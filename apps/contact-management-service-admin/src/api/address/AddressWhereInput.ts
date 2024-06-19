import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ContactListRelationFilter } from "../contact/ContactListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type AddressWhereInput = {
  city?: StringNullableFilter;
  contacts?: ContactListRelationFilter;
  country?: StringNullableFilter;
  id?: StringFilter;
  notes?: StringNullableFilter;
  postalCode?: StringNullableFilter;
  state?: StringNullableFilter;
  street?: StringNullableFilter;
};
