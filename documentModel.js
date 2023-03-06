const shoppingValue = document.querySelector('.input_value');
const filterValue = document.querySelector('.input_value1');
const submitForm = document.querySelector('.form_submit');

const btn = document.querySelector('.btn');
const btn1 = document.querySelector('.btn1');

const shoppingItems = document.querySelector('.world');
const noItems = document.querySelector('h5');
const listItems = document.querySelectorAll('li');

// shoppingValue.addEventListener('change', (e) => {
//   let x = shoppingValue.value;
//   console.log(x);
//   shoppingValue.value = '';
// });

btn.addEventListener('click', (e) => {
  if (shoppingValue.value.length === 0) {
    noItems.textContent = `pls enter the items`;
    setTimeout(() => {
      noItems.textContent = '';
    }, 1000);
  } else {
    let list = document.createElement('li');
    list.className = 'filterBox';
    let listValue = document.createElement('h4');
    listValue.textContent = shoppingValue.value;
    let btn = document.createElement('button');
    btn.className = 'btn2';
    btn.textContent = 'X';
    list.append(listValue, btn);
    shoppingItems.appendChild(list);
    shoppingValue.value = '';
  }
});

shoppingItems.addEventListener('click', (e) => {
  shoppingItems.removeChild(e.target.parentElement);
});

submitForm.addEventListener('input', (e) => {
  e.preventDefault();
  const text = e.target.value.toLowerCase();
  console.log(text);
  listItems.forEach((items) => {
    console.log(items);
    const itemName = items.firstElementChild.textContent.toLowerCase();

    if (itemName.indexOf(text) != -1) {
      items.style.display = 'flex';
    } else {
      items.style.display = 'none';
    }
  });
});

btn1.addEventListener('click', () => {
  shoppingItems.innerHTML = ``;
});
