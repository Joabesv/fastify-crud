import React from 'react';
import { Admin, Resource } from 'react-admin';
import NotesList from './components/NotesList.jsx';
import NotesEdit from './components/NotesEdit.jsx';
import NotesCreate from './components/NotesCreate.jsx';
import dataProvider from './dataProvider.js';

/**
 * name defines the name of the resource that will displayed in many places throughout our frontend backoffice panel
 * list specifies a component to show when we need the list of the resource, usually a table.
 * edit specifies the component to show when we edit a resource, that is, a form.
 * create: specifies the component to use when we create a new resource, in other words, a creation form.
 */
export default function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name='notes'
        list={NotesList}
        create={NotesCreate}
        edit={NotesEdit}
      />
    </Admin>
  );
}
