import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";

import "./App.css";
import SideParent from "./components/SideParent";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <aside
        style={{
          position: "sticky",
          left: "0",
          top: ".5rem",
          height: "calc(100vh - 3rem)",
          WebkitUserSelect: "none",
          MozUserSelect: "none",
          MsUserSelect: "none",
          userSelect: "none",
          transition: "transform .4s cubic-bezier(.05,.74,.2,.99),opacity .3s",
          display: "flex",
          flexDirection: "column",
          padding: "0",
          flex: "0 0 250px",
          marginRight: "2rem",
          overflow: "auto",
          marginLeft: "10px",
          backgroundColor: "white",
        }}
      >
        <SideParent />
      </aside>
      <div style={{ flex: "1 1 auto", width: "1%", paddingTop: "0.5rem" }}>
        <NavBar />
        <Main />
      </div>
    </div>
  );
}

export default App;
