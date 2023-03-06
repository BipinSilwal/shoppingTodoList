const openBox = document.querySelector('button');

const modal = document.querySelector('.bip');
const modalClose = document.querySelector('.tero');

openBox.addEventListener('click', () => {
  modal.classList.add('world');
  openBox.disabled = true;
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('world');
  openBox.disabled = false;
});

// let amount = 100;

// amount = parseInt(amount);

// amount = Number(amount);

// amount = amount.toString();

// let amount = -1;

// amount = Boolean(amount);

// console.log(amount, typeof amount);

// let y;
// let x = new Date();

// let world = x.toString();

// y = x.getFullYear();
// y = x.getMonth() + 1;

// y = x.getDate();
// y = x.getDay();

// y = x.getHours();

// y = x.getMinutes();
// y = x.getSeconds();
// y = x.getMilliseconds();

// y = `${x.getFullYear()}-${x.getMonth() + 1}-${x.getDate()}`;

// y = Intl.DateTimeFormat('en-GB').format(x);

// y = x.toLocaleString('default', {
//   weekday: 'long',
//   year: 'numeric',
//   month: 'short',
//   day: 'numeric',
//   hour: 'numeric',
//   timeZone: 'Asia/Kathmandu',
// });

// y = console.log(y);

// console.log(x);
// console.log(world);

// const arr = [1,2];

// const arr = [1, 2, 3, 4, 5];

// let x;

// console.log(arr);
// // console.log(arr.push(3));
// console.log(arr);
// console.log(arr.length);
// // console.log(arr.pop());
// console.log(arr);

// x = arr.includes(2);
// x = arr.indexOf(3);

// x = arr.slice(2, 3); // doesn't change original array.
// console.log(x);
// console.log(arr);

// x = arr.splice(1, 5).reverse().toString().charAt(2); // pluck out value from original array.
// console.log(x);
// console.log(arr);

// let x;

// const todo = new Object();

// todo.id = 1;
// todo.name = 'bipin';
// todo.completed = false;

// x = Object.keys(todo);
// y = Object.values(todo);
// z = Object.entries(todo);

// console.log(todo['completed']);

// console.log(todo);
// console.log(x.length);
// console.log(y.length);
// console.log(z.length);

// const obj1 = {
//   a: 1,
//   b: 2,
// };

// const obj2 = {
//   c: 1,
//   d: 2,
// };

// const obj3 = { ...obj1, ...obj2 }; // spreadOperator

// console.log(obj3);

// const todos = [
//   { id: 1, name: 'Buy Milk' },
//   { id: 2, name: 'pick kid' },
//   { id: 3, name: 'Take out trash' },
// ];

// console.log(todos[0].name);

// const firstName = 'bipin';
// const lastName = 'silwal';
// const age = 31;

// const person = {
//   firstName,
//   lastName,
//   age,
// };

// const todo = {
//   id: 1,
//   title: 'Take out recyclebin',
//   user: {
//     name: 'John',
//   },
// };

// const { title, id, user } = todo;
// const world = { message: todo.title };

// console.log(id);

// const numbers = [1, 2, 3, 4, 5];

// // const [...nums] = numbers;

// let nums = numbers;

// nums.push(100);

// console.log(nums);

// console.log(numbers);

// const post = {
//   id: 1,
//   firstName: 'bipin',
//   lastName: 'silwal',
//   age: 30,
// };

// const x = JSON.stringify(post);

// const y = JSON.parse(x);

// const information = async () => {
//   const response = await fetch('./todo.json');

//   const data = await response.json();
//   console.log(typeof data);

//   const z = data.map((value) => value.firstName);
//   console.log(z);
// };

// information();

// const library = [
//   {
//     title: 'ktm',
//     author: 'bipin',
//     status: {
//       own: true,
//       reading: false,
//       read: false,
//     },
//   },
//   {
//     title: 'pulsar',
//     author: 'biplov',
//     status: {
//       own: true,
//       reading: false,
//       read: false,
//     },
//   },
//   {
//     title: 'yamaha',
//     author: 'asmita',
//     status: {
//       own: true,
//       reading: false,
//       read: false,
//     },
//   },
// ];

// library[0].status.read = true;
// library[1].status.read = true;
// library[2].status.read = true;

// // library.map((value) => (value.status.read = true));
// console.log(library);

// const { title: firstBook } = library[0];

// console.log(firstBook);

// const transferData = JSON.stringify(library);
// console.log(transferData);

//function

// function randomNumbers(...arr) {
//   console.log(arr);
//   const randomIndex = Math.floor(Math.random() * arr.length);

//   console.log(arr[randomIndex]);
// }

// randomNumbers(1, 2, 3, 4, 5, 6);

// const getCelsius = (fahrenheit) => {
//   const celsius = ((fahrenheit - 32) * 5) / 9;
//   console.log(`The Temperature is : ${celsius} \xB0C `);
// };

// getCelsius(105);

// const minMax = (num) => {
//   return {
//     min: Math.min(...num),
//     max: Math.max(...num),
//   };
// };

