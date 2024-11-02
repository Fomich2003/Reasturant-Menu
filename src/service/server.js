async function getData() {
    let result = await fetch("/menu/menu.json")
    let data = await result.json()
    return data
}

export { getData }