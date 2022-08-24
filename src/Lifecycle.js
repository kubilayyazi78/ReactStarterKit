import { useEffect,useState } from "react";

export default function Lifecycle() {

  const [postId,setpostId]=useState(1);
  const[post,setPost]=useState(false);
  useEffect(() => {
    console.log("Component ilk yüklendiğide çalışır!");
    let interval=setInterval(()=>console.log('interval çalıştı'),1000)
    return ()=>{
        console.log('Component Destroyed!');
        clearInterval(interval);
    }
  }, []);

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res=>res.json())
    .then(data=>setPost(data))
  },[postId])

//   useEffect(() => {
//     console.log("Component render oldu!");
//   });

  return ( <div>Lifecycle
    <h3>{postId}</h3>
    {post && JSON.stringify(post)}
    <button onClick={()=>setpostId(postId=>postId+1)}>Artır</button>
  </div>);
}
