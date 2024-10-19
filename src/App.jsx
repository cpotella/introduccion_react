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


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/register" element={ <RegisterPage /> }/>
        <Route path="/login" element={ <LoginPage /> }/>
        <Route path="/cart" element={ <Cart/> }/>
        <Route path="/pizza/p001" element={ <Pizza /> }/>
        <Route path="/profile" element={ <Profile/> }/>
        <Route path="/404" element={ <NotFound/> }/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;