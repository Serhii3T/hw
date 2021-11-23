let shoppingList = [
  {
    name: "Apple",
    amount: 5,
    bought: 'куплено',
    price: 2,
    sum: 10,
  },
  {
    name: "Bread",
    amount: 1,
    bought: 'куплено',
    price: 15,
    sum: 15,
  },
  {
    name: "Steak",
    amount: 1,
    bought: 'куплено',
    price: 115,
    sum: 115,
  },
  {
    name: "Spaggeti",
    amount: 2,
    bought: 'куплено',
    price: 30,
    sum: 60,
  },
  {
    name: "Beer",
    amount: 6,
    bought: 'не куплено',
    price: 25,
    sum: 150,
  },
  {
    name: "Egg",
    amount: 4,
    bought: 'куплено',
    price: 35,
    sum: 140,
  },
  {
    name: "Whiskey",
    amount: 2,
    bought: 'не куплено',
    price: 350,
    sum: 700,
  },
];

function byField(field) {
  return (a, b) => a[field] > b[field] ? -1 : 1;
}

shoppingList.sort(byField('bought'));

let out_arr = document.getElementById('homework__out');
let str = ' ';
for (let i = 0; i < shoppingList.length; i++  ) {
  if (shoppingList[i]!==undefined) str +=i+' - '+shoppingList[i].name+" "+shoppingList[i].amount+"x"+shoppingList[i].price+"="+shoppingList[i].sum+" "+shoppingList[i].bought+'<br>';
};
out_arr.innerHTML = str;