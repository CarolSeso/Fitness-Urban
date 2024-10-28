import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../../context/context.jsx";
import NavbarGuest from "../NavbarGuest.jsx";
import Footer from "../Footer.jsx";

export default function LGuest() {
  const { token } = useStateContext();
  if (token) {
    return <Navigate to="/" />;
  }

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
