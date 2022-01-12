import React from "react";
import ReactDom from "react-dom";
import Popular from "./components/Popular";
import "./index.css";

//Component
//State
//Lifecycle
//UI

class App extends React.Component {
  render() {
    

    return (
    <div className="container">
      <Popular />
    </div>
    )
  }
}

ReactDom.render(
  <App />,
  //where to render the element
  document.getElementById("app")
);
