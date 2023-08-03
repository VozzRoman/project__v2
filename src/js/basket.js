import { createBasketMarkUp, navLink } from './helper';
import { key } from './localKey';
navLink();
const basketContainer = document.querySelector('.basket__list-js');

const counter = document.querySelector('.navigation__count');
const totalValue = document.querySelector('.basket__total-price');

console.log(counter);
console.log('basket');

const basketData = JSON.parse(localStorage.getItem(key.basket));
if (basketData.length < 1) {
  return (totalValue.innerHTML = 'basket is emty');
}
totalValue.innerHTML = `<h2 class="basket__total">total: <span>${basketData.reduce(
  (prev, next) => prev + next.totalPrice,
  0
)}</span> USA</h2`;

counter.textContent = basketData.length;

createBasketMarkUp(basketData, basketContainer);

basketContainer.addEventListener('click', onClick);

function onClick(e) {
  if (e.target.className === 'basket__delete') {
    console.log('click');
    const object = e.target.closest('li');
    console.log(object);
    const id = Number(object.dataset.id);
    console.log(id);
    const index = basketData.findIndex(item => item.id === id);
    basketData.splice(index, 1);
    localStorage.setItem(key.basket, JSON.stringify(basketData));
    counter.textContent = basketData.length;

    createBasketMarkUp(basketData, basketContainer);

    if (basketData.length < 1) return (totalValue.innerHTML = 'basket is emty');
    totalValue.innerHTML = `<h2 class="basket__total">total price: <span>${basketData.reduce(
      (prev, next) => prev - next.totalPrice,
      0
    )}</span> USA</h2`;
  }
  if (e.target.className === 'add__count') {
    const object = e.target.closest('li');

    const span = e.target.nextElementSibling;
    const p = e.target.parentNode.previousElementSibling;
    //  console.log('---->', p.parentNode.previousElementSibling);
    const id = Number(object.dataset.id);
    basketData.map(item => {
      if (item.id === id) {
        return {
          ...item,
          count: (item.count += 1),
          totalPrice: (item.totalPrice = item.price * item.count),
        };
      }
      return item;
    });
    totalValue.innerHTML = `<h2 class="basket__total">total: <span>${basketData.reduce(
      (prev, next) => prev + next.totalPrice,
      0
    )}</span> USA</h2`;
    const countObject = basketData.find(item => item.id === id);
    span.innerHTML = countObject.count;

    p.innerHTML = `${countObject.totalPrice} <span class="basket__count-currency">USA</span>`;
    localStorage.setItem(key.basket, JSON.stringify(basketData));
  }

  if (e.target.className === 'remove__count') {
    const object = e.target.closest('li');

    const span = e.target.previousElementSibling;
    const p = e.target.parentNode.previousElementSibling;
    console.log(p);

    console.log('DIR', span.textContent);
    console.log(object);
    const id = Number(object.dataset.id);
    basketData.map(item => {
      if (item.id === id) {
        return {
          ...item,
          count: item.count <= 1 ? 1 : (item.count -= 1),
          totalPrice: (item.totalPrice =
            item.count <= 1 ? item.price : item.totalPrice - item.price),
        };
      }

      return item;
    });
    totalValue.innerHTML = `<h2 class="basket__total">total: <span>${basketData.reduce(
      (prev, next) => prev + next.totalPrice,
      0
    )}</span>USA</h2`;
    console.log('minus', basketData);
    const countObject = basketData.find(item => item.id === id);
    span.innerHTML = countObject.count;
    p.innerHTML = `${countObject.totalPrice} <span>USA</span>`;
    localStorage.setItem(key.basket, JSON.stringify(basketData));
  }
}
