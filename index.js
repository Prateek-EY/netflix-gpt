import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
    return <h1>Hello, React!</h1>; // A simple component to render
  };
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

