import { useTranslation } from "react-i18next";
function App() {
  const { i, i18n } = useTranslation();
  return <div className="App">Aktif dil : {i18n.language}</div>;
}
export default App;
