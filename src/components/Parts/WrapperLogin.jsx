import { Outlet } from "react-router-dom"
import NavLogin from "../Parts/NavLogin"
function WrapperLogin () {
    return(<>
    <NavLogin />

    <Outlet/>

    </>)
}

export default WrapperLogin