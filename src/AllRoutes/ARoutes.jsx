import {Route,Routes} from "react-router-dom"
import Mens from "../Components/Mens";
const ARoutes=()=>{
    return(
        <div>
            <Routes>
            <Route path="/Mens" element={<Mens/>}/>
        </Routes>

        </div>
    )
}
export default ARoutes;