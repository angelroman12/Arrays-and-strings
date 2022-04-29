"use strict";

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const stevent = Object.create(PersonProto);

stevent.init("Steven", 1999);
stevent.calcAge();

// ========= constr Funct ===============
const NewCar = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
NewCar.prototype.accelerate = function () {
  console.log(` ${this.make} goes with ${(this.speed += 10)} `);
};

NewCar.prototype.brake = function () {
  console.log(` ${this.make} goes with ${(this.speed -= 10)} `);
};

const EV = function (make, speed, charge) {
  NewCar.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(NewCar.prototype);

EV.prototype.chargeBatery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  console.log(
    `${
      this.make
    } goes with ${(this.speed += 10)} and batery decrease with ${(this.charge -= 1)}%`
  );
};

const tesla = new EV("tesla", 120, 23);
tesla.accelerate();
tesla.accelerate();
tesla.chargeBatery(90);
console.log(tesla);

// ========= Classs ===============

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log(` ${this.make} goes with ${(this.speed += 10)} `);
  }
  brake() {
    console.log(` ${this.make} goes with ${(this.speed -= 10)} `);
  }

  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl("FOrd", 120);
// console.log(ford.speedUs);
// ford.accelerate();
ford.speedUs = 50;
// console.log(ford);

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(` ${2037 - this.birthYear}`);
};

const Student = function (firstName, birthYear, courses) {
  Person.call(this, firstName, birthYear);
  this.courses = courses;
};

Student.prototype = Object.create(Person.prototype);

const ion = new Person("IOn", 2000);
// ion.calcAge();
const miki = new Student("MIki", 1999, "geology");
// miki.calcAge();1
Student.prototype.introduce = function () {
  console.log(`I'm ${this.firstName} and im study ${this.courses}`);
};

// miki.introduce();

class Account {
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    this.locale = navigator.language;
  }

  deposit(val) {
    this.#movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  _approvedLoan() {
    return true;
  }

  requestLoan(val) {
    if (this._approvedLoan) {
      this.deposit(val);
      console.log(`Loan approved: ${val}`);
    }
  }
}

const angel = new Account("Angel", "RON", 1111);
angel.deposit(240);
angel.deposit(890);
angel.withdraw(300);
angel.requestLoan(500);
