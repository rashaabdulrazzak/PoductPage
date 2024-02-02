import React from "react";
import SideItem from "./SideItem";
function SideParent() {
  return (
    <div>
      <div class="flex justify-center">
        <img
          src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
          width={50}
          height={50}
          alt="Dochto-logo"
        />
        <span
          style={{
            color: "red",
            fontSize: "35px",
            marginBottom: "20px",
            fontWeight: "700",
          }}
        >
          DOSHTO
        </span>
      </div>
      <SideItem />
    </div>
  );
}

export default SideParent;
