// let tagObject = document.getElementsByTagName('p');
// // tagObject[0].style.color="red";
// // tagObject[3].style.backgroundColor="red";

// for(i=0;i<tagObject.length;i++){
//     if(i%2===0){
//         tagObject[i].style.color="red";
//     }else{
//         tagObject[i].style.color="blue";
//     }
// }


// let listObject = document.getElementsByTagName('p');
// for(i=0;i<listObject.length;i++){
//     listObject[i].style.color="red";
// }


// let htmlObject = document.getElementById('one')
// htmlObject.style.color ='red';
// console.log(htmlObject);

// let object= document.querySelector('.one');
// console.log(object);

// let content = document.getElementById('content').innerText;
// console.log(content);

// let name = document.getElementById('phone').getAttribute('name');
// let number = document.getElementById('phone').getAttribute('number');
// console.log(number);

// document.getElementById('phone').setAttribute('numer','1000');
// let newNumer = document.getElementById('phone').getAttribute('numer');
// console.log(newNumer);

function makeRedColor (){
    document.getElementById('content').style.color ='red';
}
function makeBlueColor (){
    document.getElementById('content').style.color ='blue';
}
function makeOrangeColor(){
    document.getElementById('content').style.color='orange';
}