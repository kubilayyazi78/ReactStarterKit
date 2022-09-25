import ToDoItem from "./ToDoItem";
import {memo} from "react";
function Todos({ todos }) {
    console.log('Todos rendered')
  return (
    <ul>
      {todos.map((todo, index) => (
        <ToDoItem todo={todo} key={index}></ToDoItem>
      ))}
    </ul>
  );
}
export default memo(Todos);
