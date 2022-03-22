import React from 'react';
import { Admin } from 'react-admin';
import dataProvider from './dataProvider.js';

export default function App() {
  return <Admin dataProvider={dataProvider} />;
}
