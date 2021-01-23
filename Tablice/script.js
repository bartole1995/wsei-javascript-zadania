//zadanie 1
let = myTable = [1,2,3,4];
console.log(myTable);
//zadanie 2
let = myTable = [1,2,3,4];
console.log(myTable[0]);
console.log(myTable[myTable.length-1]0;
console.log(myTable);
for ( i=0, i<myTable.length; i++){
	if(i%2 == 0){
		console.log(myTable[i])
}
if(typeof(myTable[i]) == ‘string’){
		console.log(myTable[i])
}
if(typeof(myTable[i]) == ‘string’){
		console.log(myTable[i])
}
//Zadanie 3
a)
const arr = [13, 51, 3, -2, 5, 6, 8];
// 1
console.log(arr.reduce((a, b) => a + b));
b)
const arr = [13, 51, 3, -2, 5, 6, 8];
// 1
console.log(arr.reduce((a, b) => a - b));



c)
const arr = [13, 51, 3, -2, 5, 6, 8];
// 1
console.log(arr.reduce((a, b) => a + b  / arr.length));

d)
arr/filter((v, i) => v% 2 === 0.forEach(v=> {
	console.log(v);
});
e)
arr/filter((v, i) => v% 2 !== 0.forEach(v=> {
	console.log(v);
});
f)
let biggest = 0;
arr.forEach(v +> {
	if (v > biggest ) {
		biggest =v;
}
g)
let smallest = 0;
arr.forEach(v => {
    if (v < smallest) {
        smallest = v;
    }
});
console.log(smallest);
h)
const arrLength = arr.length - 1;
arr.forEach((v, i) => {
    console.log(arr[arrLength - i]);
});
//Zadanie 4
function myTable(paramTable){
	let result = 0;
	for(i=0; i<paramTable.length; i++){
	
	result = result + paramTable[i]
}
console.log()
	
};

myTable([1,2,3,4]);
//zadanie 5
function myTable(paramTable){
    var sum =0;
    for (i=0; i<paramTable.length; i++){
        sum = sum + paramTable[i];
    };
    
    var average = sum /paramTable.length;
    
    for(i=0; i<paramTable.length; i++){
        console.log(paramTable[i]*average)
    }
};
myTable([1,2,3,4]);
//zadanie 6 
myTable([1,2,3,4]);

function myTable(paramTable){
    var sum =0;
    var length = 0;
    for (i=0; i<paramTable.length; i++){
        if(paramTable[i] % 2 == 0){
            
            sum = sum + paramTable[i];
            length++;
        }
            
    }
    let avg = sum / length;
    console.log(avg)
};
// Zadanie 7:
let arr = [4, 17, 3, 2, -5, 23];
function sort(array) {
    return array.sort((a, b) => a - b);
}

console.log(sort(arr));

// Zadanie 8:

function sumIndexesOfTwoArrays(arr1, arr2) {
    let arrSum = 0;
    arr1.forEach((v, i) => arrSum += i);
    arr2.forEach((v, i) => arrSum += i);
    return arrSum;
}
// 0 + 0 + 1 + 2
console.log(sumIndexesOfTwoArrays(['el'], ['el', 'el', 'el']));

// Zadanie 9:
let arr = [4, 17, 3, 2, -5, 23];
function dropFromArray(array, el) {
    return array.filter((item) => item != el);
}

console.log(dropFromArray(arr, 17));
//zadanie 10
function reserveSing(paramTable)
{
  return  paramTable.map(el => {
    return el * (-1);
  })
}
console.log(reserveSing([1,2,3,4,6,-6]));
