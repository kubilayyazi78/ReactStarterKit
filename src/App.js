/* eslint-disable default-case */
import { useReducer } from "react";
import todoReducer from "./reducers/todoReducer";


function App() {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    todo: ''
  });

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch({
      type:'ADD_TODO',
      todo:state.todo
    })
    //  setTodos([...todos, todo]);
    //  setTodo('')
  };
  const onChange = (e) => {
    //setTodo(e.target.value)
    dispatch({
      type: "SET_TODO",
      value: e.target.value,
    });
  };

  return (
    <>
      <h1>To Do App</h1>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          value={state.todo}
          onChange={(e) => {
            onChange(e);
          }}
        ></input>
        <button disabled={!state.todo} type="submit">
          Ekle
        </button>
      </form>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
