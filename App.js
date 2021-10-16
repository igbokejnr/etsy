import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from "./components/Nav/nav"
import "./style.css";
import Home from "./components/Home_page/home";
import Product from "./components/Product_page/product";
import Shop from "./components/Shop_page/shop";

import Skyblue from "./components/Home_page/skyblue";
import Cart from "./components/Cart_cart/cart";




const App =() =>{

    return(
        <div>
                        
            <Router>
                <Nav />

                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>

                    <Route path="/product">
                        <Product />
                    </Route>

                    <Route path="/shop/:id" component={Shop} />
                    <Route path="/cart" component={Cart} />
                </Switch>


            </Router>


            {/* <Skyblue /> */}

        </div>
    )
    
};
export default App;