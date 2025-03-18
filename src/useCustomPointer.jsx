import { useState, useEffect } from "react";

function useCustomPointer(newPointer) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: mousePosition.y,
        left: mousePosition.x,
        transform: "translate(-50%, -50%)",
        // cursor: "none",
      }}
    >
      {newPointer}
    </div>
  );
}

export default useCustomPointer;
