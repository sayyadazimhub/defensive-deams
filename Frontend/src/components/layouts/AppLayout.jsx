import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col dark:bg-slate-900 dark:text-white">
      <Navbar />
      <main className="flex-1 pt-24 lg:pt-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;

