/*
Создать массив, описывающий чек в магазине. 
Каждый элемент массива состоит из названия 
товара, количества и цены за единицу товара. 
Написать следующие функции:
    Распечатка чека на экран;
    Подсчет общей суммы покупки;
    Получение самой дорогой покупки в чеке;
    Подсчет средней стоимости одного товара в чеке.
*/
let list = [
  { name: "Apple", count: 5, price: 9.99 },
  { name: "Orange", count: 3, price: 5.99 },
  { name: "Coconut", count: 2, price: 15.99 },
  { name: "Meat", count: 1, price: 10.0 }
];

let res = list.slice();

let print = () => {
  for (let i in res) {
    let p = document.createElement("p");
    p.className = res[i].name;
    p.innerHTML = `<strong>Receipt position #${+i + +1}:</strong> 
    Product name: ${res[i].name} | 
    Quantity of product: ${res[i].count} | 
    Price: ${res[i].price};`;
    document.getElementById("receipt").append(p);
  }
};

let calc = () => {
  let s = 0;
  for (let i in res) {
    s += +res[i].price;
  }
  let p = document.createElement("p");
  p.className = "Total";
  p.innerHTML = `<strong>The total amount:</strong> ${s}`;
  document.getElementById("receipt").append(p);
};

let maxPrice = () => {
  let max = 0;
  for (let i in res) {
    if (max < res[i].price) {
      max = res[i].price;
    }
  }
  for (let i in res) {
    if (max == res[i].price) {
      let p = document.createElement("p");
      p.className = res[i].name;
      p.innerHTML = `<strong>The higest price is for:</strong> 
        
      Product name: ${res[i].name} | 
      Quantity of product: ${res[i].count} | 
      Price: ${res[i].price};`;
      document.getElementById("receipt").append(p);
    }
  }
};

let avaragePrice = () => {
  let s = 0;
  let av = 1;
  for (let i in res) {
    s += res[i].price;
  }
  av = s / res.length;
  p = document.createElement("p");
  p.className = "Average";
  p.innerHTML = `<strong>The average price is:</strong> ${av.toFixed(2)}`;
  document.getElementById("receipt").append(p);
};

print();
maxPrice();
calc();
avaragePrice();