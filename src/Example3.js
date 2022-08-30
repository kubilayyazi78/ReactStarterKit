import { forwardRef, useRef } from "react";

function Input(props, ref) {
  return <input ref={ref} type="text" {...props}></input>;
}

// eslint-disable-next-line no-func-assign
Input = forwardRef(Input);

function Example() {
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
export default Example;
