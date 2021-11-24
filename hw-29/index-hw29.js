let shoppingList = [
    {
        name: "Apple",
        amount: 5,
        bought: 'куплено',
        price: 2,
        sum: 10,
    },
    {
        name: "Bread",
        amount: 1,
        bought: 'куплено',
        price: 15,
        sum: 15,
    },
    {
        name: "Steak",
        amount: 1,
        bought: 'куплено',
        price: 115,
        sum: 115,
    },
    {
        name: "Spaggeti",
        amount: 2,
        bought: 'куплено',
        price: 30,
        sum: 60,
    },
    {
        name: "Beer",
        amount: 6,
        bought: 'не куплено',
        price: 25,
        sum: 150,
    },
    {
        name: "Egg",
        amount: 4,
        bought: 'куплено',
        price: 35,
        sum: 140,
    },
    {
        name: "Whiskey",
        amount: 2,
        bought: 'не куплено',
        price: 350,
        sum: 700,
    },
];

function byField(field) {
    if(field == 'sum') {
        return (a, b) => a[field] > b[field] ? 1 : -1;
    } else {
        return (a, b) => a[field] > b[field] ? -1 : 1;
    }
}

shoppingList.sort(byField('bought'));


function calcSum() {
    let summAll = 0;
    let summAllNotBuy = 0;

    for (let i = 0; i < shoppingList.length; i++) {
        let boolBuy = shoppingList[i].bought == 'куплено' ? true : false;
        console.log(boolBuy);
        if(boolBuy) {
            summAll += shoppingList[i].sum;
        } else {
            summAllNotBuy += shoppingList[i].sum;
        }
    };
    $('.sum-all').text(summAll + ' summ all buy');
    $('.sum-all-nobuy').text(summAllNotBuy + ' summ not buy');
}

function createList() {
    $('.homework__out').html('');
    for (let i = 0; i < shoppingList.length; i++) {
        let textBtn = shoppingList[i].bought == 'куплено' ? 'Возврат' : 'Купить';
        $(`<li class="item-list">
          <h5>Name - ` + shoppingList[i].name + `</h5>
          <h5>Amount - <input class="qnty" type="number" data-key-arr=` + i + ` data-price=`+shoppingList[i].price+` value=` + shoppingList[i].amount + `></h5>
          <h5>Price - ` + shoppingList[i].price + `</h5>
          <h5>Summ - <span class="sum-text">` + shoppingList[i].sum + `</span></h5>
          <h5>Status - ` + shoppingList[i].bought + `</h5>
          <button class="buy" data-key-arr=` + i + ` data-status="` + shoppingList[i].bought + `">` + textBtn + `</button>
          <button class="delete" data-key-name=` + shoppingList[i].name + `>Delete</button>
      </li>`).appendTo('.homework__out');
    };
    // afterCreateListAddEvents();
}

function createListNoBuy() {
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].bought == 'не куплено') {
            let textBtn = shoppingList[i].bought == 'куплено' ? 'Возврат' : 'Купить'
            $(`<li class="item-list">
                  <h5>Name - ` + shoppingList[i].name + `</h5>
                  <h5>Amount - <input class="qnty" type="number" data-price=`+shoppingList[i].price+` value=` + shoppingList[i].amount + `></h5>
                  <h5>Price - ` + shoppingList[i].price + `</h5>
                  <h5>Summ - <span class="sum-text">` + shoppingList[i].sum + `</span></h5>
                  <h5>Status - ` + shoppingList[i].bought + `</h5>
                  <button class="buy" data-key-arr=` + i + ` data-status="` + shoppingList[i].bought + `">` + textBtn + `</button>
                  
            </li>`).appendTo('.list-no-buy');
        }
    };
}


function afterCreateListAddEvents() {
    $('.buy').on('click', function () {
        if ($(this).attr('data-status') == 'не куплено') {
            shoppingList[$(this).data('key-arr')].bought = 'куплено';
            $(this).attr('data-status', 'куплено');
            $(this).text('Возврат');
        } else {
            shoppingList[$(this).data('key-arr')].bought = 'не куплено';
            $(this).attr('data-status', 'не куплено');
            $(this).text('Купить');
        }
    });
    $('.delete').on('click', function () {
        let dataNameDelete = $(this).attr('data-key-name');
        shoppingList = shoppingList.filter(function(item) {
            return item.name !== dataNameDelete;
        });
        $(this).parent('.item-list').remove();
        console.log(shoppingList);
        calcSum();
    });
    $('.sort-by-sum').on('click', function () {
        shoppingList.sort(byField('sum'));
        createList();
    });

    $('.qnty').on('change', function() {
        let sum = $(this).attr('data-price') * $(this).val();
        $(this).parents('.item-list').find('.sum-text').text(sum);
        shoppingList[$(this).data('key-arr')].amount = $(this).val();
        shoppingList[$(this).data('key-arr')].sum = sum;
        calcSum();
    });
}

createList();
createListNoBuy();
calcSum();
afterCreateListAddEvents();