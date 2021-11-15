const shoppingList = [
  {
    name: 'Bread',
    price: 1,
  },
  {
    name: 'Steak',
    price: 8,
  },
  {
    name: 'Apples',
    price: 0.8,
  },
  {
    name: 'Lasagna',
    price: 1.4,
  },
  {
    name: 'Beer',
    price: 1.3,
  },
  {
    name: 'Oranges',
    price: 0.9,
  },
  {
    name: 'Whiskey',
    price: 20,
  },
];

let sum = 0;
let midSum = 0;
let theMostExpensiveCost = 0;
let theMostExpensiveName = '';

shoppingList.forEach(function (element) {
  sum += element.price;
  midSum = sum / 3;
  if (element.price > theMostExpensiveCost) {
    theMostExpensiveName = element.name;
  }
});
document.write('<ul style="text-align:center;">');
shoppingList.forEach((goods) => {
  document.write(`<li style="list-style:none;">${goods.name}:  ${goods.price}$
        <br>`);
});
document.write(` <br> Sum = ${parseInt(sum)}`);
document.write(`<br> Average Cost = ${parseInt(midSum)}`);
document.write(`<br>The most expensive = ${theMostExpensiveName}`);