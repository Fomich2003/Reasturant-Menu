import { getData } from "../service/server.js";
import filterData from "../service/filterData.js";
import groupData from "../service/groupData.js";
import renderData from "../service/render.js";
import renderHotLinks from "../service/renderHotLinks.js";
import { addGrabbing } from "../service/addGrabing.js";

getData().then(data => {
    let filteredData = filterData(data, "Страви")
    let groupedData = groupData(filteredData)
    renderHotLinks(grouedpData)
    renderData(groupedData)
    addGrabbing()
})