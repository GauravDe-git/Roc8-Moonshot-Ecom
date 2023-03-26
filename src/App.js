import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import ProductListing from "./components/ProductListing";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
    return(
        <div>
            <Navbar/>
            <ProductListing/>
        </div>
    )
}



root.render(<App/>)