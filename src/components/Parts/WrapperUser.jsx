import { Outlet } from "react-router-dom"
import NavUser from "./NavUser"
import Footer from "./Footer"
function WrapperUser () {
    return(<>
    <NavUser />

    <Outlet/>
    <Footer/>

    </>)
}

export default WrapperUser