// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));
//
// var groupA = ['hey', 'cool'];
// var groupB = ['cooler'];
//
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['Andrew',25];
var personTwo = ['Jen',29];

function greeter(name, age) {
  console.log('Hi', name + ', you are', age)
}

greeter(...person);

var names = ['Doshi', 'Mike'];

var final = ['Chiran'];

final = [...final, ...names];

final.forEach((name) => {
  console.log('Hi', name);
});
