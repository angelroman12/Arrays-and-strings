const firstObject = {
  nume: "First Object",
  nr: 1,
  sayName: function () {
    console.log(`${this.nume} in prima functie`);
    const secondFunc = () => {
      console.log(`${this.nume} in second func cu arrow`);
    };
    secondFunc();
    const self = this;
    function third() {
      console.log(`${self.nume} in a treia functie`);
    }
    third();
  },
  sayName2() {
    console.log(`${this.nume} `);
  },
};

firstObject.sayName();
firstObject.sayName2();
