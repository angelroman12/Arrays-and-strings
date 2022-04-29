"use strict";

const restaurant = {
  name: "Classico",
  location: "Tavanti 13, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focacia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["pizza", "pasta", "rissoto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterMenu, starterIndex, time, adress }) {
    console.log(starterIndex, starterMenu, time, adress);
  },
};

restaurant.orderDelivery({
  time: 22,
  adress: "asd",
  mainIndex: 2,
  starterIndex: 2,
});
// des obj

const { name, categories } = restaurant;
const { name: restaurantName, categories: tags } = restaurant;

const { menu = [], starterMenu: starters = [] } = restaurant;
let as = 222;
let bs = 434;

//  Nested
const {
  openingHours: {
    fri: { open: o, close: c },
    sat,
    thu,
  },
} = restaurant;
// console.log(o, c, sat, thu);

// Mutating var
const obj1 = { as: 1, bs: 3, cs: 66 };
({ as, bs } = obj1);
// console.log(as, bs);

//  des arr
let [first, , second] = restaurant.categories;
[second, first] = [first, second];

const [starter, main] = restaurant.order(2, 0);

const nested = [22, 4, [1, 5, 5, 2, 1]];

const [primul, , arra] = nested;
const [a, b, ...other] = arra;
