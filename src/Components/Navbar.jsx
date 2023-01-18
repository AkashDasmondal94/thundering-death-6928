import style from "../Style/Navbar.module.css"
import { Link } from 'react-router-dom'
function Navbar(){
    return(
        <div id={style.main}>
        <div id={style.ist}>
        <div>
            <img src="https://images.indianexpress.com/2021/01/myntra.png"/>
        </div>
        <div><Link to="/Mens"><p>Men</p></Link></div>
        <div><p>WOMEN</p></div>
        <div><p>KIDS</p></div>
        <div><p>LIVING</p></div>
        <div><p>BEAUTY</p></div>
        <div><p>STUDIO</p></div>
        
        </div>
        <div id={style.dui}>
            <div>
               
            </div>
            <div>
                <input type="text" placeholder="Search for product brands and more" />
            </div>
            <div><p>Profile</p></div>
            <div><p>Wishlist</p></div>
            <div><p>Bag</p></div>
        </div>
        </div>
    )
}
export default Navbar