let modalQt = 1;
const element = (el) => document.querySelector(el);
const elementAll = (el) => document.querySelectorAll(el);
//listagem das pizzas
pizzaJson.map((item, index) => {
    let pizzaItem = element('.models .pizza-item').cloneNode(true);
    // preencher as informações em pizzaitem

    pizzaItem.querySelector('.pizza-item--img img').src = item.img;

    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    pizzaItem.querySelector('a').addEventListener('click', (e)=> {
        e.preventDefault();
        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        modalQt = 1;

        element('.pizzaBig img').src = pizzaJson[key].img;
        element('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        element('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        element('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
        element('.pizzaInfo--size.selected').classList.remove('selected');
        elementAll('.pizzaInfo--size').forEach((size, sizeIndex)=>{
            if(sizeIndex == 2){
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        })

        element('.pizzaInfo--qt').innerHTML = modalQt;

        element('.pizzaWindowArea').style.opacity = 0;
        element('.pizzaWindowArea').style.display = 'flex';
        setTimeout(() => {
            element('.pizzaWindowArea').style.opacity = 1;
        }, 200);
    })

    element('.pizza-area').append(pizzaItem);
});
//eventos do modal
function closeModal(){
    element('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=> {
        element('.pizzaWindowArea').style.display = 'none';
    }, 500)
}
elementAll('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=> {
    item.addEventListener('click', closeModal); 
});