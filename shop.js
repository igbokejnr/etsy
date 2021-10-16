import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Shop = ({match}) =>{
    const id = match.params.id
    // console.log(match)
    const [state, setState] = useState([])

    const history = useHistory()
     

    useEffect(() => {
        fetch("http://206.189.124.254:9000/product/"+id)
        .then(res => res.json())
        .then(res =>{
            // console.log(res)
            setState(res)
        })
        .catch(e=>{

        })

    },[id])

    const imgUrl = "http://206.189.124.254:9000"+state.image

    const addToCart = (product) =>{
        const productItems = localStorage.cartItem ? JSON.parse(localStorage.cartItem) : []
            const duplicate= productItems.some(productItem=>productItem._id===product._id)

            if(!duplicate){
                productItems.push(product)
                localStorage.setItem('cartItem', JSON.stringify(productItems))
                history.push('/cart')}
                else{
                    history.push('/shop/'+id)
                }
            }

        // data.push(product)
        // localStorage.setItem('cartItem', JSON.stringify(data))
        // history.push('/cart')

    

    return(

        <div> 
             <hr></hr>
        <div className="single-product">

            <div className="left-panel"></div>

           <div className="single-img"><img src={imgUrl} alt="pics" width="600px " height="600px" /></div>

           <div className="single-description">
            <p className="shop-name">  {state.name}</p>
            <p className="shop-desc">{state.description}</p>
            <p><b><h1>USD {state.price}</h1></b> </p>
            {/* <p>{state.quantity}</p> */}
            {/* <p>{state.category}</p> */}
           
            <button className="addtocart" onClick={() => addToCart(state)}>Add to cart</button>
            </div>

        </div>

        </div>
    )
}
export default Shop; 