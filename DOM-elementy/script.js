// zadanie 1
const divs = document.querySelectorAll('.more-divs');

function listOfDivs(paramArr) {
    let newArray = [];
    
    for (let i = 0; i < paramArr.length; i++) {
        newArray.push(paramArr[i].tagName);
    }
    return newArray;
}

console.log(listOfDivs(divs));
// zadanie 2

function task2(param){
    //1
    console.log(param.innerHTML);
    //2
    console.log(param.outerHTML);
    //3
    console.log(param.className);
    //4
    console.log([...param.classList]);
    //5
    console.log(param.dataset);

}

task2(document.querySelector(".short-list"))
// zadanie 3
const numbersDataset = document.getElementById('datasetCheck');
const thirdTask = takeNumbers => {
    const firstNumber = parseInt(takeNumbers.dataset.numberone)
    const secondNumber = parseInt(takeNumbers.dataset.numbertwo)
    const thirdNumber = parseInt(takeNumbers.dataset.numberThree)
    let adding = firstNumber + secondNumber + thirdNumber
    let substraction = firstNumber - secondNumber - thirdNumber;
    return [adding, substraction];
}
console.log(thirdTask(numbersDataset));
// zadanie 4

document.getElementById("spanText").innerText =  "dowolny";

// zadanie 5

document.getElementById("spanText").className =  "newClassName";
// zadanie 6
var element = document.getElementById("classes");
var list = element.classList;

var concat = [];
for (let i = 0; i< list.length; i++)
    {
        concat.push(list[i]);
        console.log(list[i]);
    }
console.log(concat.join('+'));
element.className = 'Usunieto wszystkie klasy';
// zadanie 7 
const list = document.querySelectorAll('#longList > li')

function addAttributes(elements) {

    elements.forEach( element => {
        if(!element.getAttribute("data-text")){
            element.dataset.text = "text";
        }
    })

}
const result = addAttributes(list);
// zadanie 8
function zad8(className) {
    let obj = {newClass: className};
    zad8_1(obj);
}

function zad8_1(obj) {
    let zmienna = obj.newClass;
    document.getElementById('myDiv').className = zmienna;
}

zad8('string_z_parametru');
// zadanie 9
function addClass(param){
    param = parseInt(param);
    const numbers = document.querySelector("#numbers");
    if(param %2===0){
        numbers.className = "even";
    }
    else{
        numbers.className = "odd";
    }
    
}
var randomNum = Math.floor(Math.random() * 11);
addClass(randomNum)
// zadanie 10
 const longList = document.querySelectorAll("#longList li");
 const values = [];
 function task10(list){
     list.forEach(child => values.push(child.textContent));
     console.log(values);
 }
 task10(longList);

// zadanie 11
 const longList = document.querySelectorAll("#longList li");
 function task11(list){
     list.forEach(li => {
         li.dataset.text = li.textContent;
         li.textContent = Math.floor(Math.random()*10);
     })
 }
 task11(longList);