//import "./style.scss";
import "./tailwind.css";
//import {createElement, Fragment} from "react"
import Button from "./components/Button";
import Tab from "./components/Tab";
import {useState} from "react";
// function Button(props){
//   return <button>{props.text}</button>
// }

function Example() {

const todos = ["todo1", "todo2", "todo3"];
  /* 
  const h1 =createElement('h1',null,'kubilayyazi')
  const ul=createElement('ul',null,todos.map(todo=>createElement('li',null,todo)))
 const button =createElement(Button,{
  text:'Button Text'
 },null)
  return createElement ('main',{
    className:'test',
    id:'main'
  },h1,ul,button)
*/
  const name = "KubilayYazi";
  const searchFunction = () => {
    alert("hello");
  };

  const [activeTab,setActiveTab]=useState(1);

  return (
    <>
      <div style={{ padding: 20 }}>
        <button onClick={()=> setActiveTab(2)}>Aktif tab değiştir</button>

        <Tab activeTab={activeTab} setActiveTab={setActiveTab} onChange={tabIndex=>setActiveTab(tabIndex)}>
          <Tab.Panel title="Profil">1.tab</Tab.Panel>
          <Tab.Panel title="Hakkında">2.tab</Tab.Panel>
          <Tab.Panel title="Ayalar">3.tab</Tab.Panel>
        </Tab>
        {activeTab===2 && (

          <div>ekstra alan</div>
        )}
      </div>

      <div style={{ padding: 20 }}>
        <Button>Buton Yazısı</Button>
        <Button variant="success">Buton Yazısı</Button>
        <Button variant="danger">Buton Yazısı</Button>
        <Button variant="warning">Buton Yazısı</Button>
      </div>
      <h1 style={{ color: "red", backgroundColor: "yellow" }}>AnaSayfa</h1>

      <label htmlFor="search" tabIndex="2" onClick={searchFunction}>
        Arama
      </label>
      <input type="text" id="search" tabIndex="1"></input>
      <ul>
        {name.toUpperCase()}
        {todos.map(function (todo, index) {
          return <li key={index}>{todo}</li>;
        })}
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default Example;