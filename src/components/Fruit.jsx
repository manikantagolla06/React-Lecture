import React from 'react';

const Fruit = ({ name }) => {
  return (
    <div style={{
      width: '120px',
      height: '80px',
      border: '2px solid black',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: '18px'
    }}>
      {name}
    </div>
  );
};

export default Fruit;
