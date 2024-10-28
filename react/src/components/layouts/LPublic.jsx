import { Outlet } from "react-router-dom";
import NavbarGuest from "../NavbarGuest.jsx";
import Footer from "../Footer.jsx";

export default function PublicRoute() {
  return (
    <div>
      <NavbarGuest />
      <main className="flex flex-col min-h-screen bg-black">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
