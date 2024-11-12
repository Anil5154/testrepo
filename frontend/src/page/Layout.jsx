import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";


const Layout = () => {
  return (
    <main className="d-flex flex-column vh-100">
      <Header />
      <section className="d-flex align-items-center flex-grow-1">
      <Sidebar></Sidebar>
      <div className="flex-grow-1 h-100 d-flex align-items-center justify-content-center">
      <Outlet />
      </div>
      </section>
    </main>
  );
};

export default Layout;
