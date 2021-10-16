import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

const Sidebar=()=>{

    let [product, setProduct]=useState([]);

    useEffect(() =>{
        fetch("http://206.189.124.254:9000/products")
        .then(res => res.json())
        .then(res =>{
            let result = res.filter(function(val){
                return val.category ==="Men's clothing-shirts"
            })

            setProduct(result);
        })
        .catch(e=>{

        })


    },[]);


    return(
        <div className="product-container">
            <div className="side-bar">

            </div>

            <div className=" products-container"> 
            {/* <div className="static"></div>   */}
                {
                   
            product.map(x=>
                <div className="col" key={x._id}>
            <Link to={`/shop/${x._id}`}>
                <div className="product1"><img src={"http://206.189.124.254:9000" + x.image} alt="product" width="245" /></div>
                <div className="product2">{x.description}</div>
                <div className="product2">{x.name}</div>
                <div className="product2">
                    {x.quantity}
                    {/* <svg>
                    <path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z"></path>
                    </svg> */}
                </div>
                <div className="product2"><b>USD ({x.price})</b></div> 
                </Link>
            </div> 

            
             )
        }
            </div>
        </div>
    );
};
export default Sidebar;