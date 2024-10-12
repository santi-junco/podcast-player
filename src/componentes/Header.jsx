import { FaSearch, FaBars, FaChromecast } from "react-icons/fa";
import "../styles/header.css";

export const Header = () => {
  return (
    <header className="top-bar">
      <div className="logo">
        <button>
          <FaBars size={32} />
        </button>
        <a href="#">
          <img src="/logo.png" alt="logo" />
        </a>
      </div>
      <div className="container">
        <div className="buscador-perfil">
          <div className="buscador">
            <button>
              <FaSearch size={24} />
            </button>
            <input type="text" placeholder="Search..." />
          </div>
          <div className="perfil-cast">
            <button className="cast">
              <FaChromecast className="cast-icon" />
            </button>
            <a href="#">
              <img src="/perfil.png" alt="perfil" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
