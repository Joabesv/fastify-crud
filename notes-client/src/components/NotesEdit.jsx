import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export default function NotesEdit(props) {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput required source='text' />
      </SimpleForm>
    </Edit>
  );
}
