const element = (el) => document.querySelector(el);
const elementAll = (el) => document.querySelector(el);

pizzaJson.map((item, index) => {
    let pizzaItem = element('.models .pizza-item').cloneNode(true);
    // preencher as informações em pizzaitem

    element('.pizza-area').append( pizzaItem );
});