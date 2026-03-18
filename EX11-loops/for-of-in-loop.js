// exercise 15 for of loop & for in loop

let people = [
  {  name: "muad", age: 23, city: "mogadishu",  },
  {  name: "ahmed", age: 30, city: "hiiraan",  },
  {  name: "anas", age: 27, city: "ceelbuur",  },
];

for (let person of people) {
  console.log(`name: ${person.name} age: ${person.age} city: ${person.city}`);
}
