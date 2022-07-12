const element = (el) => document.querySelector(el);
const elementAll = (el) => document.querySelector(el);

pizzaJson.map((item, index) => {
    let pizzaItem = element('.models .pizza-item').cloneNode(true);
    // preencher as informações em pizzaitem

    pizzaItem.querySelector('.pizza-item--img img').src = item.img;

    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('a').addEventListener('click', (e)=> {
        e.preventDefault();
        element('.pizzaWindowArea').style.display = 'flex';
    })

    element('.pizza-area').append(pizzaItem);
});