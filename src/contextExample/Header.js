import SwitchLanguage from "./SwitchLanguage";
import SwitchTheme from "./SwitchTheme";

function Header (){
    return(
       <header>
        Header <br></br>
        <SwitchTheme></SwitchTheme>
        <SwitchLanguage></SwitchLanguage>
       </header>
    )
}
export default Header;