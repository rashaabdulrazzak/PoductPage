import React from "react";
import { PanelMenu } from "primereact/panelmenu";
import SideIcon from "../data/SideIcon";
export default function SideItem() {
  return (
    <div className="nav card flex justify-content-center">
      <PanelMenu model={SideIcon} className="w-full md:w-20rem" />
    </div>
  );
}
