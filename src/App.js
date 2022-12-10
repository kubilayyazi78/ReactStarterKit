import { useEffect } from "react";
import { getPosts } from "./services/post";

function App() {
  useEffect(() => {
    getPosts().then((res) => console.log(res));
  });
  return <></>;
}

export default App;
