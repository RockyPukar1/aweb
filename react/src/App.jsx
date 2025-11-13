import { useState } from "react";
import Button from "./components/Button";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Button setCount={setCount} count={count} text={"Button 1"} />
      <Button setCount={setCount} count={count} text={"Button 2"} />
      <span>Number of clicks: {count}</span>
    </div>
  );
}
