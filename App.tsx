import React from 'react';
import { Table } from './components/Table';
import { Goals } from './Goals';

export const App = () => {
  return (
    <div className="p-2">
      <Goals />
      <div className="dropdown-divider py-2 w-full"></div>
      <div>
        <Table />
      </div>
    </div>
  );
};
