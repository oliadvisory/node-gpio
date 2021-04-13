import * as onoff from "onoff";
import * as admin from "firebase-admin";
class Main {
  constructor() {
    this.start();
  }

  async start() {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
      // IMPORTANT: use development database for testing otherwise
      // you accidentally overwrite your production data
      databaseURL: process.env.firebase_database_url,
    });
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
