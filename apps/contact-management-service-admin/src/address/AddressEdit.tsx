import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ContactTitle } from "../contact/ContactTitle";

export const AddressEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="City" source="city" />
        <ReferenceArrayInput
          source="contacts"
          reference="Contact"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ContactTitle} />
        </ReferenceArrayInput>
        <TextInput label="Country" source="country" />
        <TextInput label="Notes" multiline source="notes" />
        <TextInput label="PostalCode" source="postalCode" />
        <TextInput label="State" source="state" />
        <TextInput label="Street" source="street" />
      </SimpleForm>
    </Edit>
  );
};
