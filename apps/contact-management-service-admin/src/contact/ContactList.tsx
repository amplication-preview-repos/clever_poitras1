import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";
import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";
import { EMAIL_TITLE_FIELD } from "../email/EmailTitle";
import { PHONE_TITLE_FIELD } from "../phone/PhoneTitle";

export const ContactList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Contacts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
