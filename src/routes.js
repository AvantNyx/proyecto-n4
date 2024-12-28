import PaginaBase from "components/pages/PaginaBase";
import Inicio from "components/pages/Inicio";
import Equipos from "components/Equipos";
import NuevoVideo from "components/pages/NuevoVideo";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaBase />}>
          <Route index element={<Inicio />} /> {/* Página principal */}
          <Route path="equipos" element={<Equipos />} /> {/* Página equipos */}
          <Route path="/NuevoVideo" element={<NuevoVideo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
