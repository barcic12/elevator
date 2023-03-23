import React from "react";
import ReactDOM from "react-dom/client";
function Greeting() {
  return (
    <div class="container">
      <h1>Welcome to my website!</h1>
      <p>This is a paragraph of text.</p>
      <p>Here you'll find information about my products and services</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />); // like root.render(<Greeting></Greeting>)
