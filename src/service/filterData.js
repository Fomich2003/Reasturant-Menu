function filterData(data, value) {
let filteredData = data.filter(el => el.category === value)
return filteredData
}

export default filterData