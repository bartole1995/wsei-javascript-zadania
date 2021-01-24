//Zadanie 1
let sayHi = () => {
    console.log("Uda³o siê!");
};

sayHi();
// Zadanie 2:
function print(liczba) {
    console.log(liczba);
}

print('test liczba');
//zadanie 3
let txt = 'omg';
returnString  = (txt) => {
    return txt;
}
console.log(returnString(txt));
//zadanie 4
function myString(paramStr) {
    
    let counter = 0;
 let myInterval =  setInterval(() => {
           counter++;
           if(counter == 5) {
                console.log("Koniec");
               clearInterval(myInterval);
           } else {
                console.log(paramStr);
           }
           
    }, 3000);
}

myString('Jakiœ string');