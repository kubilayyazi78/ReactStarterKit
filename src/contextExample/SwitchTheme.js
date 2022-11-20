import {useSite} from "../context/SiteContext";
function SwitchTheme(){

    const {theme,setTheme} =useSite();
    return(
        
        <>
        Mevcut Tema = {theme}<br></br>
        <button onClick={()=>setTheme(theme==='light' ? 'dark': 'light')}>Tema Değiştir</button>
        </>
    )
}
export default SwitchTheme;