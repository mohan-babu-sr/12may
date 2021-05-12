'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'mb',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order:function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },

  orderDelivery:function({time='11pm',mainIndex=1,starterIndex}){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} deliverd at time of ${time}`);
  },

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
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  oredrPasta:function(ing1,ing2,ing3){
    console.log(`pasta with ing1-${ing1},ing2-${ing2} and ing3-${ing3}`);
  },

  orderPizza:function(maining,...othering){
    console.log(maining,othering);
  }
};

//Short Circuting- if first value is true it return the value
console.log('---OR---');
console.log(3||'mohan');
console.log(''||'mohan');
console.log(true||'mohan');
console.log(undefined||null);
console.log(undefined||0||''||3||'mohan'||null);

// restaurant.numGuest=20;
const guest=restaurant.numGuest?restaurant.numGuest:10;
console.log(guest);

const guest2=restaurant.numGuest||10;
console.log(guest2);

console.log('---AND---');
console.log(0&&'mohan');//return false value
console.log(10&&'mohan');//return last true value
console.log('mohan'&&20&&null&&'babu');//it returns the false value

//eg
if(restaurant.orderPizza){
  restaurant.orderPizza('mushrooms','spinach');
}

restaurant.orderPizza&&restaurant.orderPizza('mushrooms','spinach');

//Nullish : null and undefined
console.log('---Nullish---')
restaurant.numGuest=0;
const guest3=restaurant.numGuest?restaurant.numGuest:10;
console.log(guest3);

const guest4=restaurant.numGuest??10;
console.log(guest4);