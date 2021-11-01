let btn = document.querySelectorAll(".content__btn");
let myFync = {
  task1: function () {
    let compare = (a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      if (a == b) return 0;
    };
    const a = +prompt("Enter first number", 0);
    const b = +prompt("Enter second number", 0);
    alert(compare(a, b));
  },
  task2: function () {
    const n = +prompt("Enter a number", 0);
    let factorial = (num) => {
      let s = 1;
      for (let i = 1; i <= num; i++) {
        s *= i;
      }
      return s;
    };
    alert(factorial(n));
  },
  task3: function () {
    const n1 = prompt("Enter first number", 0);
    const n2 = prompt("Enter second number", 0);
    const n3 = prompt("Enter third number", 0);
    function numMerger(n1, n2, n3) {
      num = n1.toString() + n2.toString() + n3.toString();
      return num;
    }
    alert(numMerger(n1, n2, n3));
  },
  task4: function () {
    const a = +prompt("Enter a number", 0);
    const b = +prompt("Enter a number", a);
    let area = (side1, side2 = side1) => side1 * side2;
    alert(area(a, b));
  },
  task5: function () {
    const n = +prompt("Enter a number", 0);
    let perfect = (num) => {
      let s = 0;
      for (let i = 0; i <= num; i++) {
        if (num % i == 0) {
          s += i;
        }
      }
      if (num == s) return alert("This number is perfect");
      else return alert("This number is not perfect");
    };
    perfect(n);
  },
  task6: function () {
    const start = +prompt("Enter start of range", 0);
    const end = +prompt("Enter end of range", 100);
    let perfectInRange = (a, b) => {
      for (let i = a; i <= b; i++) {
        let s = 0;
        for (let j = 0; j < i; j++) {
          if (i % j == 0) {
            s += j;
          }
        }
        if (i == s) {
          console.log(i);
        }
      }
    };
    perfectInRange(start, end);
  },
  task7: function () {
    let time = (h) => {
      function zero(n) {
        return n > 9 ? n : "0" + n;
      }
      return (m = 0) => {
        return (s = 0) => `${zero(h)}:${zero(m)}:${zero(s)}`;
      };
    };
    console.log(time(9)()());
    console.log(time(10)()());
  },
  task8: function () {
    let time = (h) => {
      function multiply60(n) {
        return n * 60;
      }
      return (m = 0) => {
        return (s = 0) => `${+multiply60(multiply60(h)) + +multiply60(m) + s}`;
      };
    };
    console.log(time(9)(18)());
    console.log(time(10)()());
  },
  task9: function () {
    const seconds = prompt('Enter count of seconds', 32400);
    let time = (n) => {
      let hoursFloat = n / 3600;
      console.log(hoursFloat);
      let hours = Math.floor(hoursFloat);
      console.log(hours);
      let minutes = Math.floor((hoursFloat - hours) * 60);
      console.log(minutes);
      let seconds = n - (minutes * 60 + hours * 3600);
      function zero(num) {
        return num > 9 ? num : "0" + num;
      }
      return `${zero(hours)}:${zero(minutes)}:${zero(seconds)}`;
    };
    console.log(time(seconds));
  },
  task10: function () {
    let dateDiff = (h, m = 0, s = 0, h1, m1 = 0, s1 = 0) => {
      if (h == 0) {
        h = 24;
      }
      let seconds = h * 60 * 60 + m * 60 + s;
      let seconds1 = h1 * 60 * 60 + m1 * 60 + s1;
      let secDiff = Math.abs(seconds1 - seconds);
      function time(n) {
        let hoursFloat = n / 3600;
        let hours = Math.floor(hoursFloat);
        let minutes = Math.floor((hoursFloat - hours) * 60);
        let seconds = n - (minutes * 60 + hours * 3600);
        function zero(num) {
          return num > 9 ? num : "0" + num;
        }
        return `${zero(hours)}:${zero(minutes)}:${zero(seconds)}`;
      }
      return time(secDiff);
    };
    console.log(dateDiff(0, 10, 0, 10, 0, 0));
  },
};

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", (element) => {
    let idTask = "task" + element.target.getAttribute("data-task-id");
    myFync[idTask]();
  });
}
