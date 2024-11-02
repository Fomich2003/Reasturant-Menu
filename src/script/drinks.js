import { getData } from "../service/server.js";
import filterData from "../service/filterData.js";
import groupData from "../service/groupData.js";
import renderData from "../service/render.js";

getData().then(data => {
    let filteredData = filterData(data, "Напої")
    let groupedData = groupData(filteredData)
    renderData(groupedData)
})