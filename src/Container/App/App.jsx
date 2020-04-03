import React, { Component } from "react";
import styles from "./App.module.scss";
import CardList from "../../Components/CardList/CardList";

class App extends Component {
  render(){
    return(
      <div>
        <CardList />
      </div>
    )
  }
}

export default App;