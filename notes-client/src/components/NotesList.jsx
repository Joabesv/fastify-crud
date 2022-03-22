import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from 'react-admin';

export default function NotesList(props) {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='text' />
        <EditButton label='edit' basePath='/notes' />
        <DeleteButton label='delete' basePath='/notes' />
      </Datagrid>
    </List>
  );
}
