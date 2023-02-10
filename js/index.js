'use strict';


// elton()

// function elton(){
//     console.log("Salam necesen Orxan?");
// }

// function test(ad){
//     return "Salam necesen "+ad
// }


// console.log(test("Orxan"));
// console.log(test("Eli"));
// console.log(test("Qonce"));

// function topla(a,b=4){
//     return a+b
// }

// console.log(topla(5));


// function cixma(reqem1,reqem2){
//     return reqem1 - reqem2
// }

// console.log(cixma(10,100));

// function bolme(c,d){
//     return c / d
// }

// console.log(bolme(4,3));



// function test(a, b) {
//     return a + b
// }

// const test = a => a
// console.log(test(2));

// DECLERATİON -  EXPRESSİON

// function test(){
//     return "salam"
// }



// let myFunc=function(){
//     return "Salam"
// }

// console.log(myFunc());




// txt1.onclick = function() {
//     this.style.color="red"
// }

// let txt1 = document.querySelectorAll("h1")

// for (let i = 0; i < txt1.length; i++) {
//     txt1[i].onclick = function () {
//         this.style.color = "red"
//     }
// }


// let student = "Murad"
// function test( age = 20,student) {
//     return age + " " + student
// }
// console.log(test(undefined, "Murad"));


// let index=0
// let myArr=['cup','plate','spoon','knife','fork']
// while (index<myArr.length) {
//     console.log(myArr[index]);
//     index++
// }


// let i=0
// let myArr=['siyar','pomidor','Sogan','yerkoku','sarimsaq', 'semeni']
// while (i<myArr.length) {
//     if(myArr[i][0].toLowerCase()==="s"){
//         console.log(myArr[i]);
//     }

//     i++
// }

// let counter=1
// let total=0
// while (counter<101) {
//     total+=counter
//     counter++
// }
// console.log(total);


// const myArr=['kitab', 'defter', 'qelem', 'karandas', 'jurnal', 'pozan', 'vereq']
// let index=0

// while (index<myArr.length) {
//     let element =myArr[index]
//     index++;
//     if(element.length!==5){
//         console.log(`daxil etdiyiniz ${element} 5 herfli deyil`);
//         continue;
//     }
// let netice=element[element.length-1]
// console.log(netice);

// }
// let number = 100000

// while (number > 0) {
//     if (number % 9999 == 0) {
//         console.log(number);
//         break;
//     }
//     number--
// }

let sentence='Men her gun Javascript oyrenirem'

let saitler="aıoueəiöü"

let total=''

let counter=0

while(counter<sentence.length){
    if(!saitler.includes(sentence[counter])){
        total+=sentence[counter]
    }
    counter++
}
console.log(total);

