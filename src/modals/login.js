import { useState } from "react";
import { createModal } from "../utils/modal";
import Header from "./components/header";

export default function LoginModal({ data, close }) {
  const [search,setSearch]=useState('')
  return (
    <div className="w-[500px]">
      <Header title="Giriş Yap"></Header>
      <input type="text" value={search} onChange={e=>setSearch(e.target.value)}></input> 
      <p>
        Aranan Kelime : {search}
      </p>
      login modal<br></br>
      <button onClick={close}>Kapat</button> <br></br>
      <button
        onClick={() => {
          createModal("register", {
            name: "kubilay",
            surname: "yazı",
            setSearch
          });
        }}
      >
        Register Modalı Yükle
      </button>
    </div>
  );
}
