"use strict";

const getUrl = "http://www.omdbapi.com/?apikey=bf73a1d2";
const resultDiv = $("#result");

// Функция для вызова списка фильмов
const movieFunction = (url) => {
  $.get(url, (e) => {
    resultDiv.html("");

    if (e.Response == "False") {
      resultDiv.html("Movie not found!");
    } else if (e.totalResults > 10) {
      let count = e.totalResults / 10;
      if (e.totalResults % 10 !== 0) {
        count = Math.floor(count) + 1;
      }

      let divItem = $("<div></div>");
      divItem.addClass("buttons");

      for (let i = 1; i <= count; i++) {
        let movie = $("#input").val();
        let pageUrl = `${getUrl}&s=${movie}&Type="movie"&page=${i}`;

        let divTens = $("<div></div>");
        divTens.addClass(`film__tens`);
        divTens.appendTo(resultDiv);

        let butt = $("<button></button>");
        butt.text(`${i}`);
        butt.appendTo(divItem);
        divItem.prependTo(resultDiv);

        $.get(pageUrl, (e) => {
          e.Search.forEach((element) => {
            let divItem = $("<div></div>");
            divItem.addClass("film__item");
            divItem.appendTo(divTens);

            let divRight = $("<div></div>");
            divRight.addClass("film__info");
            divRight.appendTo(divItem);

            for (const key in element) {
              if (key == "Poster") {
                let imgUrl = element[key];
                if (imgUrl == "N/A") {
                  let posterImg = $(
                    `<img src="https://image.freepik.com/free-photo/mock-up-blank-poster-picture-frame-on-brick-wall_42682-117.jpg">`
                  );
                  posterImg.addClass("film__itemImg");
                  posterImg.prependTo(divItem);
                } else {
                  let posterImg = $(`<img src="${imgUrl}">`);
                  posterImg.addClass("film__itemImg");
                  posterImg.prependTo(divItem);
                }
              } else {
                let divContent = $("<div></div>");
                let divContentText = `${key}: ${element[key]}`;
                divContent.append(divContentText);
                divContent.appendTo(divRight);
              }
            }
          });
        });
      }
    } else {
      e.Search.forEach((element) => {
        let divItem = $("<div></div>");
        divItem.appendTo(resultDiv);
        divItem.addClass("film__item");

        let divRight = $("<div></div>");
        divRight.appendTo(divItem);

        for (const key in element) {
          if (key == "Poster") {
            let imgUrl = element[key];
            if (imgUrl == "N/A") {
              let posterImg = $(
                `<img src="https://image.freepik.com/free-photo/mock-up-blank-poster-picture-frame-on-brick-wall_42682-117.jpg">`
              );
              posterImg.addClass("film__itemImg");
              posterImg.prependTo(divItem);
            } else {
              let posterImg = $(`<img src="${imgUrl}">`);
              posterImg.addClass("film__itemImg");
              posterImg.prependTo(divItem);
            }
          } else {
            let divContent = $("<div></div>");
            let divContentText = `${key}: ${element[key]}`;
            divContent.append(divContentText);
            divContent.appendTo(divRight);
          }
        }
      });
    }

    filmList();
  });
};

// Функция для вызова списка серий
const seriesFunction = (url) => {
  $.get(url, (e) => {
    resultDiv.html("");

    if (e.Response == "False") {
      resultDiv.html("Series not found!");
    } else if (e.totalResults > 10) {
      let count = e.totalResults / 10;
      if (e.totalResults % 10 !== 0) {
        count = Math.floor(count) + 1;
      }

      let divItem = $("<div></div>");
      divItem.addClass("buttons");

      for (let i = 1; i <= count; i++) {
        let movie = $("#input").val();
        let pageUrl = `${getUrl}&s=${movie}&Type="series"&page=${i}`;

        let divTens = $("<div></div>");
        divTens.addClass(`film__tens`);
        divTens.appendTo(resultDiv);

        let butt = $("<button></button>");
        butt.text(`${i}`);
        butt.appendTo(divItem);
        divItem.prependTo(resultDiv);

        $.get(pageUrl, (e) => {
          e.Search.forEach((element) => {
            let divItem = $("<div></div>");
            divItem.addClass("film__item");
            divItem.appendTo(divTens);

            let divRight = $("<div></div>");
            divRight.appendTo(divItem);

            for (const key in element) {
              if (key == "Poster") {
                let imgUrl = element[key];
                if (imgUrl == "N/A") {
                  let posterImg = $(
                    `<img src="https://image.freepik.com/free-photo/mock-up-blank-poster-picture-frame-on-brick-wall_42682-117.jpg">`
                  );
                  posterImg.addClass("film__itemImg");
                  posterImg.prependTo(divItem);
                } else {
                  let posterImg = $(`<img src="${imgUrl}">`);
                  posterImg.addClass("film__itemImg");
                  posterImg.prependTo(divItem);
                }
              } else {
                let divContent = $("<div></div>");
                let divContentText = `${key}: ${element[key]}`;
                divContent.append(divContentText);
                divContent.appendTo(divRight);
              }
            }
          });
        });
      }
    } else {
      e.Search.forEach((element) => {
        let divItem = $("<div></div>");
        divItem.appendTo(resultDiv);
        divItem.addClass("film__item");

        let divRight = $("<div></div>");
        divRight.appendTo(divItem);

        for (const key in element) {
          if (key == "Poster") {
            let imgUrl = element[key];
            if (imgUrl == "N/A") {
              let posterImg = $(
                `<img src="https://image.freepik.com/free-photo/mock-up-blank-poster-picture-frame-on-brick-wall_42682-117.jpg">`
              );
              posterImg.addClass("film__itemImg");
              posterImg.prependTo(divItem);
            } else {
              let posterImg = $(`<img src="${imgUrl}">`);
              posterImg.addClass("film__itemImg");
              posterImg.prependTo(divItem);
            }
          } else {
            let divContent = $("<div></div>");
            let divContentText = `${key}: ${element[key]}`;
            divContent.append(divContentText);
            divContent.appendTo(divRight);
          }
        }
      });
    }

    filmList();
  });
};

