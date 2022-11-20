import SiteProvider from "./context/SiteContext"
import Home from "./contextExample/Home";

function App (){

    
    return (
        <SiteProvider>
            <Home></Home>
        </SiteProvider>
    )
}

export default App;
