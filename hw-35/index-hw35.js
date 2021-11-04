function createItemFilm(data) {
  $(`<div class="item-film col-12 col-md-6 col-lg-4">
          <div class="poster">
              <img class="w-100" src="` + data.poster + `" alt="film poster">
          </div>
          <h3>` + data.title + `</h3>
          <h5>` + data.year + `</h5>
          <button class="btn-details" data-id-film="` + data.imdbid + `">Details</button>
          <div class="details-block details-id-` + data.imdbid + `"></div>
          <button class="btn-favorite btn-favorite-id-` + data.imdbid + `" data-id-favorite="` + data.imdbid + `">Favorite</button>
      </div>`).appendTo('.response');
}

// Для домашнего задания по теме AJAX реализовать функционал страницы favorite movies, используя для хранения избранных фильмов localStorage. 
function addFavorite() {
    $('.btn-favorite').on('click', function () {
        $(this).toggleClass('active');
        let getFavoriteByArray = JSON.parse(localStorage.getItem("favoriteItems")) != null ? JSON.parse(localStorage.getItem("favoriteItems")) : [];
        let checkIdInArr = (getFavoriteByArray.indexOf($(this).data('id-favorite')) > -1);
        !checkIdInArr ? getFavoriteByArray.push($(this).data('id-favorite')) : getFavoriteByArray.splice($.inArray($(this).data('id-favorite'), getFavoriteByArray), 1);
        let stringStorage = JSON.stringify(getFavoriteByArray);
        localStorage.setItem("favoriteItems", stringStorage);
    });

    let arrFav = JSON.parse(localStorage.getItem("favoriteItems"));
    if(arrFav.length != 0) {
        $.each(arrFav, function(index, value) {
            $('.btn-favorite-id-'+value).addClass('active');
        });
    }
}

function addDetails(data) {
  $(`<div class="details-block__info">
         ` + data.imdbID + `
         ` + data.actors + `
         ` + data.language + `
         ` + data.runtime + `
         ` + data.country + `
         ` + data.dvd + `
         <p>` + data.desc + `</p>
    </div>`).appendTo('.details-id-' + data.imdbID);
}

function requestEventDetails() {
  $('.btn-details').on('click', function () {
      let btnThis = $(this);
      if (!$(this).hasClass('is-active')) {
          let urlApi = 'https://www.omdbapi.com/?apikey=bf73a1d2&';
          let searchName = 'i=' + $(this).data('id-film') + '&plot=full';
          $.ajax({
              type: 'get',
              url: urlApi + searchName,
              success: function (response) {
                  let data = {
                      'desc': response.Plot,
                      'dvd': response.DVD,
                      'language': response.Language,
                      'genre': response.Genre,
                      'runtime': response.Runtime,
                      'imdbRating': response.imdbRating,
                      'actors': response.Actors,
                      'director': response.Director,
                      'country': response.Country,
                      'imdbID': response.imdbID,
                  };
                  addDetails(data);
                  btnThis.addClass('is-active');
              },
          });
      } else {
          $(this).next('.details-block').html('');
          $(this).removeClass('is-active');
      }
  });
}

function createPagination(countLinks, totalItems) {
  $('.pagination').html('');
  let number = localStorage.getItem("pageNumber");
  $('.pagination2').pagination({
      items: totalItems,
      itemsOnPage: 10,
      cssStyle: 'light-theme',
  });
  $('.pagination2').pagination('selectPage', number);
}

function eventClickPagination() {
  $('.nav-item').on('click', function () {
      $('.nav-item').removeClass('is-active');
      $(this).addClass('is-active');
      localStorage.setItem("pageNumberParams", '&page=' + $(this).data('page-id'));
      localStorage.setItem("pageNumber", $(this).data('page-id'));
      $('.form-search').submit();
  });

  $('.page-link').on('click', function () {
      let currentPage = $('.pagination2').pagination('getCurrentPage');
      localStorage.setItem("pageNumberParams", '&page=' + currentPage);
      localStorage.setItem("pageNumber", currentPage);
      $('.form-search').submit();
  });
}

function clearLocalStorage() {
  localStorage.setItem("pageNumberParams", '&page=1');
  localStorage.setItem("pageNumber", '1');
  localStorage.setItem("searchTitle", '');
  localStorage.setItem("countLinksPagination", '');
}

clearLocalStorage();
$('.form-search input').on('change', function () {
  clearLocalStorage()
});

$('.form-search').on('submit', function (event) {
  event.preventDefault();
  let urlApi = 'https://www.omdbapi.com/?apikey=bf73a1d2&';
  let searchName = 's=' + $(this).find('#title-name').val();
  let seachType = '&type=' + $(this).find('input[name=type]:checked').val();
  localStorage.setItem("searchTitle", searchName);
  let urlStorage = localStorage.getItem("searchTitle");
  let pageNumber = localStorage.getItem("pageNumberParams") != null ? localStorage.getItem("pageNumberParams") : '';
  $.ajax({
      type: 'get',
      url: urlApi + urlStorage + seachType + pageNumber,
      beforeSend: function () {
          $('.response').html('');
      },
      success: function (response) {
          if (response.Response != 'False') {
              let countLinksPagination = Math.floor(response.totalResults / 10) + 1;
              localStorage.setItem("countLinksPagination", countLinksPagination);

              $.each(response.Search, function () {
                  let poster = this.Poster != 'N/A' ? this.Poster : 'https://image.freepik.com/free-photo/mock-up-blank-poster-picture-frame-on-brick-wall_42682-117.jpg';
                  let dataFilm = {
                      'title': this.Title,
                      'year': this.Year,
                      'type': this.Type,
                      'poster': poster,
                      'imdbid': this.imdbID,
                  }
                  createItemFilm(dataFilm);
              });
              requestEventDetails();
              createPagination(countLinksPagination, response.totalResults);
              eventClickPagination();
              addFavorite();
          } else {
              $('.pagination').html('');
              $('.title-header').text(response.Error);

          }
      },
  });
});


// $('.test-form').on('submit', function(e) {
//     e.preventDefault();
//     let dataItems = {
//         role: $(this).find('input[name=role]').val(),
//         firstName: 'Sergey',
//         lastName: 'Trit',
//         email: 'test@gmail.com',
//         username: 'test',
//         password: 'testpass',
//         active: 1,
//     }
//     let dataString = JSON.stringify(dataItems);
//     $.ajax({
//         type: 'post',
//         contentType: "application/json; charset=utf-8",
//         url: 'https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/registration',
//         data : dataString,
//         dataType: 'json',
//         success: function (response) {
//             console.log(response);
//         },
//     });
// })