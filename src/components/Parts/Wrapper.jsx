import { Outlet } from "react-router-dom"
import Footer from "../Parts/Footer"
import Navigation from "../Parts/Navigation"

function Wrapper () {
    return(<>
    <Navigation/>

    <Outlet/>

    <Footer/>
    </>)
}

export default Wrapper