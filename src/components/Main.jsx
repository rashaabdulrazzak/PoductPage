import React, { useState, useEffect } from "react";
import { TreeTable } from "primereact/treetable";
import { Column } from "primereact/column";
import { NodeService } from "../data/NodeService";
import { Paginator } from "primereact/paginator";
import { SelectButton } from "primereact/selectbutton";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export function Main() {
  const [nodes, setNodes] = useState([]);
  const [selectedNodeKeys, setSelectedNodeKeys] = useState(null);
  const [globalFilter, setGlobalFilter] = useState("");

  useEffect(() => {
    NodeService.getTreeTableNodes().then((data) => setNodes(data));
  }, []);
  const getHeader = () => {
    return (
      <div
        className="flex "
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="flex" style={{ display: "flex" }}>
          <div className="p-input-icon-right">
            <InputText
              type="search"
              onInput={(e) => setGlobalFilter(e.target.value)}
              placeholder="Search by Name"
              style={{ marginRight: "5px" }}
            />
            <i className="pi pi-search"></i>
          </div>
          <Button
            label="Filter"
            icon="pi pi-filter"
            iconPos="right"
            severity="secondary"
          />
        </div>
        <div className="flex" style={{ display: "flex" }}>
          <Button
            label="Import"
            severity="danger"
            icon="pi pi-arrow-down"
            outlined
            iconPos="left"
            style={{ marginRight: "5px" }}
          />
          <Button
            label="Add Product"
            icon="pi pi-plus"
            severity="danger"
            iconPos="left"
          />
        </div>
      </div>
    );
  };
  const representativeBodyTemplate = (rowData) => {
    const representative = rowData.representative;
    return (
      <React.Fragment>
        <img
          alt=""
          src={`https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png`}
          onError={(e) =>
            (e.target.src =
              "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
          }
          width={32}
          style={{ verticalAlign: "middle" }}
        />
      </React.Fragment>
    );
  };
  const representativeButtonTemplate = (rowData) => {
    const representative = rowData.representative;
    return (
      <React.Fragment>
        <Button
          icon="pi pi-file-edit"
          className="p-button-text"
          severity="danger"
        />
      </React.Fragment>
    );
  };
  let header = getHeader();
  return (
    <div className="card">
      <div className="flex justify-content-center mb-4">
        <getHeader />
      </div>

      <TreeTable
        globalFilter={globalFilter}
        header={header}
        value={nodes}
        selectionMode="checkbox"
        scrollable
        scrollHeight="600px"
        scrollWidth="400px"
        resizableColumns
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25]}
        selectionKeys={selectedNodeKeys}
        onSelectionChange={(e) => setSelectedNodeKeys(e.value)}
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column field="ID" header="ID" expander></Column>
        <Column
          field="IMG"
          header="IMG"
          body={representativeBodyTemplate}
        ></Column>
        <Column field="NAME" header="Name" sortable></Column>
        <Column field="CATEGORY" header="CATEGORY" sortable></Column>
        <Column field="SUPPLIER" header="SUPPLIER" sortable></Column>
        <Column field="STATUS" header="STATUS" sortable></Column>
        <Column field="PRICE" header="PRICE" sortable></Column>
        <Column field="PushedCount" header="PushedCount" sortable></Column>
        <Column
          field="Actions"
          header="Actions"
          body={representativeButtonTemplate}
        ></Column>
      </TreeTable>
    </div>
  );
}

export default Main;
