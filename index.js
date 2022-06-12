function shuffle(array) {
    const arr = array.slice();

    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

//======================================================


const field = document.querySelector('.field');

const btnStart = document.querySelector('.start');



//======================================================

function getItemsArr(isRandom){
    let initArr = [
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
    ];

    if(isRandom) initArr = shuffle(initArr);
    
    const itemsArr = [[],[],[],[]];
    for(var i = 0; i < initArr.length; i++) {
        itemsArr[Math.floor(i/4)].push(initArr[i]); 
    }

    return itemsArr;
}

const itemsArr = getItemsArr(false);

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


btnStart.addEventListener('click', function () {
    const newArr = getItemsArr(true);

    field.innerHTML = '';

    newArr.forEach(row => {
        const htmlRow = document.createElement('div');
        htmlRow.classList.add('row');
        row.forEach(item => {
            const htmlItem = document.createElement('div');
            htmlItem.classList.add('item');
            htmlItem.textContent = item;
            htmlRow.appendChild(htmlItem);
        })
        field.appendChild(htmlRow);
    })
});


//===============MODERN IMPLEMENTATION=======================




