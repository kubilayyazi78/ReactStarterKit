import logo from "./logo.svg";
import styles from "./App.module.css";
import Test from "./Test";
import { Title } from "./Components";
import Bootstrap from "./Bootstrap";
import "./tailwind.css";
import Tailwind from "./Tailwind";
import "./style.scss";
function Style() {
  return (
    <div className={styles.App}>
      <Title>{process.env.NODE_ENV}</Title>
      <Title theme="dark">{process.env.NODE_ENV}</Title>
      <p className="env">
        {process.env.REACT_APP_API_URL}
        <span>test</span>
      </p>
      <img src="/logo192.png" alt=""></img>
      <img src={logo} alt=""></img>
      <Test></Test>
      <Bootstrap></Bootstrap>
      <Tailwind></Tailwind>
    </div>
  );
}
export default Style;
