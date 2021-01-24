 // zadanie 1
do not comment out 'root' 
const root = document.getElementById("root");

zadanie1
 const div = document.createElement("div");
 div.textContent = "To jest nowy element";
 root.appendChild(div);

// zadanie 2

const favFruits = ['apple', 'banana', 'mango', 'orange', 'pineapple', 'strawberry'];
 function makeList(list){
     const ol = document.createElement("ol");
      root.appendChild(ol);
     list.forEach(el =>{
         const li = document.createElement("li");
         li.textContent = el;
         ol.appendChild(li);
     })
     return ol;  
 }
 root.appendChild(makeList(favFruits));


// zadanie 3
nie okreœlony event, dlatego co drugi element usunie siê po kliknieciu 'f'
 document.addEventListener("keydown", function(e){
     if(e.key === "f") console.log(favFruits.filter((fruit, i) => i%2==0));  
 });

// zadanie 4
 const btn = document.createElement("button");
 btn.textContent = "usun";
 root.appendChild(btn);
 btn.addEventListener("click", () => btn.remove());

// zadanie 5
 20 divow max, zeby nie generowac ich milion
 const num = Math.floor(Math.random()*20);
 for(let i=0; i<num; i++){
     const div = document.createElement('div');
     div.textContent = `to jest div numer ${i}`;
     root.appendChild(div);
 }
// zadanie 6

 const span = document.createElement("span");
 const obj = {
     div1: 'to jest div',
     span1: 'to jest span',
     div2: {
         div3: 'to jest div',
     },
     span2: 'to jest span',
 }

 nie dzia³a
  for(var tag in html){
      console.log(tag);
      if(tag.includes("div")){
          const div = document.createElement("div");
          div.classList.add(this.tag);
           console.log(tag);
          div.textContent = this;

          root.appendChild(div);
      }
  }

 const html = `
 <div id="div1">to jest div</div>
 <span id="span1">to jest span</span>
 <div id="div2">
     <div id="div3">to jest div</div>
 </div>
 <span id="span2">to jest span</span>
 `;

 root.innerHTML += html;

// zadanie 7


 const food  = ['pizza', 'hamburger', 'fries', 'chocolate', 'spaghetti', 'ramen'];
 const food2 = [];
 function makeList(list){
     const ol = document.createElement("ol");
     const btn = document.createElement("button");
     btn.textContent = "przenieœ";
     list.forEach(el =>{
         const li = document.createElement("li");
         li.textContent = el;
         ol.appendChild(li);
     });
     root.appendChild(ol);
     ol.parentNode.insertBefore(btn, ol.nextSibling);
 }
 makeList(food);
 makeList(food2);
 const btns = document.querySelectorAll("button");
 btns.forEach((btn, i) => {
     btn.id = `btn${i+1}`;
    
     btn.addEventListener("click", function(){
         const list = btn.previousSibling;
         const listLastElement = list.lastChild;
         console.log(list.children.length);
         if(list.children.length <= 1) btn.disabled = true;
         else if(list.children.length > 1) btn.disabled = false;   

         if(btn.id === "btn1"){
             const listToAdd = btn.nextElementSibling;
             listToAdd.appendChild(listLastElement);
         }else if(btn.id === "btn2"){
             const listToAdd = btn.parentNode.firstChild;
             listToAdd.appendChild(listLastElement);
         }
     });
 });
 // zadanie 8
 const p = document.createElement("p");
 p.innerHTML = "wprowadz element do dodania, oddzielajac poszczegolne wartosci spacjami";
 const textarea = document.createElement("textarea");
 textarea.id = "txtarea";
 textarea.placeholder = "element tekst kolor-czcionki iloœæ";
 textarea.cols = 44;
 const button = document.createElement("button");

 button.textContent = "dodaj elementy";
 button.addEventListener("click", addElements);

 root.appendChild(p);
 root.appendChild(textarea);
 root.appendChild(button);

 function addElements(){
     const inputVal = document.getElementById("txtarea").value;
     const values = inputVal.split(" ");
     if(values.length > 4) return alert("za du¿o danych dla elementu");
     for(let i=0; i<values[3]; i++){
         const el = document.createElement(values[0]);
         el.textContent = values[1];
         el.style.color = values[2];
         root.appendChild(el);
     }
     document.getElementById("txtarea").value = "";
 }
 // zadanie 11
 const lorem = "lorem ipsum14 dolor amet";

 function validateString(str){
   let sum = 0;
   let divCounter = 1;
   const strSplit = str.split("");
   strSplit.forEach(c => {
     if(!isNaN(parseInt(c))){
       c = parseInt(c);
       sum += c;
       divCounter *= c;
     }
     
   });
   console.log(`Suma liczb:  ${sum}`);
   console.log(`Iloczyn liczb: ${divCounter}`);
   createDivs(divCounter);
 
 }

 function createDivs(x){
   for(let i=1; i<=x; i++){
     const div =  document.createElement('div');
     div.textContent = `${i} ${lorem}`;
     root.appendChild(div);
   }
 }

 validateString(lorem);


