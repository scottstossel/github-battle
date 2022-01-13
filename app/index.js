import React from "react";
import ReactDom from "react-dom";
import Popular from "./components/Popular";
import "./index.css";
import Battle from "./components/Battle";

//Component
//State
//Lifecycle
//UI

class App extends React.Component {
  render() {
    

    return (
    <div className="container">
      <Battle />
    </div>
    )
  }
}

ReactDom.render(
  <App />,
  //where to render the element
  document.getElementById("app")
);
