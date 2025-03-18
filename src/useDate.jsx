import { useState, useEffect } from "react";

function useDate() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // cleanup function per evitare memory leak
    return () => clearInterval(interval);
  }, []);

  console.log(currentDate);
  return currentDate;
}

export default useDate;
