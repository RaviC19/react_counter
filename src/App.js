import React, { useState } from "react";
// import {useCounter}

function useClickCounter() {
  const [clicks, setClicks] = useState(0);
  const incrementClicks = () => {
    setClicks(clicks + 1);
  };
  return [clicks, incrementClicks];
}

function App() {
  const [clicks, incrementClicks] = useClickCounter(0);

  return (
    <div className="app">
      <button onClick={incrementClicks}>
        How many times have you pressed me? {clicks} times
      </button>
    </div>
  );
}

export default App;
