let btn = document.querySelectorAll(".js-btn");
let myFync = {
  task1: function () {
    let age = +prompt("Enter your age", 0);
    if (!isNaN(age) || age !== null || age !== undefined) {
      if (age < 0) {
        alert(`It's impossible`);
      } else if (age >= 0 && age <= 11) {
        alert(`Your age is ${age} and you are the kid`);
      } else if (age >= 12 && age < 18) {
        alert(`Your age is ${age} and you are the teenager`);
      } else if (age >= 18 && age <= 60) {
        alert(`Your age is ${age} and you are the adult`);
      } else if (age <= 122) {
        alert(`Your age is ${age} and you are the senior citizen`);
      } else {
        alert(`Strange value for age '${age}', You are alien`);
      }
    }
  },
  task2: function () {
    const num = prompt("Enter a number from 0 to 9", 0);
    if (num >= 0 || num <= 9 || !isNaN(num) || num !== null || num !== undefined) {
      switch (num) {
        case "0":
          alert('0 is a ")" symbol');
          break;
        case "1":
          alert('1 is a "!" symbol');
          break;
        case "2":
          alert('2 is a "@" symbol');
          break;
        case "3":
          alert('3 is a "#" symbol');
          break;
        case "4":
          alert('4 is a "$" symbol');
          break;
        case "5":
          alert('5 is a "%" symbol');
          break;
        case "6":
          alert('6 is a "^" symbol');
          break;
        case "7":
          alert('7 is a "&" symbol');
          break;
        case "8":
          alert('8 is a "*" symbol');
          break;
        case "9":
          alert('9 is a "(" symbol');
        default:
          alert("Please enter a number from 0 to 9");
      }
    } else {
      alert("Error");
      console.error("Error typeof value");
    }
  },
  task3: function () {
    let number = prompt("Enter the number from 100 to 999", 0);
    number = number + "";
    if (
      number[0] == number[1] ||
      number[0] == number[2] ||
      number[1] == number[2]
    ) {
      alert("TRUE");
    } else alert("FALSE");
  },
  task4: function () {
    let year = prompt("Enter any year", 0);
    if (year % 4 == 0 && year % 100 !== 0) {
      alert("Leap year");
    } else alert("Not Leap Year");
  },
  task5: function () {
    let number = prompt("Enter the number from 10000 to 99999", 0);
    number = number + "";
    if (number === number.split("").reverse().join("")) alert("palindrome");
    else alert("NOT palindrome");
  },
  task6: function () {
    let amount = prompt("Enter the amount of USD:", 0);
    let currency = prompt("EUR = 1, UAH = 2, AZN = 3", 0);
    switch (currency) {
      case "1":
        alert(amount * 0.86 + " EUR");
        break;
      case "2":
        alert(amount * 26.4 + " UAH");
        break;
      case "3":
        alert(amount * 1.7 + " AZN");
        break;
    }
  },
  task7: function () {
    let amount = prompt("Enter the value of purchase:");
    if (amount >= 1 && amount < 200) {
      alert(amount + " you don't have a discount");
    } else if (amount >= 200 && amount < 300) {
      alert((amount / 100) * 97 + " with 3% discount");
    } else if (amount >= 300 && amount < 500) {
      alert((amount / 100) * 95 + " with 5% discount");
    } else if (amount >= 500) alert((amount / 100) * 93 + " with 7% discount");
  },
  task8: function () {
    const circleLength = +prompt("Enter a length of circle", 0);
    const squareSide = +prompt("Enter a side of a square", 0);
    if (
      isNaN(circleLength) ||
      isNaN(squareSide) ||
      circleLength <= 0 ||
      squareSide <= 0
    ) {
      alert(
        `Please enter a correct values instead of ${circleLength} and ${squareSide}`
      );
      console.error(
        `Please enter a correct values instead of ${circleLength} and ${squareSide}`
      );
    } else {
      const circleRadius = circleLength / (2 * Math.PI);
      if (squareSide >= circleRadius * 2) {
        alert(
          `Square with ${squareSide} side may contain circle with ${circleLength} length`
        );
      } else
        alert(
          `Square with ${squareSide} side may not contain circle with ${circleLength} length`
        );
    }
  },
  task9: function () {
    let capital = prompt(
      "What is the capital of Great Britain? 1 - London 2 - New York 3 - Paris"
    );
    let currency = prompt(
      "What is the currency of the USA? 1 - USD 2 - UAH 3 - RMB"
    );
    let country = prompt(
      "What is the most populated country? 1 - the USA 2 - Japan 3 - China"
    );
    let score = 0;
    if (capital == 1) score += 2;
    if (currency == 1) score += 2;
    if (country == 3) score += 2;
    alert("Your score is " + score);
  },
  task10: function () {
    let date = prompt("Enter the date - day-month-year ");
    date = date.split("-");
    let oldDate = new Date(date[2], date[1] - 1, date[0]);
    oldDate.setDate(oldDate.getDate() + 1);
    alert(oldDate);
  },
};

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", (element) => {
    let idTask = "task" + element.target.getAttribute("data-task-id");
    myFync[idTask]();
  });
}
