import style from "../Style/SingleProduct.module.css"
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {useParams} from "react-router-dom"

const SingleProduct=()=>{
    const [data,setData]=useState([])

    const {id} = useParams()
    console.log(id)

    

     useEffect(()=>{
        axios.get(`http://localhost:8000/Mensproducts/${id}`)
        .then((res)=>{
          console.log(res.data)
          setData(res.data)
         
        })
      },[]);

    return(
        <div id={style.main}>
        
       <div className={style.big}>
        <img src={data.image}/>
        </div>
        <div className={style.big}>
        <img src={data.image}/>
        </div>
        <div id={style.detaii}>
        <h1>{data.name}</h1>
        <h2>{data.title}</h2>
        <h1>Rs.{data.price}</h1>
        <h3>Select Size(UK Size)</h3>
        
        <button className={style.btn}>6</button>
        <button className={style.btn} >7</button>
        <button className={style.btn}>8</button>
        <button className={style.btn}>9</button>
        <button className={style.btn}>10</button>
        <div >
          <button id={style.wishlist}>Add To Bag</button>
          </div>
        </div>
        
        <div>
        
        </div>
      
        </div>
    )
}
export default SingleProduct;