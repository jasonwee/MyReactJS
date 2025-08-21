import React, { useState, useEffect } from "react";

interface FloatingDraggableButtonProps {
  onClick?: () => void;
}

const FloatingDraggableButton: React.FC<FloatingDraggableButtonProps> = ({ onClick }) => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: window.innerWidth - 80,
    y: window.innerHeight - 80,
  });

  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [moved, setMoved] = useState(false); // track if the mouse actually moved

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging) return;
      const clientX = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
      setPosition({
        x: clientX - offset.x,
        y: clientY - offset.y,
      });
      setMoved(true);
    };

    const handleUp = () => {
      setDragging(false);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("touchend", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleUp);
    };
  }, [dragging, offset]);

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY =
      "touches" in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    setDragging(true);
    setMoved(false);
    setOffset({
      x: clientX - position.x,
      y: clientY - position.y,
    });
  };

  const handleClick = () => {
    if (!moved && onClick) {
      onClick();

    }
  };

  return (
    <button
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        width: 60,
        height: 60,
        borderRadius: "50%",
        backgroundColor: "#1976d2",
        color: "#fff",
        border: "none",
        cursor: "grab",
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        fontSize: "2rem",
      }}
      onMouseDown={startDrag}
      onTouchStart={startDrag}
      onClick={handleClick}
    >
      +
    </button>
  );
};

export default FloatingDraggableButton;