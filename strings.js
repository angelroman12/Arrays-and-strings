"use strict";
console.log("--------------- Part 1 --------------------");
const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(airline.length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal")); // Merge pe ficare litara, nu pe cuvant

console.log(airline.slice(4)); // incepe sa extraga din string de la indexul 4 pana la final
const sliced = airline.slice(4, 7); // extrage de la indexul 4 pana la 7 care nu este inclus in string
console.log(sliced);

const firstWord = airline.slice(0, airline.indexOf(" ")); // Primul Cuvant
const lastWord = airline.slice(airline.lastIndexOf(" ") + 1);
console.log(lastWord);

const checkMiddle = function (seat) {
  if (seat.slice(-1) === "B" || seat.slice(-1) === "E") {
    console.log("Middle seat ");
  } else {
    console.log("Good Seat");
  }
};

checkMiddle("11B");
checkMiddle("11A");
checkMiddle("11E");

console.log("--------------- Part 2 --------------------");

const passenger = "ioNeL";
const passengerLower = passenger.toLowerCase();
const passCorect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passCorect);

const fixName = function (nume) {
  const lowerNume = nume.toLowerCase();
  const corectNume = lowerNume[0].toUpperCase() + lowerNume.slice(1);
  return corectNume;
};

console.log(fixName("vaSILE"));

const email = "  iONEl@gmail.com   \n";
const correctEmail = email.toLowerCase().trim();
console.log(correctEmail);

const checkEmail = function (badEmail) {
  const fixEmail = badEmail.toLowerCase().trim();
  return fixEmail;
};

// Replacing

const priceGB = "222,22£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const anunt = "All pass come to boarding door 23. Boarding door 23!";

console.log(anunt.replace(/door/g, "gate"));

//Boolean
const planeNew = "A320neo";
console.log(planeNew.includes("A32"));
console.log(planeNew.includes("BOO"));

console.log(planeNew.startsWith("A32"));
console.log(planeNew.startsWith("B"));

if (planeNew.startsWith("A32") && planeNew.endsWith("neo")) {
  console.log("Airbus ");
} else {
  console.log("altceva");
}

console.log("================ Part 3 ==================");

console.log("a+very+nice+string".split("+"));
console.log("Angel Roman".split(" "));
const [firstName, lastName] = "Angel Roman".split(" ");
console.log(["Mr", firstName, lastName.toUpperCase()].join(" "));

const capitalizeName = function (name) {
  const arrayName = name.split(" ");
  const upperName = [];
  for (const n of arrayName) {
    upperName.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(upperName.join(" "));
};

capitalizeName("vasile ion asd");
capitalizeName("ionel andrei");