// Функция для вызова списка эпизодов
const episodeFunction = (url) => {
  $.get(url, (e) => {
    resultDiv.html("");

    if (e.Response == "False") {
      resultDiv.html("Episode not found!");
    } else if (e.totalResults > 10) {
      let count = e.totalResults / 10;
      if (e.totalResults % 10 !== 0) {
        count = Math.floor(count) + 1;
      }

      let divItem = $("<div></div>");
      divItem.addClass("buttons");

      for (let i = 1; i <= count; i++) {
        let movie = $("#input").val();
        let pageUrl = `${getUrl}&s=${movie}&Type="episode"&page=${i}`;

        let divTens = $("<div></div>");
        divTens.addClass(`film__tens`);
        divTens.appendTo(resultDiv);

        let butt = $("<button></button>");
        butt.text(`${i}`);
        butt.appendTo(divItem);
        divItem.prependTo(resultDiv);

        $.get(pageUrl, (e) => {
          e.Search.forEach((element) => {
            let divItem = $("<div></div>");
            divItem.addClass("film__item");
            divItem.appendTo(divTens);

            let divRight = $("<div></div>");
            divRight.appendTo(divItem);

            for (const key in element) {
              if (key == "Poster") {
                let imgUrl = element[key];
                if (imgUrl == "N/A") {
                  let posterImg = $(
                    `<img src="https://image.freepik.com/free-photo/mock-up-blank-poster-picture-frame-on-brick-wall_42682-117.jpg">`
                  );
                  posterImg.addClass("film__itemImg");
                  posterImg.prependTo(divItem);
                } else {
                  let posterImg = $(`<img src="${imgUrl}">`);
                  posterImg.addClass("film__itemImg");
                  posterImg.prependTo(divItem);
                }
              } else {
                let divContent = $("<div></div>");
                let divContentText = `${key}: ${element[key]}`;
                divContent.append(divContentText);
                divContent.appendTo(divRight);
              }
            }
          });
        });
      }
    } else {
      e.Search.forEach((element) => {
        let divItem = $("<div></div>");
        divItem.appendTo(resultDiv);
        divItem.addClass("film__item");

        let divRight = $("<div></div>");
        divRight.appendTo(divItem);

        for (const key in element) {
          if (key == "Poster") {
            let imgUrl = element[key];
            if (imgUrl == "N/A") {
              let posterImg = $(
                `<img src="https://image.freepik.com/free-photo/mock-up-blank-poster-picture-frame-on-brick-wall_42682-117.jpg">`
              );
              posterImg.addClass("film__itemImg");
              posterImg.prependTo(divItem);
            } else {
              let posterImg = $(`<img src="${imgUrl}">`);
              posterImg.addClass("film__itemImg");
              posterImg.prependTo(divItem);
            }
          } else {
            let divContent = $("<div></div>");
            let divContentText = `${key}: ${element[key]}`;
            divContent.append(divContentText);
            divContent.appendTo(divRight);
          }
        }
      });
    }

    filmList();
  });
};

// Вызов фугкций на клик мыши
$("#btn").on("click", () => {
  const movie = $("#input").val();
  const movieUrl = `${getUrl}&s=${movie}&Type="movie"`;
  const seriesUrl = `${getUrl}&s=${movie}&Type="series"`;
  const episodeUrl = `${getUrl}&s=${movie}&Type="episode"`;
  const movieValue = $("input:checked").val();

  switch (movieValue) {
    case "movie":
      movieFunction(movieUrl);

      break;
    case "series":
      seriesFunction(seriesUrl);

      break;
    case "episode":
      episodeFunction(episodeUrl);

      break;
  }
});

//callback функция

function filmList() {
  let list = $(".film__tens");
  let listFirst = $(".film__tens")[0];
  listFirst.classList.add("active");
  let butts = $(".buttons button");

  butts.each((e, value) => {
    value.addEventListener("click", () => {
      list[e].classList.add("active");
      list.each((v) => {
        if (e !== v) {
          list[v].classList.remove("active");
        }
      });
    });
  });
}
