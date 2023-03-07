const itemForm = document.querySelector('.item-form');
const searchForm = document.querySelector('.search-form');

const itemInput = document.querySelector('.item-input');
const itemList = document.querySelector('.item-list');

const clearAll = document.querySelector('.btn1');

// adding item to list..................

function addItemToList(e) {
  e.preventDefault();
  const newItem = itemInput.value;

  if (newItem === '') {
    alert('Please add an item!!');
    return;
  }

  addItemToDOM('filterBox', newItem);

  itemInput.value = '';
}

// adding items to DOM..............

function addItemToDOM(classes, item) {
  const list = document.createElement('li');
  list.className = classes;
  list.appendChild(document.createTextNode(item));
  const button = addButton('btn2');
  list.appendChild(button);
  // Add to UL
  itemList.append(list);
  console.log(itemList);
}

// clearing All Items...............

function clearAllItem() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
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
  console.log(items);

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
