import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import RegisterPage from "./components/Registro";
import LoginPage from "./components/Login";
import Cart from "./components/Cart";


function App() {
  return (
    <>
      <Navbar />
      {/* <RegisterPage />
      <LoginPage /> */}
      {/* <Home /> */}
      <Cart/>
      <Footer />
    </>
  );
}

export default App;
