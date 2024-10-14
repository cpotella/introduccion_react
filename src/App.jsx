import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Header from "./components/Header";
import Pizza from "./components/Pizza";
import RegisterPage from "./components/Registro";
import LoginPage from "./components/Login";
import Cart from "./components/Cart";


function App() {
  return (
    <>
      <Navbar />
      <Header />
      {/* <RegisterPage />
      <LoginPage /> */}
      {/* <Home /> */}
      <Pizza />
      {/* <Cart/> */}
      <Footer />
    </>
  );
}

export default App;
