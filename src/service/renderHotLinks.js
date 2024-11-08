function renderHotLinks(menuList) {
    let categories = document.querySelector(".categories__wrapper")

    for (const key in menuList) {
            categories.innerHTML += `<a href="#${key}">${key}</a>`
        }
    }

    export default renderHotLinks

