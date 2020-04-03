import React, { Component } from "react";
import styles from "./SearchBar.module.scss"

class SearchBar extends Component {
    render() {
        return(
            <div>
                <input 
                    placeholder = "Enter name..."
                    value = {this.props.searchText}
                    onChange = {this.props.setSearchText}
                />
            </div>
        )
    }
}

export default SearchBar;