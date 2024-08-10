import React from 'react';
import './shopping.css'
import {useSelector, useDispatch} from "react-redux"
import {increment, decrement} from "../plantSlice.js";
// import lotus from  '../assets/lotus.jpg'
import logo from '../assets/plant-svgrepo-com.svg'
import {Link} from "react-router-dom";
function ShoppingPage() {
    const plantItems = useSelector((state) => state.plant)
    const dispatch = useDispatch();
    console.log(plantItems);
    const handleAddToCart = (index) => {
        console.log("clickity")
        console.log(plantItems[index].quantity);
        dispatch(increment(index))
    }

    const buttonText = (index) => {
        if (plantItems[index].quantity === 0) {
            return "Add to cart"
        }
        return "Added to cart"
    }
    // let total = plantItems()
    const getTotal = () => {
        let total = 0;
        for (let i =0; i <= plantItems.length - 1; i++) {
            total += plantItems[i].quantity.valueOf();
        }

        console.log(total);
        return total;
    }
    return (
        <>
            <header id="shopping-header">
                <div id="logo">
                    <img id="logo-img" alt="plant logo" src={logo}/>
                    <div id="logo-header">
                            <h2>Paradise Nursery</h2>
                            <p>Where Green Meets Serenity</p>
                        </div>
                    </div>
                    <h2>Plants</h2>
                    <Link to={"/cart"}>
                        {getTotal()}
                    </Link>
                    {/*<p></p>*/}
                    {/*<img id="cart" alt="cart" src="my-react-project/src/assets/plant-svgrepo-com.svg"/>*/}
                </header>
                <main id="shopping-main">
                    <div className="air-purifying-plants">

                        <h1 className="plant-category">Air purifying plants</h1>

                        <div className="plants">{
                            plantItems.map((item, index) => (
                            <div className="plant">
                                <h1>{item.name}</h1>
                                <img src={item.img} alt="a plant"/>
                                <p>${item.cost}</p>
                                <p>{item.summary}</p>
                                <button onClick={() => handleAddToCart(index)} disabled={!(item.quantity.valueOf() === 0)}>
                                    {buttonText(index)}
                                </button>
                            </div>
                            ))
                        }
                        </div>
                    </div>
                </main>

            </>
        )
}

export default ShoppingPage;