import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages"
import Cart from "./pages/cart"
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>

        </Router>
    );
}


export default App
