import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
function WomensingleCard({image,name,price,title,id}){
   const [data,setData] = useState({
    image,name,price,title,id
   })
    let  navigate=useNavigate();
    const wishlist=()=>{
        localStorage.setItem("data",JSON.stringify([data]))
        alert("Added WishesList")
    }
    return(
        <div>
        <div onClick={()=>navigate(`/WomenSingleproducts/${id}`)}>
            
        <img src={image} alt="title"/>
        
        <h3>{name}</h3>
        <h4>{title}</h4>
        <h4>Rs.{price}</h4>
        </div>
        <button onClick={wishlist} style={{width:"130px",}}>WishList</button>
        </div>
    )
}
export default WomensingleCard