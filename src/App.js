import React, { Component } from "react";
import Layout from "./Components/Layout/Layout";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <p>Hello world</p>
        </Layout>
      </div>
    );
  }
}

export default App;
