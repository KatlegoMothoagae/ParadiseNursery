import React from 'react';
import logo from "../assets/plant-svgrepo-com.svg";
import {Link} from "react-router-dom";
import './cart.css'
function Cart() {
    return(
        <>
            <header id="shopping-header">
                <Link to="/shopping">
                    <div id="logo">
                        <img id="logo-img" alt="plant logo" src={logo}/>
                        <div id="logo-header">
                            <h2>Paradise Nursery</h2>
                            <p>Where Green Meets Serenity</p>
                        </div>
                    </div>
                </Link>

                <h2>Plants</h2>
                <Link to={"/cart"}>
                    {/*{getTotal()}*/}
                </Link>
                {/*<p></p>*/}
                {/*<img id="cart" alt="cart" src="my-react-project/src/assets/plant-svgrepo-com.svg"/>*/}
            </header>
            <main id="cart">
                <h3>Total Cart Amount: $100</h3>
                <button className="cart-btn">Continue Shopping</button>
                <button className="cart-btn">Checkout</button>
            </main>
        </>
    )
}

export default Cart;