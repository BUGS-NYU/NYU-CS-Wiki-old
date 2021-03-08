import React from "react";

import TreeParent from "./NavTreeParent";

const NavTreeMenu = ({ data }) => {
  return (
    <div>
      {data.map((props, i) => {
        return <TreeParent key={`${i}_${props.label}`} {...props} />;
      })}
    </div>
  );
};

export default NavTreeMenu;
