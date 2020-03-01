import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        pixelData :[],
        windowWidth: 0
    }
  }

  componentDidMount(){
    // document.addEventListener('mouseover', this.handleEvent);
    // document. addEventListener('touchstart', this.handleEvent)
  }

  handleEvent(letter){
    // console.log('f in the chat for fail');
    let response = prompt(letter.x + ' Hi.' + ' I am toby.' + ' What is your name?' + letter.y)
    if(response == 'oliver') {
        prompt('hi ' + response + '. It is me, your dad!')

    } else if(parseInt(response)){
        if(response == '14') {
            prompt('correct, your name is 14')
        } else{
            prompt(response + ' is a color in the alphabet, your name is not ' + response + ' you liar, you do not get to choose your name in this world, your name is 14')

        }
    } if(response == 'grey'){
        prompt('hello sadness')
    } if(response == 'black'){
        prompt('"Hello darkness my old Friend"')
    } if(response == 'yellow'){
        prompt('Hello, Joy!')
    }

    else {
        prompt('Welcome to Suspicous pixel art, ' + response + '!')
    }

}

  render() {
    return (
      <div className="App" onMouseOver={this.handleEvent} onPointerEnter={this.handleEvent}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
  }

export default App;
