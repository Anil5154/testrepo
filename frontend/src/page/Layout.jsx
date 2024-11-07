import Header from "../components/Header";
import Sidebar from "../components/Sidebar";


const Layout = ({ children }) => {
  return (
    <main className="d-flex flex-column vh-100">
      <Header />
      <section className="flex-grow-1">
      <Sidebar></Sidebar>
        {children}
      </section>
    </main>
  );
};

export default Layout;
