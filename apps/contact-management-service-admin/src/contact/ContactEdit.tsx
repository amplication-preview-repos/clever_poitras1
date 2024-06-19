import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AddressTitle } from "../address/AddressTitle";
import { CompanyTitle } from "../company/CompanyTitle";
import { EmailTitle } from "../email/EmailTitle";
import { PhoneTitle } from "../phone/PhoneTitle";

export const ContactEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="address.id" reference="Address" label="Address">
          <SelectInput optionText={AddressTitle} />
        </ReferenceInput>
        <ReferenceInput source="company.id" reference="Company" label="Company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <ReferenceInput source="email.id" reference="Email" label="Email">
          <SelectInput optionText={EmailTitle} />
        </ReferenceInput>
        <TextInput label="FirstName" source="firstName" />
        <TextInput label="JobTitle" source="jobTitle" />
        <TextInput label="LastName" source="lastName" />
        <TextInput label="Notes" multiline source="notes" />
        <ReferenceInput source="phone.id" reference="Phone" label="Phone">
          <SelectInput optionText={PhoneTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
