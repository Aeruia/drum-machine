import React from 'react';
import './App.css';

export default class App extends React.Component {

  handleClick = (e) => {
    this.playSound(e.target.innerText.toUpperCase());
  }

  handleKeyDown = (e) => {
    this.playSound(e.key.toUpperCase());
  }

  removeTransition(e) {
    if (e.propertyName !== 'transform') {
      e.target.classList.remove('playing');
    }
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    const pads = Array.from(document.querySelectorAll(".drum-pad"));
    pads.forEach(pad => pad.addEventListener('transitionend', this.removeTransition));
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }
  playSound = (char) => {
    const audio = document.getElementById(char);
    if (!audio) {
      return;
    }
    const display = document.getElementById('display');
    display.innerHTML = audio.parentElement.id;
    audio.parentElement.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }
  render() {
    return (
      <div className="App">
        <div id="drum-machine">
          <div id="display" >
          </div>
          <div className="keys">
            {sounds.map((sound, index) => {
              return (
                <div key={index} className="drum-pad" id={sound.id} onClick={this.handleClick} onKeyDown={this.handleKeyDown}>
                  <audio id={sound.keyTrigger} src={sound.url} className="clip" ></audio>
                  {sound.keyTrigger}
                </div>)
            })}
          </div>
        </div>
      </div>);
  };
}

const sounds = [{
  keyTrigger: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
  keyTrigger: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
  keyTrigger: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
  keyTrigger: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
  keyTrigger: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  keyTrigger: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
  keyTrigger: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  keyTrigger: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
  keyTrigger: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];

