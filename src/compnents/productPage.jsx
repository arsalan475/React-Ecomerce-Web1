import { useEffect, useState } from "react";
import ShopingCard from "./ShopingCard";


import LoadingComponent from "./Loading";


function ProductPage() {

const [data,setData]= useState(null)


    useEffect(function () {
        fetch('https://fakestoreapi.com/products?limit=30')
                .then(res=>res.json())
                .then(json=> setData(json))
    }, [])
    

  

    return (

        <div className="mt-6 w-full flex gap-10 flex-wrap justify-center">
            {data ? data.map((data,i)=> <ShopingCard key={i} left={Math.floor(Math.random()*30)+1} id={data.id} description={data.description.slice(0,50)} title={data.title.slice(0,30    )} price={data.price} img={data.image} />)
            :<LoadingComponent/>} 
        </div>
    )
}

export default ProductPage
