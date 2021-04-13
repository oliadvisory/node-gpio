class Main {
  constructor() {
    this.start();
  }

  async start() {
    let count = 0;
    console.log("running node process...");
    setInterval(() => {
      if (count === 3) {
        console.log(count);
        console.log("killing node process...");
        process.kill(0);
      }
      console.log(count);
      count++;
    }, 1000);
  }
}

new Main();
