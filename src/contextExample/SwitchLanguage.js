import {useSite} from "../context/SiteContext"
function SwitchLanguage (){

    const {language,setLanguage}=useSite();
    return(
        <>
        Mevcut Dil = {language}<br></br>
        <button onClick={()=>setLanguage(language==='tr' ? 'en': 'tr')}>Dil Değiştir</button>
        </>
    )
}
export default SwitchLanguage;