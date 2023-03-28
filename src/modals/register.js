import Header from "./components/header";

export default function RegisterModal({ data, close }) {
  return (
    <div className="w-[700px]">
      <Header title="Kayıt ol"></Header>
      <div className="p-4">
        <pre>{JSON.stringify(data, null, 2)}</pre>
        {data.name}
        <br></br>
        {data.surname} <br></br>
        <button
          onClick={() => {
            data.setSearch("Yeni search kelimesi");
            close();
          }}
        >
          Search Güncelle
        </button>
      </div>
    </div>
  );
}
