import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";
import { COMPANY_TITLE_FIELD } from "./CompanyTitle";
import { EMAIL_TITLE_FIELD } from "../email/EmailTitle";
import { PHONE_TITLE_FIELD } from "../phone/PhoneTitle";

export const CompanyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Industry" source="industry" />
        <TextField label="Name" source="name" />
        <TextField label="Notes" source="notes" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Contact"
          target="companyId"
          label="Contacts"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Address"
              source="address.id"
              reference="Address"
            >
              <TextField source={ADDRESS_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Company"
              source="company.id"
              reference="Company"
            >
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
