import logo from "./logo.svg"
function App() {
  return (
    <div className="App">
      <h3>{process.env.NODE_ENV}</h3>
      <h3>{process.env.REACT_APP_API_URL}</h3>
      <img src="/logo192.png" alt=""></img>
      <img src={logo} alt=""></img>
      
    </div>
  );
}

export default App;
 