// exercise 22 arrays destructuring 

let colors=['blue', 'green', 'red'];

let [c1, c2, c3] = colors;
    console.log(`Best colors is: ${c1} and ${c3}`);


// exercise 23 object destructuring
let car = { make: "Toyota", model: "Corolla", year: 2020 };

let {make, model, year} = car;
    console.log(make);
    console.log(model);