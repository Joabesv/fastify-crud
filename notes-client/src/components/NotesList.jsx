import React from 'react';
import {
  List,
  DataGrid,
  TextField,
  EditButton,
  DeleteButton,
} from 'react-admin';

export default function NotesList(props) {
  return (
    <List {...props}>
      <DataGrid>
        <TextField source='id' />
        <TextField source='text' />
        <EditButton label='edit' basePath='/notes' />
        <DeleteButton label='delete' basePath='/notes' />
      </DataGrid>
    </List>
  );
}
