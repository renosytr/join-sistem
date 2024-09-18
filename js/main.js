// Type Data 

// String
let item = "skin care";
var itemSecond = "skin care";
const itemThird = "skin care";
const itemfourth = itemThird + " " + itemSecond;
console.log("itemfourth:", itemfourth);

console.log("item pertama:", item);
console.log("item pertama tipe:", typeof item);

let tipeItemPertama = typeof item;
console.log("tipe item pertama:", tipeItemPertama);

item = "makeup";

// Number
item = 5;
itemSecond = ++item;
let itemFirth = ++itemSecond;
let itemSixth = --itemFirth;
let itemSeventh = 5;
itemSeventh = itemSeventh + 1;
itemSeventh += 1;
let itemEight = itemSeventh / 2;
let itemNinth = itemSeventh % 2;
console.log("itemSeventh:", itemSeventh);
console.log("itemEight:", itemEight);
console.log("item kedua tipe:", typeof item);

// Boolean
let isToggle = true;
let isNotToggle = false;
console.log("isToggle:", isToggle);
console.log("isNotToggle:", isNotToggle);
console.log("isToggle tipe:", typeof isToggle);

// Object
const itemObject = {
  name: "skin care",
  type: "skin care",
  isContainAlcohol: false,
  price: 100000,
  description: {
    label: "SPF 500++",
    secondaryLabel: "Real Protection",
  },
  discount: {
    value: 50,
    type: "percent",
  }
};

console.log("itemObject 1:", itemObject)

itemObject.tab = "tab"
console.log("itemObject 2:", itemObject)

console.log("itemObject tipe:", typeof itemObject)
console.log("itemObject name:", itemObject.name)
console.log("itemObject name:", itemObject["name"])

// Array

let itemArray = ["skin care", "makeup", "cream", "SPF 500++", 50, 100000, false]
let itemArraySecond = ["skin care", "lotion", "white spot", "SPF 500++", 50, 100000, false]
console.log("itemArray:", itemArray)
console.log(itemArray[0])
console.log(itemArray[1])

let checkValue = itemObject.price != 200000
console.log("checkValue:", checkValue)

const staticString = "yours"
const dynamicString = "Your static string is " + staticString
console.log("dynamicString:", dynamicString)

// Penerapan Operan ++, --, +=, -=, *=, /=, %=
let lengthItems = 0

itemArray.forEach((item) => {
  console.log("for each item:", item)
  console.log("lengthItems:", lengthItems)
  console.log("itemArraySecond:", itemArraySecond[lengthItems])
  lengthItems++
});

let stringVarible = "skin care";