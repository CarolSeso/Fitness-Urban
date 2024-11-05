import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useStateContext } from "../../context/context.jsx";
import NavbarDefault from "../NavbarDefault.jsx";
import NavbarGuest from "../NavbarGuest.jsx";
import Footer from "../Footer.jsx";

export default function LDefault() {
  const { token } = useStateContext();
  const location = useLocation();

  if (token && (location.pathname === "/login" || location.pathname === "/signup")) {
    return <Navigate to="/home" />;
  }

  return (
    <div>
      {token ? <NavbarDefault /> : <NavbarGuest />}
      <main className="flex flex-col min-h-screen bg-black">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
