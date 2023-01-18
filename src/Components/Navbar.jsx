import style from "../Style/Navbar.module.css"
import { Link } from 'react-router-dom'
function Navbar(){
    return(
        <div id={style.main}>
        <div id={style.ist}>
        <div>
      <Link to="/">  <img src="https://images.indianexpress.com/2021/01/myntra.png"/></Link>
        </div>
        
        <div><Link to="/Mens"><p>Men</p></Link></div>
        <div><Link to="/Women"><p>WOMEN</p></Link></div>
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
            <div><Link to="/Profile"><p>Profile</p></Link></div>
            <div><p>Wishlist</p></div>
            <div><p>Bag</p></div>
        </div>
        </div>
    )
}
export default Navbar