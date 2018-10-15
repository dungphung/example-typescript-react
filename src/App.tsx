import * as React from "react";
import Todo1 from "./example/1_Define_Props_&_State";
import Generics from "./example/2_Generic";
import "./bootstrap.min.css";
import "./App.css";
import Home from "./example/3_HOCS_&_Generic";
import About from "./example/4_Render_Props_&_Generic";

import logo from "./logo.svg";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Todo1 />
        <div>==========</div>
        <Generics />

        <div>=========</div>
        <Home />
        <div>=========</div>
        <About />
      </div>
    );
  }
}

export default App;
