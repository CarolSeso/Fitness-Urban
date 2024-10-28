import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../../context/context.jsx";
import NavbarDefault from "../NavbarDefault.jsx";
import Footer from "../Footer.jsx";

export default function LDefault() {
  const { token } = useStateContext();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <NavbarDefault />
      <main className="flex flex-col min-h-screen bg-black">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
