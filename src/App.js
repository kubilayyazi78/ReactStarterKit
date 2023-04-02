import { useTranslation } from "react-i18next";
import { sayHello } from "./utils";

function App() {
  const { t, i18n } = useTranslation();

  const clickHandle = async (lang) => {
    await i18n.changeLanguage(lang);
  };
  return (
    <div className="App">
      Aktif dil : {i18n.language} <br />
      <nav>
        <button onClick={() => clickHandle("tr")}>Türkçe</button>
        <button onClick={() => clickHandle("en")}>English</button>
        <button onClick={sayHello}>Say Hello</button>
      </nav>
      <br></br>
    {/* <h3>{t('Welcome',{user:'Kubilay'})}</h3> */}
    <h3>{t('Welcome')}</h3>
    </div>
  );
}
export default App;
