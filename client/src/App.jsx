import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import 'bootstrap/dist/css/bootstrap.min.css'
import ProtectedRoutes from "./components/ProtectedRoutes";
import Pokemons from "./pages/pokemons";

export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoutes />} >
          <Route path="/pokemons" element={<Pokemons />} />
        </Route>
        <Route path="/*" element={<h1>404 Page not found</h1>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
