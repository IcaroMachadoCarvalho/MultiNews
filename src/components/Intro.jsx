import introImg from "../assets/img intro multinews.jpeg";
const Intro = () => {
  return (
    <>
      <section className="intro section">
        <div className="intro__info main-content">
          <div className="intro__text">
            <h1 className="intro__title">
              Veja as notícias mais recentes de forma prática e personalizada
            </h1>
            <p className="intro__p">
              Seu portal de notícias com atualizações em tempo real sobre
              política, economia, saúde, esportes e muito mais. Acompanhe os
              principais acontecimentos ao redor do mundo.
            </p>
          </div>
          <div className="intro__cta">
            <button className="btn--white">Começar</button>
            <button className="btn--blue">Saiba mais</button>
          </div>
        </div>
        <img src={introImg} alt="" className="intro__img" />
      </section>
    </>
  );
};

export default Intro;
