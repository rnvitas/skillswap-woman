import { Outlet } from "react-router-dom"
import NavUser from "./NavUser"
import FooterUser from "./FooterUser"
function WrapperUser () {
    return(<>
    <NavUser />

    <Outlet/>
    <FooterUser/>

    </>)
}

export default WrapperUser