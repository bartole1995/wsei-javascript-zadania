//zadanie 1
let car = {
    name: "BMW",
    age: 6
}

console.log(car.name);
console.log(car.age);
//zadanie 2 
let car = {
    name: "BMW",
    age: 6,
    changeName: function(newName) {
        this.name = newName;
    }
}

car.changeName("polonez");
console.log(car.name);
console.log(car.age);
//zadanie 3
const numArr = {
    sum: 0,
    sumArr(arr) {
        return numArr.sum = arr.reduce((acc, currentVal) => acc += currentVal, 0);
    }
}

numArr.sumArr([5, 88, 1, 33, 7, 11]);
console.log(numArr.sum);

//zadanie4
let car = {
    name: "BMW",
    age: 12,
    color: "silver",
}
for (const prop in car)
    console.log(`${prop}: ${car[prop]}`);

//zadanie5
let car = {
    name: "BMW",
    age: 12,
    color: "silver",
    engine: {
        type: "diesel",
        capacity: 1.8,
    }
}

console.log(car.engine.type);
console.log(car.engine.capacity);

//zadanie6


car.type = "combi";
car.engineSound = function () {
    return "Hello";
}

console.log(car.type);
console.log(car.engineSound());