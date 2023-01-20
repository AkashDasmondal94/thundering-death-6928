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
        <h1>hello</h1>
       
        <img src={data.image}/>
        <h5>{data.name}</h5>
        <p>{data.title}</p>
        <p>{data.price}</p>
         <button>Add to cart</button>
        </div>
    )
}
export default SingleProduct;