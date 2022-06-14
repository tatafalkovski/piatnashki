summ(4,8);


// function expression
const printMyName = function (name,lastName) {
    console.log('My name is:'+ name + ' and my surname is:'+ lastName)
};

// printMyName('Mykyta','Lysenko');
// printMyName('Tania','Fedchenko');

// fuction declaration
function summ(a, b) {
    // var c = a+b;
    // console.log(a+ ' + '+ b+ ' = '+ c);
    console.log(a + ' + ' + b + ' = ' + (a + b));
    return a+b;
}



// summ(15,15);


// const funk = summ(5,5);
// console.log('funk = ' + funk);

// ====================================

// var a = 'a1'

// function lol (a = 'b2', b = 'sldkjf') {
    
//     console.log('lol::::', a, b);

// }

// lol('ab', 'sldkjflskdjfslkdjflskdj');


// ============================================

function summ2(a){
    return function(b) {
        return function(c) {
            return a + b + c ;
        }
    }
}

console.log(summ2(4)(5)(10));



function recursion(a){
    console.log('recursion::::::::::', a);
    return recursion;
}

console.log(recursion(4)(5)(10)(5)(5)(6)(9)(1)(2)(3)(3)(6)('tania'));










