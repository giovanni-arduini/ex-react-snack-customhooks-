import { useState, useEffect } from "react";

function useDate() {
  const [currentDate, setCurrentDate] = useState({});

  useEffect(() => {
    setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
  }, []);

  console.log(currentDate);
  return currentDate;
}

export default useDate;
