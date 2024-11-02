function groupData(data) {
    let groupedData = {}

    data.forEach(el => {
        if (groupedData.hasOwnProperty(el.subCategory)) {
            groupedData[el.subCategory].push(el)
        } else {
            groupedData[el.subCategory] = [el]
        }
    });

    return groupedData
}

export default groupData