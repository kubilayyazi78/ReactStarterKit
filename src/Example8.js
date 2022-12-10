import { useEffect, useState } from "react";

function Example() {
  const [users, setUsers] = useState(false);

  const addPost =(data)=>{
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'Content-type':'application/json',
            'authorization': 'Bearer xxx'
        }

    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
  }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.ok && res.status === 200) {
          return res.json();
        }
      })
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));


addPost({
    userId:1,
    title:'Örnek',
    body:'İçerik'
})


  }, []);
  return (
    <>
      <ul>
        {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  );
}

export default Example;
