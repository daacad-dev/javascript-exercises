// exercise 24 defualt parameters

function calculateArea(width, height = width) {
    return width * height;
}
let TotalArea = calculateArea(5);
    console.log(TotalArea);

let totalArea = calculateArea(5,10);
    console.log(totalArea);