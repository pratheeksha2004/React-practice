import React, { useState, useEffect } from 'react';

function InfiniteLoopCounter() {
  const [count, setCount] = useState(0);

  // Log when the component body itself runs (i.e., during render)
  console.log(`COMPONENT RENDER: Count is ${count}`);

  // --- The Dangerous useEffect ---
  // Because there is NO dependency array, this effect runs after EVERY render.
  useEffect(() => {
    console.log(`--> EFFECT RUNNING: Attempting to increment count from ${count}`);

    // Updating state causes the component to re-render...
    setCount(prevCount => prevCount + 1);
    // ...which then causes this effect to run again...
    // ...which updates state again...
    // ...which causes another re-render... INFINITE LOOP!

  }); // <-- Intentionally MISSING the dependency array!

  return (
    <div>
      <h1>useEffect Infinite Loop Example (DANGER!)</h1>
      <p style={{ color: 'red', fontWeight: 'bold' }}>
        WARNING: This component is designed to create an infinite loop and will likely freeze this browser tab!
      </p>
      <p>
        Check your developer console. You should see "COMPONENT RENDER" and "EFFECT RUNNING" messages repeating extremely rapidly.
      </p>
      <h2>Current Count (will update very fast): {count}</h2>
    </div>
  );
}

export default InfiniteLoopCounter;