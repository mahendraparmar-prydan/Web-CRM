import React from "react";

const Custombtn = ({ buttonText }) => {
  return (
    <>
      <button
        style={{
          height: "52px",
          width: "350px",
          backgroundColor: "#ff7c03",
          border: "1px solid #ff7c03",
          borderRadius: "5px",
          fontSize: "30px",
          color: "#ffff",
        }}
      >
        {buttonText}
      </button>
    </>
  );
};

export default Custombtn;
