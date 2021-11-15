"use strict";

// Создать массив аудиторий академии.
// Объект-аудитория состоит из названия,
// количества посадочных мест (от 10 до 20)
// и названия факультета, для которого
// она предназначена. Написать несколько
// функций для работы с ним

// Вывод на экран всех аудиторий;

// Вывод на экран аудиторий для указанного факультета;

// Вывод на экран только тех аудиторий, которые подходят для переданной группы.
// Объект-группа состоит из названия, количества студентов и названия факультета;

// Функция сортировки аудиторий по количеству мест;

// Функция сортировки аудиторий по названию (по алфавиту).

const arr = [
  { name: "321", places: "25", faculty: "Software" },
  { name: "316", places: "15", faculty: "Cybernetics" },
  { name: "312", places: "30", faculty: "Techical Cybernetics" },
  { name: "300", places: "10", faculty: "Engineering" },
  { name: "212", places: "25", faculty: "Economic cybernetics" },
  { name: "115", places: "30", faculty: "Software" },
  { name: "100", places: "10", faculty: "Languages" },
  { name: "110", places: "10", faculty: "Techical Cybernetics" },
  { name: "404", places: "35", faculty: "Software" }
];

const group = {
  name: "2St1",
  count: "25",
  faculty: "Software"
};

const arrSortPlace = arr => {
  arr.sort((a, b) => {
    return a.places - b.places;
  });
};

const arrSortName = arr => {
  arr.sort((a, b) => {
    return a.name - b.name;
  });
};

const showClassrooms = arr => {
  let show = [];
  for (let i in arr) {
    show.push(arr[i].name);
  }
  return `All availible rooms are: ${show.join("; ")}.`;
};

const showFacultyRooms = (arr, faculty) => {
  let show = [];
  for (let i in arr) {
    if (arr[i].faculty.toString().toLowerCase() == faculty.toLowerCase()) {
      show.push(arr[i].name);
    }
  }
  return `All classrooms of ${faculty} faculty are: ${show.join("; ")}.`;
};

const showGroupRooms = (arr, group) => {
  let show = [];
  for (let i in arr) {
    if (
      group.faculty.toString().toLowerCase() ==
      arr[i].faculty.toString().toLowerCase()
    ) {
      show.push(arr[i].name);
    }
  }
  return `All classroms for ${group.name} 
  students group are: ${show.join("; ")}.`;
};
const faculty = "Software";
const mainDiv = document.getElementById("content");

const show = func => {
  const div = document.createElement("div");
  div.textContent = func;
  div.className = func;
  mainDiv.appendChild(div);
};

let func = arrSortPlace(arr);
show(func);

func = arrSortName(arr);
show(func);

func = showClassrooms(arr);
show(func);

func = showFacultyRooms(arr, faculty);
show(func);

func = showGroupRooms(arr, group);
show(func);