/*
  TODO:
  - change variable names
  - 

*/

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: [],
      positions: [],
      gameboard: [],
      hits: 0,
      misses: 0,
      ships: {
        "carrier": {
          "size":5,
        },
        "battleship": {
          "size":4,
        },
        "cruiser": {
          "size":3,
        },
        "submarine": {
          "size":3,
        },
        "destroyer": {
          "size":2,
        }
      }
    }
  }

  componentDidMount() {
    this.addListeners();
  }

  addListeners = () => {
    const elements = document.querySelectorAll("tr");

    const rows = [];
    for (let i = 1; i < elements.length; i++) rows.push(elements[i]);

    const gameboard = [];
    for (let i = 0; i < rows.length; i++) {
      let row = [];
      for (let j = 1; j < rows[i].children.length; j++) row.push(rows[i].children[j]);
      gameboard.push(row);
    }

    const cells = [];
    for (let i = 0; i < rows.length; i++) {
      for (let j = 1; j < rows[i].children.length; j++) cells.push(rows[i].children[j]);
    }

    this.setState({ cells, gameboard }, () => this.addShips());

    cells.forEach((elem) => {
      elem.addEventListener("click", () => {
        this.check(elem);
      });
    }, this);
  }

  addShips = () => {
    console.log('adding ships');
    const ships = [5, 4, 3, 3, 2];
    const gameboard = this.state.gameboard;
    console.log(gameboard);

    for (let i = 0; i < ships.length; i++) { // loop through ships
      const direction = Math.floor(Math.random() * 2); // 0 = horizontal, 1 = vertical

      if (direction === 0) {
        console.log('horizontal!')
        let randomRow = Math.floor(Math.random() * 10); // randomize the row
        let randomStartColumn = Math.floor(Math.random() * (10-ships[i])); // randomize the start column. ship size taken in account so it will not overlap the gameboard.
        const row = gameboard[randomRow];

        console.log(`ship size: ${ships[i]}, starting position: ${randomRow}${randomStartColumn}`);

      } else {
        console.log('vertical!')
        let randomRow = Math.floor(Math.random() * 10);
        let randowStartColumn = Math.floor(Math.random() * (10-ships[i]));
        console.log(`ship size: ${ships[i]}, starting position: ${randomRow}${randowStartColumn}`);
      }
    }
  }

  check = (elem) => {
    const positions = this.state.positions;
    console.log(elem.id)
    const found = positions.filter(position => position == elem.id);
    if (found.length !== 0) {
      elem.style.backgroundColor = "red";
      this.setState({ hits: this.state.hits + 1 });
    } else {
      elem.style.backgroundColor = "gray";
      this.setState({ misses: this.state.misses + 1 });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="game-header"><h1>Battleships</h1></div>
        <div className="game-score">
          <div className="game-score-hits">
            <h3>Hits: {this.state.hits}</h3>
          </div>
          <div className="game-score-misses">
            <h3>Misses: {this.state.misses}</h3>
          </div>
        </div>
        <div className="game-board">
        {/*
        {this.state.misses === 10 ? <h1 className="game-announcement">YOU LOST</h1> : null}
        {this.state.hits === 5 ? <h1 className="game-announcement">YOU WON!!</h1> : null}
        */}
          <table>
            <tbody>
              <tr>
                <td /><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td>
              </tr>
              <tr>
                <td>1</td>
                <td className="cell"id="00"/><td className="cell"id="01"/><td className="cell"id="02"/><td className="cell"id="03"/><td className="cell"id="04"/>
                <td className="cell"id="05"/><td className="cell"id="06"/><td className="cell"id="07"/><td className="cell"id="08"/><td className="cell"id="09"/>
              </tr>
              <tr>
                <td>2</td>
                <td className="cell"id="10"/><td className="cell"id="11"/><td className="cell"id="12"/><td className="cell"id="13"/><td className="cell"id="14"/>
                <td className="cell"id="15"/><td className="cell"id="16"/><td className="cell"id="17"/><td className="cell"id="18"/><td className="cell"id="19"/>
              </tr>
              <tr>
                <td>3</td>
                <td className="cell"id="20"/><td className="cell"id="21"/><td className="cell"id="22"/><td className="cell"id="23"/><td className="cell"id="24"/>
                <td className="cell"id="25"/><td className="cell"id="26"/><td className="cell"id="27"/><td className="cell"id="28"/><td className="cell"id="29"/>
              </tr>
              <tr>
                <td>4</td>
                <td className="cell"id="30"/><td className="cell"id="31"/><td className="cell"id="32"/><td className="cell"id="33"/><td className="cell"id="34"/>
                <td className="cell"id="35"/><td className="cell"id="36"/><td className="cell"id="37"/><td className="cell"id="38"/><td className="cell"id="39"/>
              </tr>
              <tr>
                <td>5</td>
                <td className="cell"id="40"/><td className="cell"id="41"/><td className="cell"id="42"/><td className="cell"id="43"/><td className="cell"id="44"/>
                <td className="cell"id="45"/><td className="cell"id="46"/><td className="cell"id="47"/><td className="cell"id="48"/><td className="cell"id="49"/>
              </tr>
              <tr>
                <td>6</td>
                <td className="cell"id="50"/><td className="cell"id="51"/><td className="cell"id="52"/><td className="cell"id="53"/><td className="cell"id="54"/>
                <td className="cell"id="55"/><td className="cell"id="56"/><td className="cell"id="57"/><td className="cell"id="58"/><td className="cell"id="59"/>
              </tr>
              <tr>
                <td>7</td>
                <td className="cell"id="60"/><td className="cell"id="61"/><td className="cell"id="62"/><td className="cell"id="63"/><td className="cell"id="64"/>
                <td className="cell"id="65"/><td className="cell"id="66"/><td className="cell"id="67"/><td className="cell"id="68"/><td className="cell"id="69"/>
              </tr>
              <tr>
                <td>8</td>
                <td className="cell"id="70"/><td className="cell"id="71"/><td className="cell"id="72"/><td className="cell"id="73"/><td className="cell"id="74"/>
                <td className="cell"id="75"/><td className="cell"id="76"/><td className="cell"id="77"/><td className="cell"id="78"/><td className="cell"id="79"/>
              </tr>
              <tr>
                <td>9</td>
                <td className="cell"id="80"/><td className="cell"id="81"/><td className="cell"id="82"/><td className="cell"id="83"/><td className="cell"id="84"/>
                <td className="cell"id="85"/><td className="cell"id="86"/><td className="cell"id="87"/><td className="cell"id="88"/><td className="cell"id="89"/>
              </tr>
              <tr>
                <td>10</td>
                <td className="cell"id="90"/><td className="cell"id="91"/><td className="cell"id="92"/><td className="cell"id="93"/><td className="cell"id="94"/>
                <td className="cell"id="95"/><td className="cell"id="96"/><td className="cell"id="97"/><td className="cell"id="98"/><td className="cell"id="99"/>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
