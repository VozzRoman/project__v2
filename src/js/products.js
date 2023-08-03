import { getAllProducts } from './api/service';
import { createMarkUp } from './helper';
import { key } from './localKey';

const productsContainer = document.querySelector('.products__container-js');
const counter = document.querySelector('.navigation__count');
console.log(productsContainer);

let basketProduct = JSON.parse(localStorage.getItem(key.basket)) ?? [];
//
counter.textContent = basketProduct.length;
//
getAllProducts()
  .then(res => {
    const data = res.products.map(item => {
      return {
        ...item,
        count: 1,
      };
    });

    createMarkUp(data, productsContainer, basketProduct); // в хелпер
  })
  .catch(error => console.log(error));

productsContainer.addEventListener('click', onClick);

async function onClick(e) {
  //addTobasket
  if (e.target.className === 'add__button') {
    const object = e.target.closest('li');
    const id = Number(object.dataset.id);

    const response = await getAllProducts();
    const addCount = response.products.map(item => {
      return {
        ...item,
        count: 1,
        totalPrice: item.price,
      };
    });

    const data = addCount.find(item => item.id === id);
    console.log(data);

    const uniqProduct = basketProduct.some(item => item.id === id);
    //  e.target.setAttribute('disabled', true);
    console.log(e.target);
    e.target.setAttribute('disabled', false);

    if (uniqProduct) return;

    basketProduct.push(data);
    if (data) localStorage.setItem(key.basket, JSON.stringify(basketProduct));
    createMarkUp(addCount, productsContainer, basketProduct);
    counter.textContent = basketProduct.length;
  }
  //DeleteFromBasket
  if (e.target.className === 'remove__button') {
    const response = await getAllProducts();
    const addCount = response.products;
    const id = Number(e.target.closest('li').dataset.id);
    console.log(id);
    const index = basketProduct.findIndex(item => item.id === id);

    basketProduct.splice(index, 1);
    localStorage.setItem(key.basket, JSON.stringify(basketProduct));
    //  e.target.previousElementSibling.setAttribute('disabled', false);
    e.target.setAttribute('disabled', true);
    createMarkUp(addCount, productsContainer, basketProduct);
    counter.textContent = basketProduct.length;
  }
}
