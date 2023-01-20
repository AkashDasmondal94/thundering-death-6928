import { useNavigate } from 'react-router-dom'
function MensSingleProductCard({image,name,price,title,id}){
    let  navigate=useNavigate();
    return(
        <div>
        <div onClick={()=>navigate(`/MensProducts/${id}`)}>
        <img src={image} alt="title"/>
        
        <h3>{name}</h3>
        <h4>{title}</h4>
        <h4>{price}</h4>
        </div>
        <button style={{width:"130px",}}>WishList</button>
        </div>
    )
}
export default MensSingleProductCard