import * as onoff from "onoff";
class Main {
  constructor() {
    this.gpioTest();
  }

  gpioTest() {
    const Gpio = onoff.Gpio;

    const led = new Gpio(17, "out");
    const button = new Gpio(4, "in", "both");

    button.watch((err, value) => {
      console.log("button pressed");
      led.writeSync(value);
    });
  }
}

new Main();
