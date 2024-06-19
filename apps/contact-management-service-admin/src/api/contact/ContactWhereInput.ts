import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { EmailWhereUniqueInput } from "../email/EmailWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PhoneWhereUniqueInput } from "../phone/PhoneWhereUniqueInput";

export type ContactWhereInput = {
  address?: AddressWhereUniqueInput;
  company?: CompanyWhereUniqueInput;
  email?: EmailWhereUniqueInput;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  jobTitle?: StringNullableFilter;
  lastName?: StringNullableFilter;
  notes?: StringNullableFilter;
  phone?: PhoneWhereUniqueInput;
};
