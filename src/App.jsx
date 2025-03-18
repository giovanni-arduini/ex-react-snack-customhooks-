import { useEffect } from "react";
import "./App.css";
import useSwitch from "./useSwitch";

function App() {
  const [isOn, toggle] = useSwitch();

  console.log(isOn);

  return (
    <>
      <div>
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle}>Cambia stato</button>
      </div>
    </>
  );
}

export default App;
