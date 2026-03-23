// exercise 26

// synchronous

console.log("start sync");

for(let i = 1; i <= 3; i++) {
    console.log(`sync tasks ${ i }`);
}
console.log("END sync");


// Asynchronous 

console.log("first Async");

setTimeout(() => {
    console.log("middle Async is a non-blocking");
}, 3000);

console.log("last Async");