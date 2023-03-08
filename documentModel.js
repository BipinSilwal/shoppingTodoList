const itemForm = document.querySelector('.item-form');
const searchForm = document.querySelector('.search-form');

const itemInput = document.querySelector('.item-input');
const itemList = document.querySelector('.item-list');

const clearAll = document.querySelector('.btn1');
const btn = document.querySelector('.btn');

let isEditMode = false;

//display Items:

function displayItems() {
  const itemLocalStorage = getItemFromLocalStorage();
  itemLocalStorage.forEach((item) => addItemToDOM(item));
  checkUI();
}

// adding item to list..................

function addItemToList(e) {
  e.preventDefault();
  const newItem = itemInput.value;

  if (newItem === '') {
    alert('Please add an item!!');
    return;
  }

  if (isEditMode) {
    const itemToEdit = itemList.querySelector('.editMode');
    console.log(itemToEdit);
    removeItemFromLocalStorage(itemToEdit.firstChild.data);
    itemToEdit.classList.remove('editMode');
    itemToEdit.remove();
    isEditMode = false;
  } else {
    if (checkItemRepeat(newItem)) {
      alert('Item already exists in the list!!');
      return;
    }
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

  return itemLocalStorage;
}

function checkItemRepeat(item) {
  const itemLocalStorage = getItemFromLocalStorage();
  return itemLocalStorage.includes(item);
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
  localStorage.removeItem('items');
  checkUI();
}

function onClickItem(e) {
  if (e.target.classList.contains('btn2')) {
    removeItem(e.target.parentElement);
  } else {
    console.log(e.target);
    setItemEdit(e.target);
  }
}

function setItemEdit(item) {
  isEditMode = true;

  itemList
    .querySelectorAll('li')
    .forEach((item) => item.classList.remove('editMode'));

  item.classList.add('editMode');
  itemInput.value = item.firstChild.data;
  btn.style.backgroundColor = '#228B22';
  btn.textContent = 'update Item';
}

function removeItem(item) {
  if (confirm('Are you sure?')) {
    item.remove();

    removeItemFromLocalStorage(item.firstChild.data);

    checkUI();
  }
}

function removeItemFromLocalStorage(item) {
  let itemFromStorage = getItemFromLocalStorage();
  itemFromStorage = itemFromStorage.filter((id) => id !== item);
  localStorage.setItem('items', JSON.stringify(itemFromStorage));
}

//creating button..................

function addButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  button.appendChild(document.createTextNode('X'));
  return button;
}

function checkUI() {
  itemInput.value = '';

  const items = itemList.querySelectorAll('li');

  if (items.length === 0) {
    clearAll.style.display = 'none';
    searchForm.style.display = 'none';
  } else {
    clearAll.style.display = 'block';
    searchForm.style.display = 'block';
  }
  btn.textContent = '+AddItem';
  btn.style.backgroundColor = '#333';

  isEditMode = false;
}

itemForm.addEventListener('submit', addItemToList);
clearAll.addEventListener('click', clearAllItem);
itemList.addEventListener('click', onClickItem);
searchForm.addEventListener('input', searchItems);
document.addEventListener('DOMContentLoaded', displayItems);
