import React from "react";

interface SquareProps {
  value?: string | null;
  onClick?: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <div
      className="square"
      style={{
        border: "1px solid",
        height: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.3s",
      }}
      onClick={onClick}
    >
      <h2 style={{ margin: 0 }}>{value}</h2>
    </div>
  );
};

export default Square;
