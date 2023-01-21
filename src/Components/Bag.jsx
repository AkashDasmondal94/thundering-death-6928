import { useEffect } from "react";
import { useState } from "react";

const Bag=()=>{
    const [item, setItem] = useState([])

useEffect(() => {
  const item = JSON.parse(localStorage.getItem('items'));
  if (item) {
   setItem(item);
  }
  console.log(item)
}, []);
    return(
        <div>
          <div>Akash</div>
          <div style={{marginTop:"100px"}}>
          
          </div>
        
        </div>
    )
}
export default Bag;
