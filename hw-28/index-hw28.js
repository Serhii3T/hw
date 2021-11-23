let btn = document.querySelectorAll(".content__btn");
let myFync = {
  task1: function () {
    const car = {
      name: "BMW",
      color: "black",
      age: 16,
      speed: 120,
    };

    let myCar = function () {
      return (
        "My car:<br><br>  " +
        "Name is " +
        car.name +
        "<br>" +
        "Skin is " +
        car.color +
        "<br>" +
        "Age is " +
        car.age +
        "<br>" +
        "and car can run  " +
        car.speed +
        " km per hour <br> <br>"
      );
    };

    document.write(myCar());

    const pathToGo = {
      path: +prompt("enter the distance you want to go..."),
      speed: 120,
    };

    const calc = function (params) {
      const time = params.path / params.speed;
      const timeToRest = time / 4;
      return time + timeToRest;
    };
    document.write(
      "If you want  ride her, you will need near " +
        parseInt(calc(pathToGo)) +
        " hours to reach your goal"
    );
  },
  task2: function () {
    const num = {
      numerator: prompt('enter the first numerator'),
      denominator: prompt('enter the first denominator'),
    };
    const num2 = {
      numerator: prompt('enter the second numerator'),
      denominator: prompt('enter the second denominator'),
    };

    function Fraction(upNumber, downNumber) {
      return { upNumber: upNumber, downNumber: downNumber };
    }
    let firstNumber = Fraction(num.numerator, num.denominator);
    let secondNumber = Fraction(num2.numerator, num2.denominator);

    function plusFraction(obj1, obj2) {
      let resultUpNumber =
        obj1.upNumber * obj2.downNumber + obj2.upNumber * obj1.downNumber;
      let resultDownNumber =
        (obj1.downNumber * obj2.downNumber +
          obj2.downNumber * obj1.downNumber) /
        2;
      document.write(
        `The result of addition = ${resultUpNumber}/${resultDownNumber}<br>`
      );
    }
    function subtractFraction(obj1, obj2) {
      let resultUpNumber =
        obj1.upNumber * obj2.downNumber - obj2.upNumber * obj1.downNumber;
      let resultDownNumber =
        (obj1.downNumber * obj2.downNumber +
          obj2.downNumber * obj1.downNumber) /
        2;
      document.write(
        `The result of subtracting = ${resultUpNumber}/${resultDownNumber}<br>`
      );
    }
    function multiFraction(obj1, obj2) {
      let resultUpNumber = obj1.upNumber * obj2.upNumber;
      let resultDownNumber = obj1.downNumber * obj2.downNumber;
      document.write(
        `The result of multiplication = ${resultUpNumber}/${resultDownNumber}<br>`
      );
    }
    function divideFraction(obj1, obj2) {
      let resultUpNumber = obj1.upNumber * obj2.downNumber;
      let resultDownNumber = obj2.upNumber * obj1.downNumber;
      document.write(
        `The result of dividing = ${resultUpNumber}/${resultDownNumber}<br>`
      );
    }
    function reduce(obj1, obj2) {
      let gcd = 0;
      let gcd2 = 0;

      for (let i = 1; i <= num.numerator && i <= num.denominator; i++) {
        if (num.numerator % i == 0 && num.denominator % i == 0) {
          gcd = i;
        }
      }
      for (let i = 1; i <= num2.numerator && i <= num2.denominator; i++) {
        if (num2.numerator % i == 0 && num2.denominator % i == 0) {
          gcd2 = i;
        }
      }

      document.write(
        `The result of reducing is:  ${num.numerator / gcd} / ${
          num.denominator / gcd
        } and ${num2.numerator / gcd2} / ${num2.denominator / gcd2}`
      );
    }

    plusFraction(firstNumber, secondNumber);
    subtractFraction(firstNumber, secondNumber);
    multiFraction(firstNumber, secondNumber);
    divideFraction(firstNumber, secondNumber);
    reduce();
  },
  task3: function () {
    let time = {
      hours: 14,
      minutes: 40,
      seconds: 35,
    };

    const settime = function () {
      let out = (document.getElementById(
        'output'
      ).innerHTML = `${time.hours}:${time.minutes}:${time.seconds}`);
    };

    const changeHours = function () {
      let changer = +prompt('enter the hours');
      if (changer > 24) return;
      if (time.hours > changer || changer + time.hours - 24 < 0) {
        let out = (document.getElementById('output2').innerHTML = `${
          time.hours + changer
        }:${time.minutes}:${time.seconds}`);
      } else if (time.hours <= changer) {
        let out = (document.getElementById('output2').innerHTML = `${
          changer + time.hours - 24
        }:${time.minutes}:${time.seconds}`);
      }
      if (changer + time.hours >= 24 && changer + time.hours - 24 < 10) {
        out = document.getElementById('output2').innerHTML = `0${
          changer + time.hours - 24
        }:${time.minutes}:${time.seconds}`;
      }
    };

    const changeMinutes = function () {
      let changer = +prompt('enter the minutes');
      if (changer > 60) return;
      if (time.minutes > changer || changer + time.minutes - 60 < 0) {
        let out = (document.getElementById('output3').innerHTML = `${
          time.hours
        }:${time.minutes + changer}:${time.seconds}`);
      } else if (time.minutes <= changer) {
        out = document.getElementById('output3').innerHTML = `${
          time.hours + 1
        }:${changer + time.minutes - 60}:${time.seconds}`;
      }
      if (changer + time.minutes >= 60 && changer + time.minutes - 60 < 10) {
        out = document.getElementById('output3').innerHTML = `${
          time.hours + 1
        }:0${changer + time.minutes - 60}:${time.seconds}`;
      }
    };
    const changeSeconds = function () {
      let changer = +prompt('enter the seconds');
      if (changer > 60) return;
      if (time.seconds > changer || changer + time.seconds - 60 < 0) {
        let out = (document.getElementById('output4').innerHTML = `${
          time.hours
        }:${time.minutes}:${time.seconds + changer}`);
      } else if (time.seconds <= changer) {
        out = document.getElementById('output4').innerHTML = `${time.hours}:${
          time.minutes + 1
        }:${changer + time.seconds - 60}`;
      }
      if (changer + time.seconds >= 60 && changer + time.seconds - 60 < 10) {
        out = document.getElementById('output4').innerHTML = `${time.hours}:${
          time.minutes + 1
        }:0${changer + time.seconds - 60}`;
      }
    };

    settime();
    changeHours();
    changeMinutes();
    changeSeconds();
  },
};

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", (element) => {
    let idTask = "task" + element.target.getAttribute("data-task-id");
    myFync[idTask]();
  });
}
