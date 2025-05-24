import React from 'react';
import Fruit from './Fruit';

const App6 = () => {
  const fruits = ['Apple', 'Mango', 'Orange', 'Banana'];

  return (
    <div style={{ border: '2px solid black', margin: '40px auto', padding: '30px', maxWidth: '600px' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        justifyItems: 'center'
      }}>
        {fruits.map((fruit, index) => (
          <Fruit key={index} name={fruit} />
        ))}
      </div>
    </div>
  );
};

export default App6;
