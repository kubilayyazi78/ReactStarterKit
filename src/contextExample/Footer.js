import SwitchLanguage from "./SwitchLanguage";
import SwitchTheme from "./SwitchTheme";

function Footer (){
    return(
       <footer>
        Footer <br></br>
        <SwitchTheme></SwitchTheme>
        <SwitchLanguage></SwitchLanguage>
       </footer>
    )
}
export default Footer;