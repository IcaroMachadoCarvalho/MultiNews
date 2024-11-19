const Header = () => {
  return (
    <>
      <header>
        <div className="header__list">
          <div className="list__top">
            <img src="#" alt="Logo do site" />
            <i className="fa-solid fa-xmark"></i>
          </div>
          <nav>
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
