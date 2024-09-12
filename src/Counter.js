import React, { useState } from 'react';
import './Counter.css'

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div class='card'>
      <h2>Resultado: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Somar + 1</button>
      <button onClick={() => setCount(count - 1)}>Diminuir - 1</button>
    </div>
  );
};

export default Counter;


