import { useState } from "react";

function useSwitch() {
  const [isOn, setIsOn] = useState(false);

  //   console.log(isOn);

  function toggle() {
    setIsOn((curr) => !curr);
  }
  return [isOn, toggle];
}

export default useSwitch;
