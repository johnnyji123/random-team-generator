import React, { Component } from "react";
import SearchBar from "../SearchBar";
import Button from "../Button";
import styles from "./CardList.module.scss"

class CardList extends Component {
    state = {
        searchText: "",
        names: [],

    }

    //everytime you search something in search bar it pushes into the names array and then you render the names array
    //render the names array using a map

    // onAddItem = () => {
    //     this.setState(state => {
    //       const list = state.list.concat(state.value);
    //       return {
    //         list,
    //         value: '',
    //       };
    //     });
    //   };

    setSearchText = (event) => {
        const searchText = event.target.value
        this.setState({ searchText })
    }


    addName = () => {
        if (this.state.searchText !== '') { // only add a name if there's something in the searchbar

            this.setState(state => {
                const names = state.names.concat(state.searchText);
                return {
                    names,
                    searchText: ""
                }
            })
        }
    }
    //everytime you add a name, you concat that name into the names array
    // render the names 

    generateTeam = () => {
        console.log("Generate team here"); // do the generating team stuff here!
        const newlist = document.querySelector(".newlist")
        const randomNumber = Math.floor(Math.random() * this.state.names.length);
        const random = this.state.names.splice(randomNumber, 1);
        newlist.innerHTML += `<p>${random}</p>`


    }
    shuffle(array) {
        var copy = [], n = array.length, i;

        // While there remain elements to shuffle…
        while (n) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * array.length);

            // If not already shuffled, move it to the new array.
            if (i in array) {
                copy.push(array[i]);
                delete array[i];
                n--;
            }

        }

        return copy;

    }



    splitTeamInHalf = () => {
        const twoTeam = document.querySelector(".two")
        const shuffledNames = this.shuffle(this.state.names)
        console.log(this.state.names.length / 2)
        const divideArrayByTwo = this.state.names.length / 2
        const splice = shuffledNames.splice(0, divideArrayByTwo)
        console.log(splice)
        console.log(shuffledNames)
        twoTeam.innerHTML += `<p> ${splice}</p>`
        twoTeam.innerHTML += `<p>${shuffledNames}</p>`

    }


    splitTeamIntoPairs = (myArray, chunk_size) => {
        const results = [];

        while (myArray.length) {
            results.push(myArray.splice(0, chunk_size));
        }

        return results;

    }

    another = () => {
        const threeTeam = document.querySelector(".three")
        const shuffleNamesTwo = this.shuffle(this.state.names)
        const result = this.splitTeamIntoPairs(shuffleNamesTwo, 2);


        console.log(result);
        for (let i = 0; i < result.length; i++) {
            console.log(result[i])
            threeTeam.innerHTML += `<p>${result[i]}</p>`
        }

    }

reset = () => {
   console.log("reset")
}

    render() {

        return (
            <div className = {styles.wrapper}>
                   <div className={styles.addToList}>
                    <SearchBar searchText={this.state.searchText} setSearchText={this.setSearchText} />
                    <Button text={"Add name to list"} method={this.addName} /> {/* You had two buttons inside button. You should only have one as it's a single component. */}
                </div>
                <div className = {styles.main}>
                {/* <div className = {styles.intro}>Hello, welcome to my random name generator. Have a game to play? Have work to do? At a social? Don't worry, this random name generator can help put you into the teams you need</div> */}
             <div className = {styles.allContent}>
                <div className={styles.list}>
                    <h2>List of names:</h2>
                    {/* Pass the method you want to do onClick as a prop. The Button component will execute it. */}
                    {this.state.names.map(name => {
                    return (<p>{name}</p>)
                }
                )
                }
                </div>
                <div className={styles.random}>
                    <h2>Generate random name</h2>
                    <Button text={"Generate random name"} method={this.generateTeam} />
                    <ul className="newlist"></ul>

                </div>
                <div className={styles.half}>
                    <h2>Split Teams in half</h2>
                    <Button text={"Split team in half"} method={this.splitTeamInHalf} />
                    <ul className="two"></ul>

                </div>
                <div className={styles.pairs}>
                    <h2> Split Teams into pairs</h2>
                    <Button text={"Split team into pairs"} method={this.another} />
                    <ul className="three"></ul>
                </div>
                
                <div className = {styles.container}>
                <div className = {styles.row}></div>
                <div className="col-xs-5 title-container"></div>
                <div className ="col-xs-7-form-container"></div>
              
                {/* <button className = {styles.button} onClick ={this.reset}>Reset</button> */}
                </div>
            </div>
            </div>
            </div>
            

        )
    }
}

export default CardList;