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
  }
};

//Spread Operator(array,string) not on object
const arr=[1,2,3];
const narr=[arr[0],arr[1],arr[2],4,5,6];
console.log(narr);

const sarr=[...arr,4,5,6];//Spread used
console.log(sarr);

console.log(...sarr);//to write seperate number

//add new value to array
const newMenu=[...restaurant.mainMenu,'rice'];
console.log(newMenu);

//copy array
const mainMenuCopy=[...restaurant.mainMenu];
console.log(mainMenuCopy);

//join 2 or more array
const menu=[...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//eg
const ingredients=[prompt('ing1'),prompt('ing2'),prompt('ing3')];
console.log(ingredients);
restaurant.oredrPasta(...ingredients);

//object
const newRestaurant={...restaurant,founder:'mohan'};
console.log(newRestaurant);

//copy an object values
const restaurantCopy={...restaurant};
restaurantCopy.name='babu';
console.log(restaurantCopy.name,restaurant.name);