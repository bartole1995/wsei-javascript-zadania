//zadanie 1

 const task1Elements = document.querySelectorAll(".more-divs");
 const tagArray = [];

 function task1(...elements){
     elements.forEach(el => tagArray.push(el));
     console.log(tagArray);
 }

 task1(task1Elements);

//zadanie2

 const task2Element = document.querySelector(".short-list");

 function task2(list){
     punkt1
     console.log(list.innerHTML);
     punkt2
     console.log(list.outerHTML);
     punkt3
     console.log(list.className);
     punkt4
     console.dir(list.classList);
     punkt5
 	console.log(list.dataset);
 }

 task2(task2Element);


//zadanie 3

 const datasetCheck =  document.getElementById("datasetCheck");
 let sum = 0;
 let subtraction = 0;
 const numbers = [parseInt(datasetCheck.dataset.numberOne), parseInt(datasetCheck.dataset.numberTwo), parseInt(datasetCheck.dataset.numberThree)];

 function add(num1, num2, num3){
     sum = (num1+num2+num3);
 }

 function del(num1, num2, num3){
     subtraction = num1-num2-num3;
 }
 add(numbers[0], numbers[1], numbers[2]);
 del(numbers[0], numbers[1], numbers[2]);

 console.log(`Sum: ${sum}`);
 console.log(`Del: ${subtraction}`);

//zadanie 4
 document.getElementById("spanText").textContent = "lorem ipsum dolor amet";
//zadanie 5
 document.getElementById("spanText").classList.add("foo"); 

//zadanie 6
 const listOfClasses = document.getElementById("classes").classList;
 const classesArray = [];
 let classesStr = "";
function showClasses(el){
     el.forEach(cl => {
         classesArray.push(cl);
         console.log(`${cl}\n`);
         classesStr += `${cl}+`;
         document.getElementById("classes").removeAttribute("class");
     });
     console.log(classesStr);
     console.log("Usuniêto wszystkie klasy!");    
 }
 showClasses(listOfClasses);

//zadanie 7
 const longList = document.querySelectorAll("#longList li");
 function task7([...liEl]){
     liEl.forEach(li => li.dataset.text = "text");
 }
 task7(longList);
//zadanie 8

 const lorem = "lorem";

 function task8(str){
     const strObj = {
         newClass: str,
     }
     setClass(strObj.newClass);
 }
 function setClass(cl){
     const klass = cl;
     document.getElementById("myDiv").classList.add(klass);
 }
 task8(lorem);

//zadanie 9
 const numbersEl = document.getElementById("numbers");
 const num = Math.floor(Math.random()*10);

 function setClass(nr){
     nr%2==0 ? numbersEl.classList.add("even") : numbersEl.classList.add("odd");
 }
setClass(num);
