import { useReducer, useState, useCallback, useMemo } from "react";
import todoReducer from "./reducers/todoReducer";
import Header from "./Header";
import AddToDo from "./AddToDo";
import Todos from "./Todos";
function App() {
  console.log("app rendered");
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    todo: "",
    search: ''
  });

  const [count, setCount] = useState(0);

  const submitHandle = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: "ADD_TODO",
        todo: state.todo,
      });
      //  setTodos([...todos, todo]);
      //  setTodo('')
    },
    [state.todo]
  );
  const onChange = useCallback((e) => {
    //setTodo(e.target.value)
    dispatch({
      type: "SET_TODO",
      value: e.target.value,
    });
  }, []);
  const searchHandle = (e) => {
    dispatch({
      type: "SET_SEARCH",
      value: e.target.value,
    });
  };

  const filteredTodos = useMemo(()=>{
    return state.todos.filter(todo=>todo.toLocaleLowerCase('TR').includes(state.search.toLocaleLowerCase('TR')))
  },[state.search, state.todos])

  return (
    <>
      <Header></Header>
      <h3>{count}</h3>
      <button onClick={() => setCount((count) => count + 1)}>Arttır</button>
      <hr></hr>
      <h1>To Do App</h1>
      <input
        type="text"
        value={state.search}
        placeholder="Todolarda ara"
        onChange={searchHandle}
      ></input>
      {state.search}
      <hr></hr>
      <AddToDo
        onChange={onChange}
        submitHandle={submitHandle}
        todo={state.todo}
      ></AddToDo>
      <Todos todos={filteredTodos}></Todos>
    </>
  );
}

export default App;
