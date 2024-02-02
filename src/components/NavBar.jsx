import React from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import { BreadCrumb } from "primereact/breadcrumb";
import { Button } from "primereact/button";

export default function NavBar() {
  const itemRenderer = (item) => (
    <a className="flex align-items-center p-menuitem-link">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && (
        <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
          {item.shortcut}
        </span>
      )}
    </a>
  );
  const home = { label: "Home" };
  const items1 = [{ label: "Products List" }];

  const start = (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h2>Products</h2>
      <BreadCrumb model={items1} home={home} />
    </div>
  );
  const end = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "8px",
        }}
      >
        <img
          style={{ width: "50px", height: "50px" }}
          src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
        />

        <div style={{ fontSize: "15px", paddingLeft: "10px" }}>
          <p>English </p>
        </div>
      </div>
      <div style={{ display: "flex", marginRight: "10px" }}>
        <i
          className="pi pi-bell p-overlay-badge"
          style={{ fontSize: "1.5rem" }}
        >
          <Badge value="4"></Badge>
        </i>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "block" }}>
          <div
            style={{ display: "flex", marginLeft: "5px", marginRight: "5px" }}
          >
            <span>John Do</span>
          </div>
          <div
            style={{ display: "flex", marginLeft: "5px", marginRight: "5px" }}
          >
            <span>Admin</span>
          </div>
        </div>
        <Avatar
          image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
          shape="circle"
        />
      </div>
    </div>
  );

  return (
    <div className="card" style={{ marginBottom: "10px" }}>
      <Menubar start={start} end={end} />
    </div>
  );
}
