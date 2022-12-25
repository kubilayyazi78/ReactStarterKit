import { useEffect } from "react";
import { getPosts } from "./services/post";


function Example (){

    useEffect(() => {
        getPosts().then((res) => console.log(res));
      });
      return <></>;
}

export default Example;