const arr = [
  { name: 'Salmon', count: 3, bought: true },
  { name: 'Orange', count: 5, bought: false },
  { name: 'Beer', count: 7, bought: true },
  { name: 'Potato', count: 9, bought: false },
  { name: 'Water', count: 5, bought: true },
  { name: 'Schweppes', count: 3, bought: false },
  { name: 'Pasta', count: 5, bought: true },
  { name: 'Tomatoes', count: 2, bought: false },
];

///sort items.................

const boughtOrNot = (a, b) => {
  if (a.bought === false && b.bought === true) return -1;
  if (a.bought === true && b.bought === false) return 1;
};

///add items............
function addItem(item) {
  const existingItem = arr.find((elem) => elem.name === item.name);

  if (existingItem !== undefined) {
    existingItem.count += item.count;
  } else {
    arr.push(item);
  }
}

addItem({
  name: 'Pineapple',
  count: 2,
  bought: false,
});

addItem({
  name: 'Beer',
  count: 5,
  bought: false,
});

console.log('Add item', arr.sort(boughtOrNot));

// buy items.............

function buyItem(item) {
  const existingItem = arr.find((elem) => elem.name === item.name);

  if (existingItem !== undefined) {
    existingItem.bought = true;
  }
}

buyItem({
  name: 'Beer',
});

console.log('Buy item', arr.sort(boughtOrNot));