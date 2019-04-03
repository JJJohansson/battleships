import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: [],
      positions: ["00","01","02","03","04"],
      hits: 0,
      misses: 0,
      ships: {
        "carrier": {
          "size":5,
          "location":["00","01","02","03","04"]
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
    const elements = document.querySelectorAll("tr");
    const rows = [];
    for (let i = 1; i < elements.length; i++) rows.push(elements[i]);
    const cells = [];
    for (let i = 0; i < rows.length; i++) {
      for (let j = 1; j < rows[i].children.length; j++) cells.push(rows[i].children[j]);
    }
    this.setState({ cells }, () => this.addListeners());
  }

  addListeners = () => {
    const cells = this.state.cells;
    const positions = this.state.positions;
    console.log(cells);
    console.log(positions);

    cells.forEach(function(elem) {
      elem.addEventListener("click", () => {
        console.log(elem.id)
        const found = positions.filter(position => position == elem.id);
        if (found.length !== 0) {
          elem.style.backgroundColor = "red";
          this.setState({ hits: this.state.hits + 1 });
        } else {
          elem.style.backgroundColor = "gray";
          this.setState({ misses: this.state.misses + 1 });
        }
      });
    }, this);
  }


  render() {
    return (
      <div className="App">
        <div className="game-header"><h1>Battleships</h1></div>
        <div className="game-score"><div className="game-score-hits"><h3>Hits: {this.state.hits}</h3></div><div className="game-score-misses"><h3>Misses: {this.state.misses}</h3></div></div>
        <div className="game-board">
        {this.state.misses === 10 ? <h1 className="game-announcement">YOU LOST</h1> : null}
        {this.state.hits === 5 ? <h1 className="game-announcement">YOU WON!!</h1> : null}
          <table>
            <tbody>
              <tr>
                <td /><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td>
              </tr>
              <tr>
                <td>1</td><td id="00"/><td id="01"/><td id="02"/><td id="03"/><td id="04"/><td id="05"/><td id="06"/><td id="07"/><td id="08"/><td id="09"/>
              </tr>
              <tr>
                <td>2</td><td id="10"/><td id="11"/><td id="12"/><td id="13"/><td id="14"/><td id="15"/><td id="16"/><td id="17"/><td id="18"/><td id="19"/>
              </tr>
              <tr>
                <td>3</td><td id="20"/><td id="21"/><td id="22"/><td id="23"/><td id="24"/><td id="25"/><td id="26"/><td id="27"/><td id="28"/><td id="29"/>
              </tr>
              <tr>
                <td>4</td><td id="30"/><td id="31"/><td id="32"/><td id="33"/><td id="34"/><td id="35"/><td id="36"/><td id="37"/><td id="38"/><td id="39"/>
              </tr>
              <tr>
                <td>5</td><td id="40"/><td id="41"/><td id="42"/><td id="43"/><td id="44"/><td id="45"/><td id="46"/><td id="47"/><td id="48"/><td id="49"/>
              </tr>
              <tr>
                <td>6</td><td id="50"/><td id="51"/><td id="52"/><td id="53"/><td id="54"/><td id="55"/><td id="56"/><td id="57"/><td id="58"/><td id="59"/>
              </tr>
              <tr>
                <td>7</td><td id="60"/><td id="61"/><td id="62"/><td id="63"/><td id="64"/><td id="65"/><td id="66"/><td id="67"/><td id="68"/><td id="69"/>
              </tr>
              <tr>
                <td>8</td><td id="70"/><td id="71"/><td id="72"/><td id="73"/><td id="74"/><td id="75"/><td id="76"/><td id="77"/><td id="78"/><td id="79"/>
              </tr>
              <tr>
                <td>9</td><td id="80"/><td id="81"/><td id="82"/><td id="83"/><td id="84"/><td id="85"/><td id="86"/><td id="87"/><td id="88"/><td id="89"/>
              </tr>
              <tr>
                <td>10</td><td id="90"/><td id="91"/><td id="92"/><td id="93"/><td id="94"/><td id="95"/><td id="96"/><td id="97"/><td id="98"/><td id="99"/>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
