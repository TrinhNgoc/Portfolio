import React from "react";

const Icons = ({ icons }) => {
  return (
    <div className="center flex flex-wrap">
      {icons.map((icon) => {
        return <i className={icon} />;
      })}
    </div>
  );
};

export default Icons;
