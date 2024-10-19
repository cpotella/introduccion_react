import { Link } from 'react-router-dom';
import "../App.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div >
        <h1 >404</h1>
        <h2>Página no encontrada</h2>
        <p>Lo sentimos, la página que buscas no existe.</p>
        <Link to="/">
          Volver al Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
