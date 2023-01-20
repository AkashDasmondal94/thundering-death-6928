import {Route,Routes} from "react-router-dom"
import Mens from "../Components/Mens";
import MensProducts from "../Components/MensProducts";
import Profile from "../Components/Profile";
import SingleProduct from "../Components/SingleProduct";
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
            <Route path="/MensProducts" element={<MensProducts/>}/>
            <Route path="/MensProducts/:id" element={<SingleProduct/>}/>
            
            
        </Routes>

        </div>
    )
}
export default ARoutes;