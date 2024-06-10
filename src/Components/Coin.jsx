import React from "react";

const Coin = ({ info }) => {
  return (
    <div className="Coin">
      <img
        style={{ width: "200px", height: "200px" }}
        src={info.imgSrc}
        alt={info.side}
      />
    </div>
  );
};

export default Coin;
