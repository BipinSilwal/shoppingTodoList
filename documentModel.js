const itemForm = document.querySelector('.item-form');
// const searchForm = document.querySelector('.search-form');

const itemInput = document.querySelector('.item-input');
const itemList = document.querySelector('.item-list');

const clearAll = document.querySelector('.clearAll');

function addItemToList(e) {
  e.preventDefault();
  const newItem = itemInput.value;

  if (newItem === '') {
    alert('Please add an item!!');
    return;
  }

  addItemToDOM(newItem);
}

function addItemToDOM(item) {
  let list = document.createElement('li');
  list.className = 'filterBox';
  list.textContent = item;
}

function addButton() {
  let button = document.createElement('button');
}

itemForm.addEventListener('submit', addItemToList);
