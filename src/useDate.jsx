import { useState, useEffect } from "react";

function useDate() {
  const [currentDate, setCurrentDate] = useState({});

  useEffect(() => {
    interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // cleanup function per evitare memory leak
    return () => clearInterval(interval);
  }, []);

  console.log(currentDate);
  return currentDate;
}

export default useDate;
