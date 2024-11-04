import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Header from "./components/Header";
import Pizza from "./pages/Pizza";
import RegisterPage from "./pages/Registro";
import LoginPage from "./pages/Login";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import RutaAuth from "./components/RutaAuth";
import RutaProtegida from "./components/RutaProtegida";


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/cart" element={ <Cart/> }/>
        <Route path="/pizza/:id" element={ <Pizza /> }/>
        <Route path="/profile" element={<RutaProtegida><Profile /></RutaProtegida>} />
        <Route path="/login" element={<RutaAuth><LoginPage /></RutaAuth>} />
        <Route path="/register" element={<RutaAuth><RegisterPage /></RutaAuth>} />
        <Route path="/404" element={ <NotFound/> }/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;