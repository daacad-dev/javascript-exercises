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



// exercise 10  arrays of objects

let library=[
    {
        title:'the art of war',
        author:'sun tzu',
        year:1703,
    },

    {
        title:'carol dweck',
        author:'mindset',
        year:1920,
    },

]

console.log(library[0].title);
console.log(library[1].author);