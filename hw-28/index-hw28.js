/*Создать объект, описывающий автомобиль 
(производитель, модель, год выпуска, средняя скорость), 
и следующие функции для работы с этим объектом:
Функция для вывода на экран информации об автомобиле;
Функция для подсчета необходимого времени для преодоления 
переданного расстояния со средней скоростью. 
Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.*/

let car = {
  developer: "Ford",
  model: "Ford Mustang",
  manYear: 2019,
  avarageSpeed: 60,
  info() {
    let arr = [];
    for (let i in car) {
      arr.push(i);
      arr.push(car[i]);
    }
    return arr.join("<br>");
  },
  journey(s = 0) {
    let time;
    time = s / this.avarageSpeed;
    let rest = Math.floor(time / 4);
    time = time + rest;
    return time;
  },
  pretifyJourney(time) {
    let h = Math.floor(time);
    let m = Math.floor((time - h) * 60);
    let s = Math.floor(((time - h) * 60 - Math.floor((time - h) * 60)) * 60);
    return `${h > 9 ? h : "0" + h}
    :${m > 9 ? m : "0" + m}
    :${s > 9 ? s : "0" + s}`;
  },
};
car.info();
document.getElementById(
  "carInfo"
).innerHTML = `<p>You have chosen the next car: ${car.info()}</p>`;
car.pretifyJourney(car.journey(500));

document.getElementById(
  "carJourney"
).innerHTML = `<p>You journey time in this car is: ${car.pretifyJourney(
  car.journey(500)
)}</p>`;

/*Создать объект, хранящий в себе 
отдельно числитель и знаменатель дроби, 
и следующие функции для работы с этим объектом: 
Функция сложения 2-х объектов-дробей;
Функция вычитания 2-х объектов-дробей;
Функция умножения 2-х объектов-дробей;
Функция деления 2-х объектов-дробей;
Функция сокращения объекта-дроби.*/

// let fraction = {
//   numerator: 1,
//   denominator: 2
// };

// let frac1 = {};
// let frac2 = {};
// let res = {};
// for (let key in fraction) {
//   frac1[key] = fraction[key];
//   frac2[key] = fraction[key];
//   res[key] = fraction[key];
// }

// frac1.numerator = +prompt("Enter a first numerator", 0);
// frac1.denominator = +prompt("Enter a first denumerator", 0);

// frac2.numerator = +prompt("Enter a second numerator", 0);
// frac2.denominator = +prompt("Enter a second denumerator", 0);
// console.log(frac1.numerator);
// console.log(frac1.denominator);
// console.log(frac2.numerator);
// console.log(frac2.denominator);

// let addFractions = (frac1, frac2) => {
//   let temp1 = 0;
//   let temp2 = 0;
//   res.denominator = frac1.denominator;
//   res.denominator = frac1.denominator * frac2.denominator;
//   temp1 = frac1.numerator * frac2.denominator;
//   temp2 = frac2.numerator * frac1.denominator;
//   res.numerator = temp1 + temp2;
//   return `${res.numerator} / ${res.denominator}`;
// };

// let minusFractions = (frac1, frac2) => {
//   let temp1 = 0;
//   let temp2 = 0;
//   res.denominator = frac1.denominator;
//   res.denominator = frac1.denominator * frac2.denominator;
//   temp1 = frac1.numerator * frac2.denominator;
//   temp2 = frac2.numerator * frac1.denominator;
//   res.numerator = temp1 - temp2;
//   return `${res.numerator} / ${res.denominator}`;
// };

// let multiplyFractions = (frac1, frac2) => {
//   res.denominator = frac1.denominator * frac2.denominator;
//   res.numerator = frac1.numerator * frac2.numerator;
//   return `${res.numerator} / ${res.denominator}`;
// };
// let divFractions = (frac1, frac2) => {
//   res.denominator = frac1.denominator * frac2.numerator;
//   res.numerator = frac1.numerator * frac2.denominator;
//   return `${res.numerator} / ${res.denominator}`;
// };
// let reductionFraction = res => {
//   let resNum;
//   let resDen;
//   for (let i = Math.max(res.denominator, res.numerator); i > 1; i--) {
//     if (res.denominator % i == 0 && res.numerator % i == 0) {
//       resNum = res.numerator / i;
//       resDen = res.denominator / i;
//     }
//   }
//   return `${resNum} / ${resDen}`;
// };

