import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";
import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";
import { EMAIL_TITLE_FIELD } from "../email/EmailTitle";
import { PHONE_TITLE_FIELD } from "../phone/PhoneTitle";

export const ContactShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Address" source="address.id" reference="Address">
          <TextField source={ADDRESS_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Company" source="company.id" reference="Company">
          <TextField source={COMPANY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Email" source="email.id" reference="Email">
          <TextField source={EMAIL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="FirstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="JobTitle" source="jobTitle" />
        <TextField label="LastName" source="lastName" />
        <TextField label="Notes" source="notes" />
        <ReferenceField label="Phone" source="phone.id" reference="Phone">
          <TextField source={PHONE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
