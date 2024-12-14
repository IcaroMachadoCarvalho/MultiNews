import Header from "./components/Header.jsx";
import Intro from "./components/Intro.jsx"
import Cta from "./components/Cta.jsx";
import Destaques from "./components/Destaques.jsx";
import "./style/scss/homePage.scss";

function App() {
  return (
    <>
      <Header></Header>
      <Intro></Intro>
      <Cta></Cta>
      <Destaques></Destaques>
    </>
  );
}

export default App;
