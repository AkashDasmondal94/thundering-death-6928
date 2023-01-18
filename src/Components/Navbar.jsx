import style from "../Style/Navbar.module.css"
import { Link } from 'react-router-dom'
function Navbar(){
    return(
        <div id={style.main}>
        <div id={style.ist}>
        <div>
      <Link to="/">  <img src="https://images.indianexpress.com/2021/01/myntra.png"/></Link>
        </div>
        
        <div><Link to="/Mens"><p className={style.nb}>Men</p></Link></div>
        <div><Link to="/Women"><p className={style.nb} >WOMEN</p></Link></div>
        <div><p className={style.nb}>KIDS</p></div>
        <div><p className={style.nb}>LIVING</p></div>
        <div><p className={style.nb}>BEAUTY</p></div>
        <div><p className={style.nb}>STUDIO</p></div>
        
        </div>
        <div id={style.dui}>
            <div>
               
            </div>
            <div>
                <input type="text" placeholder="Search for product brands and more" />
            </div>
            <div><Link to="/Profile"><p className={style.nb}>Profile</p></Link></div>
            <div><p className={style.nb}>Wishlist</p></div>
            <div><p className={style.nb}>Bag</p></div>
        </div>
        </div>
    )
}
export default Navbar