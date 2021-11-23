'use strict';

// Реализовать класс, описывающий окружность.

class circle {
    constructor (radius) {
        this.radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(radius) {
        this._radius = radius;
    }

    diametre() {
        return this._radius * 2;
    }
    
    sqare() {
        return 3.14 * Math.pow(this.radius, 2);
    }

    length() {
        return 2 * 3.14 * this.radius;
    }
    
}

function showResult(res) {
    const firstDiv = document.getElementById('firstDiv');
    const par = document.createElement('p');
    par.append(res);
    firstDiv.append(par);
}

const butt1 = document.getElementById('butt1');

butt1.addEventListener('click', () =>{
    const radius = document.getElementById('input1');
    const radiusValue = +radius.value;

    if (isNaN(radiusValue)) {
        showResult('Не число');
    } else {
        const firstCircle = new circle(radiusValue);
    
        for (const key in firstCircle) {
            showResult(`${key}: ${firstCircle[key]}`);
        }
    
        const diametre = firstCircle.diametre();
        showResult(`diametre: ${diametre}`);
        const sqare = firstCircle.sqare();
        showResult(`sqare: ${sqare}`);
        const length = firstCircle.length();
        showResult(`length circle: ${length}`);
    }

});


// Реализовать класс, описывающий простой маркер.


class marker {
    constructor (color, ink) {
        this.color = color;
        this.ink = ink;
    }

    printText(str) {
        const result2 = document.getElementById('result2');
        const par = document.createElement('p');
        
        let strFinal = '';
        let strLength = this.ink / 0.5;

        for (let i = 0; i < strLength; i++) {
            if (str.charAt(i) == ' ') {
                strLength += 1;
            }
            strFinal += str.charAt(i);
        }
            par.append(strFinal);
            par.style.color = this.color;
            result2.append(par);
    }
}

const butt2 = document.getElementById('butt2');

butt2.addEventListener('click', () => {
    const input21 = document.getElementById('input21');
    const input22 = document.getElementById('input22');
    const input23 = document.getElementById('input23');


    const input23Value = +input23.value;
    
    const input22Value = String(input22.value);
    const inputValue = String(input21.value);

    const newMarker = new marker(input22Value, input23Value);
    newMarker.printText(inputValue);
    
});

// Реализовать класс Employee, описывающий работника, и создать массив работников банка

class Employee {
    constructor(name, age, growth) {
        this.name = name;
        this.age = age;
        this.growth = growth;
    }
};

const firstEmployee = new Employee('Alex', 23, 193);
const secondEmployee = new Employee('John', 32, 173);
const thirdEmployee = new Employee('David', 17, 185);

const arrEmployees = [firstEmployee, secondEmployee, thirdEmployee];

const table = document.getElementById('table');

class empTable {
    constructor(emplArr) {
        this.employee = emplArr;
    }

    getHtml(emplArr) {
        let th = emplArr[0];
        let tr = document.createElement('tr');
        table.append(tr);

        for (const key in th) {
            let td = document.createElement('td');
            td.classList.add('table__td')
            td.append(key);
            tr.append(td);
        }
        for (let i = 0; i < emplArr.length; i++) {
            let tr = document.createElement('tr');
            table.append(tr);
            for (const key in emplArr[i]) {
                let td = document.createElement('td')
                td.classList.add('table__td')
                td.append(emplArr[i][key])
                tr.append(td);
            }
        }
    }
}

const butt3 = document.getElementById('butt3');
butt3.addEventListener('click', () => {
    const empGenHtml = new empTable(arrEmployees);

    empGenHtml.getHtml(arrEmployees);
});