// const value = minMax([1, 2, 10, 4, 5]);

// console.log(value);

// ((a, b) => console.log(`The area is :`, a * b))(10, 5);

// const x = 100;
// const y = 50;

// function getSum(n1, n2) {
//   const sum = n1 + n2;
//   return sum;
// }

// const sum1 = getSum(x, y);
// const sum2 = getSum(10, 5);

// console.log(sum1, sum2);

// switch (month) {
//   case 1:
//     console.log('January!');
//     break;
//   case 2:
//     console.log('Feburary!');

//   default:
//     console.log('Please select the month!!');
// }

// const calculator = (num1, num2, operator) => {
//   switch (operator) {
//     case '+':
//       const add = num1 + num2;
//       console.log(`sum: ${add} `);
//       break;
//     case '-':
//       const sub = num1 - num2;
//       console.log(`sub: ${sub} `);
//       break;
//     case '*':
//       const multi = num1 * num2;
//       console.log(`multi: ${multi} `);
//       break;
//     case '/':
//       const div = num1 / num2;
//       console.log(`div: ${div} `);
//       break;

//     default:
//       console.log('pls add value and operator');
//   }
// };

// calculator(5, 2, '&');

// for (let i = 0; i <= 10; i++) {
//   if (i === 7) {
//     console.log(` ${i} is my lucky Number`);
//   } else {
//     console.log('Number:', i);
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   console.log('Number', i);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

const names = ['Bipin', 'Biplov', 'Asmita', 'Binod', 'Sabina', 'Shreeva'];

// for (let i = 0; i < names.length; i++) {
//   if (names[i] === 'Bipin') {
//     console.log(`${names[i]}  is the best!!`);
//   } else {
//     console.log(`Names: ${names[i]}`);
//   }
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

// let j = 1;

// while (j <= 100) {
//   if (j % 3 === 0 && j % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (j % 3 === 0) {
//     console.log('Fizz');
//   } else if (j % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(j);
//   }
//   j++;
// }

// for (const name of names) {
//   console.log(name);
// }

// const colorObj = {
//   color1: 'red',
//   color2: 'green',
//   color3: 'blue',
// };

// for (const key in colorObj) {
//   console.log(`${value}: ${colorObj[value]}`);
// }

// for (const key in names) {
//   console.log(names[key]);
// }

// const social = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// social.forEach((item, index) => console.log(`social site: ${item} ${index}`));

// const socialObjs = [
//   { name: 'Twitter', url: 'twitter.com' },
//   { name: 'LinkedIn', url: 'LinkedIn.com' },
//   { name: 'facebook', url: 'facebook.com' },
//   { name: 'Insta', url: 'insta.com' },
// ];

// const socialSite = socialObjs.filter((social) => social.name.length > 7);

// console.log(socialSite);
// console.log(socialSite.length);

// console.log(socialObjs);

// const retailCompanies = companies.filter(company=> company.category === 'Retail');

// const companyEstablish = companies.filter(company => company.start >= '1980' && company.end <= '2005')

// const numbers = [100, 200, 300, 400];

// const sum = numbers.reduce((prev, curr) => {
//   console.log(`${prev} + ${curr}`);
//   return prev + curr;
// }, 0);

// console.log(sum);

// const cart = [
//   { id: 1, name: 'Product1', price: 130 },
//   { id: 2, name: 'Product2', price: 150 },
//   { id: 3, name: 'Product1', price: 160 },
// ];

// const totalPrice = cart.reduce((prev, curr) => {
//   return prev + curr.price;
// }, 0);

// console.log(totalPrice);

// const people = [
//   {
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'john@gmail.com',
//     phone: '111-111-111',
//     age: 30,
//   },
//   {
//     firstName: 'Jane',
//     lastName: 'Poe',
//     email: 'jane@gmail.com',
//     phone: '222-222-222',
//     age: 25,
//   },
//   {
//     firstName: 'Bob',
//     lastName: 'Foe',
//     email: 'bob@gmail.com',
//     phone: '333-333-333',
//     age: 45,
//   },
//   {
//     firstName: 'Sara',
//     lastName: 'Soe',
//     email: 'sara@gmail.com',
//     phone: '444-444-444',
//     age: 19,
//   },
//   {
//     firstName: 'Jose',
//     lastName: 'Koe',
//     email: 'Joe@gmail.com',
//     phone: '555-555-555',
//     age: 23,
//   },
// ];

// const youngPeople = people
//   .filter((person) => person.age <= 25)
//   .map((value) => ({ name: value.firstName, email: value.email }));

// console.log(youngPeople);

// const numbers = [2, -30, 50, 20, -12, -9, 7];

// const positiveNumber = numbers
//   .filter((num) => num > 0)
//   .reduce((prev, curr) => curr + prev, 0);

// console.log(positiveNumber);

// const words = ['coder', 'programmer', 'developer'];

// const allWords = words.map((items) => {
//   return items.charAt(0).toUpperCase() + items.slice(1, items.length);
// });

// console.log(allWords);

// const fil = 'coder';

// const y = fil.slice(1, fil.length);

// console.log(y);
