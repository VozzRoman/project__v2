export function createMarkUp(array, container, basket) {
  const markUp = array
    .map(item => {
      return `
		      <li class="product__item" data-id=${item.id}>
            <div class="products__body">
              <h3>${item.brand}</h3>
				  <div class="product__image-box">
              <img
                src=${item.images[0]}
                alt=${item.title}

              />
				  </div>
              <h4>${item.title}</h4>
              
            </div>
				<p class="product__price">${item.price} <span>USA</span></p>
            <div class="product__controls">
				
              <button class="add__button" ${
                basket.find(elem => elem.id === item.id) ? 'disabled' : null
              }
              
            >
                <svg class="product__basket" version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32">
							<title>basket</title>
							<path d="M29 14h-26c-0.553 0-1-0.447-1-1s0.447-1 1-1h2l6-11c0-0.553 0.447-1 1-1h2c0.553 0 1 0.447 1 1l-6 11h14l-6-11c0-0.553 0.447-1 1-1h3c0.553 0 1 0.447 1 1l5 11h2c0.553 0 1 0.447 1 1s-0.447 1-1 1zM3 16h26c0.553 0 1 0.447 1 1l-2 14c0 0.553-0.447 1-1 1h-22c-0.553 0-1-0.447-1-1l-2-14c0-0.553 0.447-1 1-1zM22 28h2c0.553 0 1-0.447 1-1l1-6c0-0.553-0.447-1-1-1h-2c-0.553 0-1 0.447-1 1l-1 6c0 0.553 0.447 1 1 1zM14 27c0 0.553 0.447 1 1 1h2c0.553 0 1-0.447 1-1v-6c0-0.553-0.447-1-1-1h-2c-0.553 0-1 0.447-1 1v6zM7 27c0 0.553 0.447 1 1 1h2c0.553 0 1-0.447 1-1l-1-6c0-0.553-0.447-1-1-1h-2c-0.553 0-1 0.447-1 1l1 6z"></path>
					</svg>
              </button>
              <button class="remove__button" ${
                basket.find(elem => elem.id === item.id) ? null : 'disabled'
              }>
               <svg class="product__basket" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<title>bin</title>
<path d="M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z"></path>
<path d="M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z"></path>
</svg>
              </button>
            </div>
          </li>
		
		`;
    })
    .join('');
  container.innerHTML = markUp;
}

export function createBasketMarkUp(array, container) {
  const markUp = array
    .map(item => {
      return `
		      <li class="basket__item" data-id=${item.id}>
            <div class="basket__body">
				<div class="basket__image-box">
				 <img
                src=${item.images[0]}
                alt=${item.title}

              />
				  </div>
              <h2 class="basket__title">${item.title}</h2>
              
				<div>
				<p class="basket__count-price">${item.totalPrice} <span>USA</span></p> 
				<div class="basket__controls">
              <button class="add__count">
                +
              </button>
				  <span class="product__value">${item.count}</span>
              <button class="remove__count">
                -
              </button>
				 <button class="basket__delete">
          <svg class="basket__delete-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<title>bin</title>
<path d="M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z"></path>
<path d="M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z"></path>
</svg>
</button>
</div>
            </div>
            </div>

				
          </li>
		
		`;
    })
    .join('');
  container.innerHTML = markUp;
}

export function navLink() {
  const namvEl = document.querySelectorAll('.navigation__link');
  let url = document.location.href;
  console.log(url);

  for (const el of namvEl) {
    if (el.href === url) {
      el.classList.add('active');
    } else if (url === 'http://localhost:1234/') {
      namvEl[0].classList.add('active');
    }
  }
}
