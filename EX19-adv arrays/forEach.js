// exercise 19 advanced methods of arrays

// forEach

let number = [1,2,3,4,5];

number.forEach((num)=> {
    console.log('number: ' +num * 5);
});


// exercise 20 map

let fruit = ['apple', 'banana', 'cherry', 'mango', 'watermelon'];

let fruits = fruit.map(frut => frut.length);
    console.log(fruits);


 // exercise 21 reduce
 
 let numbers = [1,2,3,4,5];

 let result = numbers.reduce((total , num) => total * num, 1);
    console.log(result);