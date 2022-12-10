import SiteProvider from "./context/SiteContext"
import Home from "./contextExample/Home";
function Example (){

    return (
        <SiteProvider>
            <Home></Home>
        </SiteProvider>
    )
}

export default Example;