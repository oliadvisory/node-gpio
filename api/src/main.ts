// var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
// var LED = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output
// var blinkInterval = setInterval(blinkLED, 250); //run the blinkLED function every 250ms

// function blinkLED() { //function to start blinking
//   if (LED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
//     LED.writeSync(1); //set pin state to 1 (turn LED on)
//   } else {
//     LED.writeSync(0); //set pin state to 0 (turn LED off)
//   }
// }

// function endBlink() { //function to stop blinking
//   clearInterval(blinkInterval); // Stop blink intervals
//   LED.writeSync(0); // Turn LED off
//   LED.unexport(); // Unexport GPIO to free resources
// }

// setTimeout(endBlink, 5000); //stop blinking after 5 seconds

// const Gpio = require("onoff").Gpio;

import * as onoff from "onoff"
const Gpio = onoff.Gpio

const led = new Gpio(17, "out");
const button = new Gpio(4, "in", "both");

button.watch((err, value) => {
  console.log("button pressed");
  led.writeSync(value);
});

// class Main {
//   constructor() {
//     this.start();
//   }

//   async start() {
//     let count = 0;
//     console.log("running node process...");
//     // setInterval(() => {
//     //   if (count === 3) {
//     //     console.log(count);
//     //     console.log("killing node process...");
//     //     process.kill(0);
//     //   }
//     //   console.log(count);
//     //   count++;
//     // }, 1000);
//   }
// }

// new Main();
