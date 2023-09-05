import React, { createContext, useState } from 'react';

// Create a context for managing relatives
export const RelativeContext = createContext();

// Create a provider component for the context
export const RelativeProvider = ({ children }) => {
  // Initialize the state to hold the list of relatives
  const [relatives, setRelatives] = useState([]);

  // Function to add a relative to the list
  const addRelative = (relativeName) => {
    // Generate a unique key for the new relative based on the current length
    const newKey = `relativeListItem${relatives.length + 1}`;

    // Create a new relative object with a name and key
    const newRelative = { name: relativeName, key: newKey };

    // Add the new relative to the list
    setRelatives([...relatives, newRelative]);
  };

  // Function to remove a relative from the list by key
  const removeRelative = (relativeKey) => {
    // Filter out the relative with the specified key
    const updatedRelatives = relatives.filter((relative) => relative.key !== relativeKey);

    // Update the list of relatives
    setRelatives(updatedRelatives);
  };

  return (
    <RelativeContext.Provider value={{ relatives, addRelative, removeRelative }}>
      {children}
    </RelativeContext.Provider>
  );
};
