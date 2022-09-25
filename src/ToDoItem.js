import {memo} from "react";
function ToDoItem({ todo }) {
    console.log('ToDoItem rendered')
  return (<li>{todo}</li>)
}
export default memo(ToDoItem);
