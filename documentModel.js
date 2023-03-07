const itemForm = document.querySelector('.item-form');
const searchForm = document.querySelector('.search-form');

const itemInput = document.querySelector('.item-input');
const itemList = document.querySelector('.item-list');

const clearAll = document.querySelector('.btn1');

//display Items:

function displayItems() {
  const itemLocalStorage = getItemFromLocalStorage();
  itemLocalStorage.forEach((item) => addItemToDOM(item));
}

// adding item to list..................

function addItemToList(e) {
  e.preventDefault();
  const newItem = itemInput.value;

  if (newItem === '') {
    alert('Please add an item!!');
    return;
  }

  addItemToDOM(newItem);

  addItemToLocalStorage(newItem);

  itemInput.value = '';

  checkUI();
}

// adding items to DOM..............

function addItemToDOM(item) {
  const list = document.createElement('li');
  list.className = 'filterBox';
  list.appendChild(document.createTextNode(item));
  const button = addButton('btn2');
  list.appendChild(button);
  // Add to UL
  itemList.append(list);
}

// adding items to Local storage.................

function addItemToLocalStorage(item) {
  const itemLocalStorage = getItemFromLocalStorage();

  itemLocalStorage.push(item);
  localStorage.setItem('items', JSON.stringify(itemLocalStorage));
}

// getting items from Local storage................

function getItemFromLocalStorage() {
  let itemLocalStorage;

  if (localStorage.getItem('items') === null) {
    itemLocalStorage = [];
  } else {
    itemLocalStorage = JSON.parse(localStorage.getItem('items'));
  }
  console.log(itemLocalStorage);
  return itemLocalStorage;
}

function searchItems(e) {
  const items = itemList.querySelectorAll('li');
  const text = e.target.value.toLowerCase();
  items.forEach((item) => {
    const itemsName = item.firstChild.textContent.toLowerCase();
    if (itemsName.indexOf(text) != -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

// clearing All Items...............

function clearAllItem() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  checkUI();
}

function removeItem(e) {
  itemList.removeChild(e.target.parentElement);
}
//creating button..................

function addButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  button.appendChild(document.createTextNode('X'));
  return button;
}

function checkUI() {
  const items = itemList.querySelectorAll('li');

  if (items.length === 0) {
    clearAll.style.display = 'none';
    searchForm.style.display = 'none';
  } else {
    clearAll.style.display = 'block';
    searchForm.style.display = 'block';
  }
}

itemForm.addEventListener('submit', addItemToList);
clearAll.addEventListener('click', clearAllItem);
itemList.addEventListener('click', removeItem);
searchForm.addEventListener('input', searchItems);
document.addEventListener('DOMContentLoaded', displayItems);

// const world = '["ram"]';

// const x = JSON.parse(world);

// console.log(typeof x);

// console.log(Object.keys(x));
