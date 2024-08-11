import React, {useState, useEffect} from 'react';
import logo from "../assets/plant-svgrepo-com.svg";
import {Link} from "react-router-dom";
import './cart.css'

import {useSelector, useDispatch} from "react-redux"
import {increment, decrement, reset, setItems} from "../plantSlice.js";

function Cart() {


    const plantItems = useSelector((state) => state.plant);
    let [cart, setCart] = useState(plantItems.filter(item => item.quantity > 0));
    let [total, setTotal] = useState(0);
    // setCart(plantItems.filter(item => item.quantity > 0));
    const dispatch = useDispatch();
    useEffect(() => {
        const doStuff = () => {
            const newTotal = getTotalCart();
            setTotal(newTotal);
        }

        doStuff();
    }, [cart])

    const resetCart = (index) =>{
        dispatch(reset(index));
        getTotalCart()
    }
    const getTotalNum = () => {
        let total = 0;
        for (let i =0; i <= plantItems.length - 1; i++) {
            total += plantItems[i].quantity.valueOf();
        }

        console.log(total);
        return total;
    }
    const setCartItems = (index, value) => {
        //
        let plantIndex = plantItems.findIndex(item => item.name === cart[index].name);
        dispatch(setItems({plantIndex, value}));

        setCart( ()=>cart = plantItems.filter(item => item.quantity > 0))
        // console.log(cart)
        // console.log("NEW TOTAL: "+getTotalCart());
        setTotal(getTotalCart())
        console.log(2)
    }
    const getTotalCart = () => {
        let change = 0;
        setCart( ()=>cart = plantItems.filter(item => item.quantity > 0))
        for (let index = 0; index < cart.length; index++) {
            change += cart[index].quantity.valueOf() * cart[index].cost;
        }
        return change
        // setTotal(() => total += change);

    }

    const getTotal = (index) => {
        let plantIndex = plantItems.findIndex(item => item.name === cart[index].name);
        if(plantItems[plantIndex].quantity === 0){
            cart.splice(index, 1);
        }
        return plantItems[plantIndex].quantity

    }
    function removeItem(index) {
        let newCart = [];
        for (let i = 0; i < cart.length; i++) {
            if(i !== index) {
                newCart.push(cart[i]);
            }else {
                let plantIndex = plantItems.findIndex(item => item.name === cart[i].name);
                resetCart(plantIndex);

                console.log(plantItems[plantIndex])
                // cart[i].quantity--;
                // console.log(plantItems.findIndex((index)=>cart[i]===plantItems[index]))
            }
        }

        setCart(cart = newCart);
        console.log("NEW TOTAL: "+getTotalCart());
        setTotal(getTotalCart())

    }
    return(
        <>
            <header id="shopping-header">
                <Link to="/">
                    <div id="logo">
                        <img id="logo-img" alt="plant logo" src={logo}/>
                        <div id="logo-header">
                            <h2>Paradise Nursery</h2>
                            <p>Where Green Meets Serenity</p>
                        </div>
                    </div>
                </Link>
                <Link to="/shopping">
                    <h2>Plants</h2>
                </Link>

                <Link to={"/cart"}>
                    {getTotalNum()}
                </Link>
                {/*<p></p>*/}
                {/*<img id="cart" alt="cart" src="my-react-project/src/assets/plant-svgrepo-com.svg"/>*/}
            </header>
            <main id="cart">

                <h3>Total Cart Amount: ${total}</h3>
                <div className="items">{
                    cart.map((item, index) => (
                    <div className="cart-item">

                        <img src={item.img} alt="a plant"/>
                        <div>
                            <h1>{item.name}</h1>
                            <p>${item.cost}</p>
                            <input min="0" defaultValue={cart[index].quantity} onChange={(e) => setCartItems(index, e.target.value)} id="numItems" type="number"/>
                            <p>total: ${getTotal(index)* item.cost}</p>
                            <button onClick={() => removeItem(index)}>Delete</button>

                        </div>

                    </div>
                    ))
                    }
                </div>

                <button className="cart-btn">
                    <Link to="/shopping"> Continue Shopping</Link>

                </button>
                <button className="cart-btn">Checkout</button>
            </main>
        </>
    )
}

export default Cart;