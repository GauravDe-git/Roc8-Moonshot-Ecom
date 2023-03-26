import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
    return(
        <div className="text-2xl text-gray-200 bg-black">
            My React App
        </div>
    )
}



root.render(<App/>)