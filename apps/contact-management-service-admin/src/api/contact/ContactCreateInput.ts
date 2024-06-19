import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { EmailWhereUniqueInput } from "../email/EmailWhereUniqueInput";
import { PhoneWhereUniqueInput } from "../phone/PhoneWhereUniqueInput";

export type ContactCreateInput = {
  address?: AddressWhereUniqueInput | null;
  company?: CompanyWhereUniqueInput | null;
  email?: EmailWhereUniqueInput | null;
  firstName?: string | null;
  jobTitle?: string | null;
  lastName?: string | null;
  notes?: string | null;
  phone?: PhoneWhereUniqueInput | null;
};
