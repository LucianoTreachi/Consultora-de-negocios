import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

/* Estructura del sitio */
export default function LayoutRoutes() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
