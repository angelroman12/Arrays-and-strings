"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
           
             <div class="movements__value">  ${Math.abs(mov)}</div>
      </div>
        `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes} EUR`;

  const outcomes = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(outcomes)} EUR`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest} EUR`;
};

const createUserName = function (accs) {
  accs.forEach((acc) => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(" ")
      .map((letter) => letter[0])
      .join("");
  });
};
createUserName(accounts);

const updateUI = function (acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

let currentAccount;

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = "100%";
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.userName === inputTransferTo.value
  );
  inputTransferTo.value = inputTransferAmount.value = "";
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.userName
  ) {
    const index = accounts.indexOf(
      (acc) => acc.userName === currentAccount.userName
    );
    accounts.splice(index, 1);
  }
});
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement: ${i + 1}: You deposited ${movement}`);
//   } else console.log(`Movement: ${i + 1}: You withdrew ${Math.abs(movement)}`);
// }
// console.log("============ ====================");
// movements.forEach((movement, i) => {
//   if (movement > 0) {
//     console.log(`Movement: ${i + 1}: You deposited ${movement}`);
//   } else
//     console.log(`Movement: ${i + 1}: You withdrawal ${Math.abs(movement)}`);
// });

// const julia = [3, 5, 2, 12, 7];
// const kate = [4, 1, 15, 8, 3];

// const dogsJulia = julia.slice(1, -2);
// console.log(dogsJulia);

// const checkAge = function (ages) {
//   ages.forEach((age, i) => {
//     if (age <= 3) {
//       console.log(`DOg nr ${i + 1} is a puppy`);
//     } else console.log(`DOg nr ${i + 1} is adult `);
//   });
// };

// console.log(checkAge(dogsJulia));
// console.log(checkAge(kate));

// ====================== MAP =======================
// const convert = movements.map((mov) => {
//   return mov * eurToUsd;
// });

// console.log(convert);

// const res = [];

// for (const mov of movements) {
//   res.push(mov * eurToUsd);
// }
// console.log(res);

// const movMaped = movements.map((mov, i) => {
//     return `Movement: ${i + 1}: You ${
//       mov > 0 ? "deposit" : "withdrew"
//     } ${Math.abs(mov)}`;
//   });

//   console.log(movMaped);

// ===================== Filter ==========================

// const deposits = movements.filter((transaction) => transaction > 0);
// console.log(deposits);

// const depositsFor = [];
// for (const dep of movements) if (dep > 0) depositsFor.push(dep);
// console.log(depositsFor);

// const withdrawals = movements.filter((transaction) => transaction < 0);
// console.log(withdrawals);

//  ========================== REDUCE ==============

// const balance = movements.reduce((acc, cur) => acc + cur, 0);

// console.log(balance);

// const maxNr = movements.reduce((acc, cur) => {
//   if (acc > cur) return acc;
//   else return cur;
// }, movements[0]);

// console.log(maxNr);

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages
//     .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter((adultDog) => adultDog >= 18)
//     .reduce((acc, dog, i, ar) => acc + dog / ar.length, 0);
//   return humanAge;
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

// const eurToUsd = 1.1;

// const totalDepositsUSD = movements
//   .filter((mov) => mov > 0)
//   .map((mov) => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

// ========================== FIND ==========================

// const firstWithdrawal = movements.find((mov) => mov < 0);
// console.log(firstWithdrawal);

// const account = accounts.find((acc) => acc.owner === "Jessica Davis");

// console.log(account);

// const accFInd = [];
// for (const acc of accounts) {
//   if (acc.owner === "Jessica Davis") {
//     accFInd.push(acc);
//   }
// }

// console.log(accFInd);

// function squareConcat(value) {
//   var results = [];

//   // Write your code so that “results” array is populated with all the squared digits.
//   results = [...value].map((val) => val * val);
//   return results.join("");
// }

// function equalChars(str) {
//   var sum = 0;
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] === "x") {
//       // Code here
//       sum = str[i];
//     }
//     // Code here
//   }
// }
// // console.log(equalChars("xoxoxo"));

// function transformToCamelCase(string) {
//   const wordArray = string.split("-");
//   let result = wordArray[0].toLowerCase();
//   for (var i = 1; i < wordArray.length; i++) {
//     result =
//       result +
//       wordArray[i].charAt(0).toUpperCase() +
//       wordArray[i].toLowerCase().slice(1);
//   }
//   return result;

//   //   const wordArray = string.split("-");
//   //   let result = wordArray[0];
//   //   return result;
// }
