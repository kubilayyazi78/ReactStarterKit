
import { forwardRef, useRef } from "react";

function Input(props, ref) {
  return <input ref={ref} type="text" {...props}></input>;
}


Input = forwardRef(Input);

function App() {
  const inputRef = useRef();
  const focusInput = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  };
  return (
    <>
      <h1>useRef() - forwardRef()</h1>
      <Input ref={inputRef}></Input>
      <button onClick={focusInput}>Focusla</button>
    </>
  );
}

export default App;
