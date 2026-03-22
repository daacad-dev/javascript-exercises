// exercise 25 

// spread
let number =[1,2,3];

let allNum =[...number, 4,5,6];
        console.log(allNum);

// rest 
function multpaly(number){
    return number.reduce((total,num) => total * num,1);
};

let mult = multpaly([5,3,10,5]);
    console.log(mult);