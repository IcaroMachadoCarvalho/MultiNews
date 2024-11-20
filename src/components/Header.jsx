import { useState, useEffect } from "react";
import Logo from "../assets/multinews_logo.png";
const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const navElement = document.getElementById("nav");
    if(navElement && window.innerWidth < 768){
      navElement.style.height = openNav ? "100%" : "0";
      navElement.style.transform = openNav ? "translateX(0)" : "translateX(-100%)";
    }
  }, [openNav]);

  const toggleNav = () => {
    if (openNav) {
      return <i onClick={() => setOpenNav(false)} className="fa-solid fa-xmark"></i>;
    } else {
      return <i onClick={() => setOpenNav(true)} className="fa-solid fa-bars"></i>;
    }
  };

  return (
    <>
      <header>
        <div className="header__list">
          <div className="list__top">
            <img src={Logo} alt="Logo do site" />
            {toggleNav()}
          </div>
          <nav id="nav">
            <ul>
              <li>Quem somos</li>
              <li>Pesquisas personalizadas</li>
              <li>Destaques do momento</li>
              <li>Contato</li>
            </ul>
            <div className="header__cta">
              <button className="btn--white">Acessar</button>
              <button className="btn--blue">Entrar</button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
