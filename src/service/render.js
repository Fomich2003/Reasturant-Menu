function renderData(data) {
    let products = document.querySelector(".products")

    for (let key in data) {
        let productsWrapper = document.createElement("div")
        let productsList = document.createElement("div")


        productsWrapper.classList.add("products__wrapper")
        productsList.classList.add("products__list")
        productsWrapper.id = key
        productsWrapper.innerHTML += `<h2>${key}</h2>`

        data[key].forEach(el => {
            productsList.innerHTML += ` <div class="products__list-item">
                            <img src="${el.image}"                                
                            alt="${el.name}">
                            <h3>${el.name}</h3>
                            <div class="row">
                                <span class="products__list-count">
                                    ${el.quantity}
                                </span>
                                <span class="products__list-prize">
                                    ${el.price}
                                    <span>грн</span>
                                </span>
                            </div>
                        </div>`
        });

        productsWrapper.append(productsList)
        products.append(productsWrapper)
    }
}

export default renderData