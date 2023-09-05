import React from 'react';
import { RelativeProvider } from './RelativeContext'; // Ensure the correct import path
import RelativeList from './RelativeList';

function App() {
  return (
    <div>
      <h1>Diwali Relative List</h1>
      <RelativeProvider>
        <RelativeList />
      </RelativeProvider>
    </div>
  );
}

export default App;


