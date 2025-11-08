import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={function () {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
      <span>Number of clicks: {count}</span>
    </div>
  );
}
