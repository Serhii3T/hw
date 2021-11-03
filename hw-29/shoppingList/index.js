/*
 Создать массив «Список покупок». 
 Каждый элемент массива является 
 объектом, который содержит название 
 продукта, необходимое количество и 
 куплен или нет. Написать несколько 
 функций для работы с таким массивом.
Вывод всего списка на экран таким образом, 
чтобы сначала шли некупленные продукты, 
а потом – купленные.
Добавление покупки в список. 
Учтите, что при добавлении покупки 
с уже существующим в списке продуктом, 
необходимо увеличивать количество в 
существующей покупке, а не добавлять новую.
Покупка продукта. Функция принимает 
название продукта и отмечает его как купленный.
*/
let arr = [
  { name: "Apple", count: 3, bought: true },
  { name: "Orange", count: 5, bought: false },
  { name: "Strawberry", count: 7, bought: true },
  { name: "Potato", count: 9, bought: false },
  { name: "Blackberry", count: 5, bought: true },
  { name: "Coconut", count: 3, bought: false },
  { name: "Muesli", count: 5, bought: true },
  { name: "Milk", count: 2, bought: false }
];
console.log(arr);
let res = arr.slice();
let compare = (a, b) => {
  if (a.bought === false && b.bought === true) return -1;
  if (a.bought === true && b.bought === false) return 1;
  return 0;
};

console.log(res.sort(compare));

let addPurchase = (name, count) => {
  let b = {};
  b.name = name;
  b.count = count;
  b.bought = false;
  for (let i in res) {
    let nname = res[i].name;
    if (nname.toLowerCase() == name.toLowerCase()) {
      res[i].count += count;
      res[i].bought = false;
      break;
    } else if (nname.toLowerCase() != name.toLowerCase()) {
      res.unshift(b);
      break;
    }
  }
  return res;
};

addPurchase("meat", 3);

let buyIt = name => {
  let b = {};
  b.name = name;
  b.count = 1;
  b.bought = true;
  for (let i in res) {
    let nname = res[i].name;
    if (nname.toLowerCase() == name.toLowerCase()) {
      res[i].bought = true;
      break;
    } else if (nname.toLowerCase() != name.toLowerCase()) {
      res.unshift(b);
      break;
    }
  }
};
buyIt("Plates");
res.sort(compare);