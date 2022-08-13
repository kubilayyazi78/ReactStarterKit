import "./style.scss";
import {createElement, Fragment} from "react"

function Button(props){
  return <button>{props.text}</button>
}

function App() {
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

  return (
    <>
    <Button text="button1"></Button>
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
        {todos.map((todo,index)=>(
          <li key={index}>{todo}</li>
        ))}
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
   </>
  );
}

export default App;
