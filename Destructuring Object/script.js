'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
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
};

//Object passed not all argument
restaurant.orderDelivery({
  time:'10pm',
  mainIndex:2,
  starterIndex:2,
});

//after declared default value if attribute not there
restaurant.orderDelivery({
  starterIndex:2,
});

// Destructuring Object
const { name='mohan', openingHours, categories}=restaurant;
console.log(name, openingHours,categories);

// Creating New Variable Names
const { name:rname='mohan', openingHours:hours, categories:tags}=restaurant;
console.log(rname, hours,tags);

//Default Values set
const {menu=[],starterMenu:starters=[]}=restaurant;
console.log(menu,starters);

//Mutating Variables
let a=1,b=2;
const obj={a:3,b:4};
({a,b}=obj);
console.log(a,b);

// Nested Object
const {fri}=openingHours;
console.log(fri);

const {fri:{open, close}}=openingHours;
console.log(open,close);

const {fri:{open:o, close:c}}=openingHours;
console.log(o,c);