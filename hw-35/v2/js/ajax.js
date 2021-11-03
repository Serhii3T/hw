/*Реализовать веб-страницу для поиска фильмов. При открытии страницы пользователю доступна только форма для ввода названия фильма
 (или части названия) и выбора типа (movie, series, episode).
После того, как пользователь ввел данные и нажал на кнопку Search, необходимо отправить соответствующий запрос к API ресурса 
OMDB (http://www.omdbapi.com/) с помощью AJAX.
Если в качестве ответа на запрос вы получили список фильмов, то его необходимо отобразить под формой поиска. 
Если по заданным критериям не будут найдены фильмы, то отобразите сообщение Movie not found!.
Учтите, что OMDB по умолчанию возвращает только первые 10 фильмов. Поэтому необходимо реализовать 
пагинацию для тех случаев, когда под критерии поиска подходит больше, чем 10 фильмов. Пагинация – это порядковая нумерация страниц,
 которая обычно находится вверху или внизу страниц сайта. Вероятно, вы видели в интернет-магазинах на страницах с товарами кнопки
  с цифрами 1, 2, 3 и т. д., при нажатии на которые отбражается другой блок товаров. Вот такие кнопки и называют пагинацией. 
  Таким образом, при первом поиске необходимо выводить первые 10 фильмов и кнопки для перехода по страницам. При клике на 
  такую кнопку необходимо отправить запрос с указанием в параметрах требуемой страницы, и полученный результат вывести на 
  место текущего списка фильмов.
Возле каждого фильма должна быть кнопка Details, при нажатии на которую будет выводиться подробная информация о фильме. 
Эту информацию необходимо выводить на этой же странице сразу под списком найденных фильмов и пагинацией.
Все запросы необходимо отправлять, используя AJAX. То есть при нажатии на любые кнопки ваша веб-страница не должна обновляться.
Ссылка на API OMDB: http://www.omdbapi.com/ (необходимо зарегистри роваться для получения API KEY).*/
let elemForm = document.getElementById("elemForm");
let page_link = document.getElementsByClassName("page-link");
let current = document.getElementsByClassName("current");
let listFilmPlaceholder = document.getElementById("listFilmPlaceholder");
let pagination_placeholder = document.getElementById("pagination_placeholder");
let btnAddToFav;
let btnRemFromFav;
let page = 1;
document.body.addEventListener("click", setNumPage);
function setNumPage(e) {
  if (e.target.tagName != "A") return;
  page = current[0].innerText;
  console.log(page);
  sendRequest();
}
/**
 * sending request and getting list films
 */
elemForm.onsubmit = (e) => {
  e.preventDefault();
  sendRequest();
};
function sendRequest() {
  listFilmPlaceholder.innerHTML = "";
  let titleFilm = document.getElementById("titleFilm").value;
  let typeFilm = document.getElementById("typeFilm").value;
  let apiUrl = `http://www.omdbapi.com/?s=${titleFilm}&type=${typeFilm}&page=${page}&apikey=a6848e81&`;
  // http://www.omdbapi.com/?i=tt3896198&apikey=3a115289
  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.Response == "False") {
        let p = document.createElement("p");
        p.innerText = "Movie not found!";
        listFilmPlaceholder.appendChild(p);
        return;
      } else {
        let ol = document.createElement("ol");
        console.log(data.Search);
        listFilm = data.Search;
        for (let el in listFilm) {
          let li = document.createElement("li");
          let liNum = (page - 1) * 10 + parseInt(el) + 1;
          li.setAttribute("value", `${liNum}`);
          for (let value in listFilm[el]) {
            li.innerText += value + ": " + listFilm[el][value] + "; ";
          }
          ol.appendChild(li);
          /**
           * creation button "add to favourites"/add to local storage
           */
          li.onmouseenter = addToFavourites;
          function addToFavourites() {
            if (id.includes(listFilm[el].imdbID) === true) {
              RemFromFav();
              return;
            }
            btnAddToFav = document.createElement("button");
            btnAddToFav.style.display = "block";
            btnAddToFav.innerText = "add to favorite";
            li.appendChild(btnAddToFav);
            li.onmouseleave = () => {
              btnAddToFav.style.display = "none";
            };

            btnAddToFav.onclick = () => {
              listFavFilmPlaceholder.innerHTML = "";
              id.push(`${listFilm[el].imdbID}`);
              console.log(id);
              favFilmsList.setId(id);
              btnAddToFav.style.display = "none";
              li.onmouseleave = () => {
                btnRemFromFav.style.display = "none";
              };
              RemFromFav();
            };
          }
          /**
           * creation button "remove from favorite"/delete from local storage
           */
          function RemFromFav() {
            btnRemFromFav = document.createElement("button");
            btnRemFromFav.style.display = "block";
            btnRemFromFav.innerText = "remove from favorite";
            li.appendChild(btnRemFromFav);
            li.onmouseleave = () => {
              btnRemFromFav.style.display = "none";
            };

            btnRemFromFav.onclick = () => {
              let index = id.indexOf(`${listFilm[el].imdbID}`);
              id.splice(index, 1);
              console.log(id);
              favFilmsList.setId(id);
              btnRemFromFav.style.display = "none";
              addToFavourites();
              li.onmouseleave = () => {
                btnAddToFav.style.display = "none";
              };
            };
          }
        }
        listFilmPlaceholder.appendChild(ol);
        /**
         * pagination creation
         */
        if (page !== 1) return;
        $(function () {
          $(pagination_placeholder).pagination({
            items: data.totalResults,
            itemsOnPage: listFilm.length,
            cssStyle: "light-theme",
          });
        });
      }
    });
}

//Для домашнего задания по теме AJAX реализовать функционал страницы favorite movies,
//используя для хранения избранных фильмов localStorage. В хранилище лучше
//записывать не фильм целиком, а только его id.

/**
 * localStorage (favorite films)
 */
let id = [];
let favFilmsList = {
  storage: null,
  setId(id) {
    this.storage.setItem("id", JSON.stringify(id));
  },
  getId() {
    return JSON.parse(this.storage.getItem("id"));
  },
};
favFilmsList.storage = window.localStorage;
/**
 * show selected films
 */
let listFavFilmPlaceholder = document.getElementById("listFavFilmPlaceholder");
let btnShowFav = document.createElement("button");
btnShowFav.innerText = "show selected films";
document.body.appendChild(btnShowFav);
btnShowFav.onclick = () => {
  listFavFilmPlaceholder.innerHTML = "";
  if (id.length < 1) {
    let p = document.createElement("p");
    p.innerText = "You have not favorite movies!";
    listFavFilmPlaceholder.appendChild(p);
  } else {
    let ol = document.createElement("ol");
    for (let el of id) {
      let i = el;
      let apiUrl = `http://www.omdbapi.com/?i=${i}&apikey=a6848e81&`;
      fetch(apiUrl)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          listFavFilm = data;
          let li = document.createElement("li");
          li.innerText = listFavFilm.Title + ", " + listFavFilm.Year + "; ";
          ol.appendChild(li);
          listFavFilmPlaceholder.appendChild(ol);
        });
    }
  }
};