// zadanie 12
 const lorem = "lorem ipsum2 aa213a dolor amet".toLowerCase();
 const findWord = "Basia".toLowerCase();
 const replaceWord = "Kasia".toLowerCase();
 const notFoundText = `S³owo ${findWord} nie wystepuje w tekscie`;

 function validateString(str){
 
  const strObj = {
    txt: str,
    checkStr: function(){
      if(this.txt.includes(findWord)) console.log(replaceString(findWord, replaceWord, strObj.txt));
      else{
        const div = document.createElement('div');
        div.textContent = notFoundText;
        root.appendChild(div);
      }
    }
  }
 strObj.checkStr();
 }

 function replaceString(oldS, newS, text) {
   for (var i = 0; i < text.length; i++) {
     if (text.substring(i, i + oldS.length) == oldS)
       text = text.substring(0, i) + newS + text.substring(i + oldS.length, text.length);
   }
   return text;
 }

 validateString(lorem);
 // zadanie 13
 const loremArray = ["Lorem", "Ipsum", "dolor", "amet", "sit"];

 function letterCounter(stringArray){
    const lettersCounted = stringArray.map(function(x){
     return x = x.length;
   });
   console.log(`Liczba liter w poszczegolnym stringu: ${lettersCounted}`);
   sumStringsLength(lettersCounted);
 }

 function sumStringsLength(x){
    const sum = x.reduce(function(acc, currentVal){
      return acc + currentVal;
    }, 0);
   console.log(`Suma wszystkich liczb: ${sum}`);
   getAverage(sum, x.length);
 }

 function getAverage(sum, elements){
   return console.log(`Œrednia: ${(sum/elements)}`);
 }

 letterCounter(loremArray);  


// zadanie 14
 const root = document.getElementById("root");

 const Person = {
   name: '',
   surname: '',
   age: '',
 }

 function setPersonValues(name, surname, age){
   Person.name = name;
   Person.surname = surname;
   Person.age = age;
   Person.nameLength  = name.length;
   Person.surnameLength  = surname.length;
   Person.ageLength  = age.length;
 
   checkLengths(Person.nameLength, Person.surnameLength, Person.ageLength);
 }

 function checkLengths(...lengths){
   lengths.forEach(l => {
     if(l>5){
       const btn = document.createElement('button');
       btn.textContent = "Reset Person object";
       btn.addEventListener("click", resetObject);
       return root.appendChild(btn);
     }
   });
 }

 function resetObject(){
   Person.name = '';
   Person.surname = '';
   Person.age = '';
   delete Person.nameLength;
   delete Person.surnameLength;
   delete Person.ageLength;
   console.log(Person);
 }

 setPersonValues("Bartek", "Frasik", "25");
 console.log(Person);