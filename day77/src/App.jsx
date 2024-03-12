import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";

export class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Hero />
      </div>
    );
  }
}

export default App;
