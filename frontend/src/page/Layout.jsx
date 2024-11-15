import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";


const Layout = () => {
  return (
    <main className="d-flex flex-column vh-100">
      <Header />
      <section className="d-flex align-items-center flex-grow-1 overflow-auto">
      <Sidebar></Sidebar>
      <div className="flex-grow-1 overflow-auto h-100 d-flex align-items-center justify-content-center" style={{width: "calc(100% - 200px)"}}>
      <Outlet />
      </div>
      </section>
    </main>
  );
};

export default Layout;
