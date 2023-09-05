import React, { useContext } from 'react';
import { RelativeContext } from './RelativeContext';

function RelativeList() {
  const { relatives, addRelative, removeRelative } = useContext(RelativeContext);

  const handleAddRelative = () => {
    const newRelativeName = prompt('Enter the name of the relative:');
    if (newRelativeName) {
      addRelative(newRelativeName);
    }
  };

  return (
    <div>
      <button onClick={handleAddRelative}>Add Relative</button>
      <ol key="relativeList"  id="relativeList">
        {relatives.map((relative) => (
          <li key={relative.key}>
            {relative.name}{' '}
            <button onClick={() => removeRelative(relative.key)}>Remove</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default RelativeList;