// console.log(addFractions(frac1, frac2));
// document.getElementById("addFracs").innerHTML = `<p>${frac1.numerator}/${
//   frac1.denominator
// } + ${frac2.numerator}/${frac2.denominator} = ${addFractions(
//   frac1,
//   frac2
// )}</p>`;
// console.log(minusFractions(frac1, frac2));
// document.getElementById("minusFracs").innerHTML = `<p>
// ${frac1.numerator}/${frac1.denominator} - ${frac2.numerator}/${
//   frac2.denominator
// } =
// ${minusFractions(frac1, frac2)}</p>`;
// console.log(multiplyFractions(frac1, frac2));
// document.getElementById("multiplyFracs").innerHTML = `<p>
// ${frac1.numerator}/${frac1.denominator} * ${frac2.numerator}/${
//   frac2.denominator
// } =
// ${multiplyFractions(frac1, frac2)}</p>`;
// console.log(divFractions(frac1, frac2));
// document.getElementById("divideFracs").innerHTML = `<p>
// ${frac1.numerator}/${frac1.denominator} / ${frac2.numerator}/${
//   frac2.denominator
// } =
// ${divFractions(frac1, frac2)}</p>`;
// console.log(reductionFraction(res));
// document.getElementById("reductionFracs").innerHTML = `<p>
// ${res.numerator}/${res.denominator} =
// ${reductionFraction(res)}</p>`;

/* Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 
Функция вывода времени на экран;
Функция изменения времени на переданное количество секунд;
Функция изменения времени на переданное количество минут;
Функция изменения времени на переданное количество часов. 
Учтите, что в последних 3-х функциях, при изменении одной 
части времени, может измениться и другая. Например, если 
ко времени «20:30:45» добавить 30 секунд, то должно 
получиться «20:31:15», а не «20:30:75».*/

// let time = {
//   hours: 1,
//   minutes: 1,
//   seconds: 1,
//   days: 0,

//   show() {
//     alert(`${this.days}:${this.hours}:${this.minutes}:${this.seconds}`);
//   },

//   changeSeconds(sec) {
//     let h = sec / 3600;
//     this.hours += Math.floor(h);
//     let m = (sec - Math.floor(h) * 3600) / 60;
//     this.minutes += Math.floor(m);
//     this.seconds += sec - Math.floor(h) * 3600 - Math.floor(m) * 60;

//     let d = 0;
//     if (this.seconds >= 60) {
//       this.seconds %= 60;
//       this.minutes += Math.floor(this.seconds / 60);
//     }
//     if (this.minutes >= 60) {
//       this.minutes %= 60;
//       this.hours += Math.floor(this.minutes / 60);
//     }
//     if (this.hours > 23) {
//       this.hours %= 24;
//       this.days = Math.floor(this.hours / 24);
//     }
//     return time;
//   },

//   changeMinutes(min) {
//     let h = min / 60;
//     this.hours += Math.floor(h);
//     this.minutes += min - Math.floor(h) * 60;
//     if (this.minutes >= 60) {
//       this.minutes %= 60;
//       this.hours += Math.floor(h / 60);
//     }
//     if (this.hours > 23) {
//       this.hours %= 24;
//       this.days = Math.floor(this.hours / 24);
//     }
//     return time;
//   },

//   changeHours(hour) {
//     this.hours = (this.hours + hour) % 24;
//     let d = 0;
//     if (this.hours > 23) {
//       this.days = Math.floor(this.hours / 24);
//     }
//     return time;
//   }
// };

// time.hours = +prompt("Enter hours", 0);
// time.minutes = +prompt("Enter minutes", 0);
// time.seconds = +prompt("Enter seconds", 0);

// time.show();
// console.log(time.changeSeconds(3600));
// time.show();
// console.log(time.changeMinutes(1400));
// time.show();
// console.log(time.changeHours(45));
// time.show();
