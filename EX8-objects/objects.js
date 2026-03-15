// exercise 8 objects accessing

let car ={
    make:'toyota',
    model:'carolla',
    year:2026,
}

console.log(car.make);
console.log(car.model);

console.log(car['year']);

// exercise 9 object methods

let car2 ={
    make: 'ferrari',
    model:' luxury sports car',
    year:2025,
    start: function(){
        console.log('The car has started');
    }
}

console.log(car2);

console.log(car2.start());