import React, { useState } from 'react';

export default function Button() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        UP
      </button>
      <button onClick={() => setCount(count - 1)}>
        Down
      </button>
    </div>
  );
}
