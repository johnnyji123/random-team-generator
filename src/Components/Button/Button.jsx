import React, { Component } from "react";
import styles from "./Button.module.scss";

class Button extends Component {
    render(){
        return(
            <div className = {styles.styleButton}>
            <button onClick={this.props.method}>{this.props.text}</button>
            </div>
        )
    }
}

export default Button;