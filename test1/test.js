function getRandomNumber() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Math.floor(Math.random() * Math.floor(100)));
      }, 3000);
    });
  }
  async function firstPromise() {
    console.log("do this first")
    const result = await getRandomNumber();
    console.log(result);
  }
  firstPromise();

