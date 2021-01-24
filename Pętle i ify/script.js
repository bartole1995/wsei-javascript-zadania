//zadanie 1
var x=1;
var y=2;

if(x>y) {
   console.log("x jest wieksze"); 
} else {
    console.log("x jest mniejsze");
}
//Zadanie 2
let num1 = 112;
let num2 = 115;
let num3 = 20;

if(num1 > num2 && num1 > num3) {
    console.log('num1 jest najwiêksze');
} else if(num2 > num3) {
    console.log('num2 jest najwiêksze');
} else {
    console.log('num3 jest najwiêksze');
}
//Zadanie 3
for (let i=0; i<11; i++) {
    console.log("Lubiê JavaScript");
}
//Zadanie 4
var result = 0;

for(var i = 0; i <11; i++) {
    result += i;
    console.log(result);
}
//Zadanie 5
var n = 5;
for(let i = 0; i <= n; i++){
    console.log(`${i} - ${i%2 === 0 ? 'parzysta' : 'nieparzysta'}`);
    
}

 warunek ? true : false !=0 ??
//Zadanie 6
for (var i = 0; i < 3; i++) {
    for (var j= 0; j < 4; j++) {
        console.log("i=" + i +", j=" +j);
    }
}
//Zadanie 7
for(let i = 0; i < 100; i++){
    if(i%3 === 0 && i%5 === 0) {
        console.log("FizzBuzz");
    }
    else if(i%3 === 0){
        console.log("Fizz");
    }
    else if(i%5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
//Zadanie 8
// a)
let stars = '*';
let spacer = ' ';
for (var a = 0; a < 5; a++) {
    var result = '';
    for (var b = 0; b <= a; b++) {
        result += stars;
    }
    console.log(result);
}

// b)
let stars = '*';
let spacer = ' ';
for (var c = 0; c < 5; c++) {
    var result = '';
    for (var d = 5 - 1; d > c; d--) {
        result += spacer;
    }
    for (var e = 0; e <= c; e++) {
        result += stars + spacer;
    }
    console.log(result);
}

// c)
let stars = '*';
let spacer = ' ';
for (var c = 0; c < 5; c++) {
    var result = '';
    for (var d = 5 - 1; d > c; d--) {
        result += spacer;
    }
    for (var e = 0; e <= c; e++) {
        result += stars;
        result += (e < c) ? stars : '';
    }
    console.log(result);
}

// d)
let stars = '*';
let spacer = ' ';
for (var f = 0; f < 11; f++) {
    var result = '';
    for (var g = 0; g < 5; g++) {
        if (f < 5) {
            result += g <= f ? stars : g;
        } else if (f > 5) {
            result = (g < f-6 ? (g-4)*-1 : stars) + result;
        } else {
            result = "-----";
        }
    }
    console.log(result);
}

// e)
let stars = '*';
let spacer = ' ';
for (var c = 0; c < 8; c++) {
    var result = '';
    for (var d = 4; d > c; d--) {
        result += spacer;
    }
    for (var e = 0; e <= c; e++) {
        result += stars + spacer;
    }
    if(c>=5) {
        result = '';
        for (var f = 0; f < 4; f++) {
          result += spacer;
        }
        result += stars;
    }
  
    console.log(result);
}