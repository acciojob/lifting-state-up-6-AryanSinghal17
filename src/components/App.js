import React, { useState } from "react";

const App = () => {
  const [completed, setCompleted] = useState([false, false, false]);

  const handleComplete = (index) => {
    const newCompleted = [...completed];
    newCompleted[index] = true;
    setCompleted(newCompleted);
  };

  return (
    <div>
      <h1><strong>Parent Component</strong></h1>

      <div>
        <h2><strong>Children Component</strong></h2>

        <ul>
          <li>
            Learn React
            {!completed[0] && (
              <button onClick={() => handleComplete(0)}>
                Complete
              </button>
            )}
          </li>

          <li>
            Build a React App
            {!completed[1] && (
              <button onClick={() => handleComplete(1)}>
                Complete
              </button>
            )}
          </li>

          <li>
            Deploy the React App
            {!completed[2] && (
              <button onClick={() => handleComplete(2)}>
                Complete
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;