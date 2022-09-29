import Header from '../components/Header';
import Body from '../components/Body';
const Main = () => {
    const miHeader = {
        name : "Mi header",
        opcion2: "Mi otra opción" 
    }
    return(
        <>
            <Header opciones={miHeader}/>
            <Body />
            <Header opciones={miHeader}/>
        </>
    )
}

export default Main;