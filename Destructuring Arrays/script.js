'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order:function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
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


//Data Destructuring Arrays
const arr=[2,4,6];
const a=arr[0];
const b=arr[1];
const c=arr[2];
console.log(a,b,c);

const [x,y,z]=arr;
console.log(x,y,z);

let [first,second]=restaurant.categories;
console.log(first,second);

const[a1,,b1]=restaurant.categories;//To skip an element in middle
console.log(a1,b1);

// console.log('swap');
[first,second]=[second,first];//To swap variable using destructuring
console.log(first,second);

//Order item
const [starter,main]=restaurant.order(2,0);
console.log(starter,main);

//Nested Array
const nested=[1,2,[3,4]];
const [i,,[j,k]]=nested;
console.log(i,j,k);

// Default Values
const [m=1,o=1,h=1]=[2,7];
console.log(m,o,h);

/*
// Destructuring Object
const { name, openingHours, categories}=restaurant;
console.log(name, openingHours,categories);

// Creating New Variable Names
const { name:rname, openingHours:hours, categories:tags}=restaurant;
console.log(rname, hours,tags);
*/