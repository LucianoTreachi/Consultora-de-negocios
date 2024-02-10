import { Route, Routes } from "react-router-dom";
import LayoutRoutes from "./LayoutRoutes";
import Main from "../sections/main/Main";
import ServicesPage from "../pages/servicesPage/ServicesPage";
import ServiceDetail from "../pages/serviceDetail/ServiceDetail";
import Error404 from "../pages/error404/Error404";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<LayoutRoutes />}>
        <Route path="/" element={<Main />} />
      </Route>

      <Route path="/servicios" element={<ServicesPage />} />

      <Route path="/servicio/:url" element={<ServiceDetail />} />

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
