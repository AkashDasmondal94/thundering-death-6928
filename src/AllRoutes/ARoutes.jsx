import {Route,Routes} from "react-router-dom"
import Mens from "../Components/Mens";
import Profile from "../Components/Profile";
import Women from "../Components/Women";
import AllRoutes from "./AllRoutes";
const ARoutes=()=>{
    return(
        <div>
            <Routes>
            <Route path="/" element={<AllRoutes/>}/>
            <Route path="/Mens" element={<Mens/>}/>
            <Route path="/Women" element={<Women/>}/>
            <Route path="/Profile" element={<Profile/>}/>
            
        </Routes>

        </div>
    )
}
export default ARoutes;