let btn = document.querySelectorAll(".content__btn");
let myFync = {
  task1: function () {
    let min = +prompt("Введите минимальное число");
    let max = +prompt("Введите максимальное число");
    let sum = 0;
    while (min <= max) {
      sum = sum + min;
      min++;
    }
    alert(sum);
  },
  task2: function () {
    alert("Введите 2 число, что бы найти НОД");
    let numb1 = prompt("Введите первое число");
    let numb2 = prompt("Введите второе число");
    let numb3;

    calc(numb1, numb2);
    alert("НОД чисел " + numb1 + " и " + numb2 + " будет: " + numb3);

    function calc(a, b) {
      let c;
      while (a != b) {
        if (a > b) {
          a = a - b;
        } else if (a < b) {
          c = a;
          a = b;
          b = c;
        }
      }
      return (numb3 = a);
    }
  },
  task3: function () {
    let form = document.forms.form;
    form.btn.addEventListener("click", () => {
      form.out.value = dividers(+form.num.value).join("\n");
      function dividers(n) {
        let array = [1];
        for (let i = 2, limit = n >> 1; i <= limit; ++i) {
          if (!(n % i)) array.push(i);
        }
        if (n !== 1) array.push(n);
        return array;
      }
    });
  },
  task4: function () {
    const num = prompt("Enter a number", 0);
    if (isNaN(num)) {
      alert("Error");
    } else {
      const num1 = num.length;
      alert(`num has a ${num1} digits`);
    }
  },
  task5: function () {
    let count = 0;
    let arr = new Array();
    for (let i = 0; i <= 10; i++) {
      arr.push(prompt("Enter a number", 0));
      if (arr[i] >= 0) {
        count++;
      }
      if (isNaN(arr[i])) {
        alert("Error");
        break;
      }
    }
    alert(`You have entered ${count} numbers that is positive`);
  },
  task6: function () {
    while (true) {
      const newLocal = prompt(
        'Do you want to continue: "1 - yes", "anything else - no"',
        0
      );
      if (newLocal == 1) {
        let op = prompt("Enter operation + - / % *", "+");
        let num = +prompt("Enter first number", 0);
        let num1 = +prompt("Enter second number", 0);
        let res = 0;
        if (isNaN(num) || isNaN(num1)) {
          alert("Error");
        } else {
          switch (op) {
            case "+":
              res = num + num1;
              break;
            case "-":
              res = num - num1;
              break;
            case "/":
              res = num / num1;
              break;
            case "%":
              res = num % num1;
              break;
            case "*":
              res = num * num1;
              break;
            default:
              alert("Error");
          }
        }
        alert(`${num}${op}${num1} = ${res}`);
      } else if (newLocal != 1) {
        break;
      }
    }
  },
  task7: function () {
    const num = prompt("Enter a number", 0);
    const sliceNum = prompt("Enter a shift number", 0);
    if (isNaN(num) || isNaN(sliceNum)) {
      alert("Error");
    } else {
      alert(`Result number is ${num.slice(sliceNum) + num.slice(0, sliceNum)}`);
    }
  },
  task8: function () {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    let currDay = 0;
    while (confirm(`${days[currDay]}. Do you want to see the next day?`)) {
      currDay = (currDay + 1) % days.length;
    }
  },
  task9: function () {
    for (let i = 1; i < 10; i++) {
      document.write(
        '<div style="float: left; width: 100px; margin-bottom: 10px">'
      );
      for (let j = 1; j < 10; j++) {
        document.write(i + "*" + j + "=" + i * j + "<br>");
      }
      document.write("</div>");
    }
    
    // 2nd variant
    // let cd = '<table cellpadding="6" cellspacing="3" border="1">\n';
    // cd += "<tr>\n";
    // for (let i = 1; i <= 9; i++)
    //   cd +=
    //     '<td align="right"><font color="red">&nbsp;' +
    //     (i == 1 ? "" : i) +
    //     "</font></td>\n";
    // for (i = 1; i <= 10; i++) {
    //   cd += "<tr>\n";
    //   for (let j = 1; j <= 9; j++)
    //     cd +=
    //       '<td align="right">' +
    //       (j == 1 ? '<font color="red">&nbsp;' + i + "</font>" : i * j) +
    //       "</td>\n";
    //   cd += "</tr>\n";
    // }
    // cd += "</table>";
    // with (document) open(), write(cd), close();
  },
  task10: function () {
    const n = 0;
    const m = 100;
    let start = n;
    let end = m;
    while (true) {
      let num = Math.floor((start + end) / 2);
      let answr = prompt(
        num + " Is it your number ? - y (yes), - b (biger), -  l (lower)"
      );
      if (answr == "y") {
        alert("I guess, cool!!!");
        break;
      }
      if (answr == "l") {
        end = num - 1;
      }
      if (answr == "b") {
        start = num + 1;
      }
    }
  },
};

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", (element) => {
    let idTask = "task" + element.target.getAttribute("data-task-id");
    myFync[idTask]();
  });
}
