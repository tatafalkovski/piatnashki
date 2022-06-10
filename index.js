const field = document.querySelector('.field');

const itemsArr = [
    [1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15]
];

for (let row = 0; row < itemsArr.length; row++) {
    const htmlRow = document.createElement('div');
    htmlRow.classList.add('row');

    for (let item = 0; item < itemsArr[row].length; item++) {
        const htmlItem = document.createElement('div');
        htmlItem.classList.add('item');
        htmlItem.textContent = itemsArr[row][item];
        htmlRow.appendChild(htmlItem);
    }

    field.appendChild(htmlRow);
} 







//===============MODERN IMPLEMENTATION=======================

// itemsArr.forEach(row => {
//     const htmlRow = document.createElement('div');
//     htmlRow.classList.add('row');
//     row.forEach(item => {
//         const htmlItem = document.createElement('div');
//         htmlItem.classList.add('item');
//         htmlItem.textContent = item;
//         htmlRow.appendChild(htmlItem);
//     })
//     field.appendChild(htmlRow);
// })