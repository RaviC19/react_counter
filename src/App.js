import React, { useState } from "react";
// import {useCounter}

function useClickCounter(num) {
  const [clicks, setClicks] = useState(num);
  const incrementClicks = () => {
    setClicks(clicks + 1);
  };

  const decrementClicks = () => {
    setClicks(clicks - 1);
  };
  return [clicks, incrementClicks, decrementClicks];
}

function App() {
  const [clicks, incrementClicks, decrementClicks] = useClickCounter(0);

  return (
    <div className="app">
      <button onClick={incrementClicks}>
        How many times have you pressed me? {clicks} times
      </button>
      <button onClick={decrementClicks}>
        Press me to reduce the total {clicks} times
      </button>
    </div>
  );
}

export default App;
