// Make a loop that will console.log even numbers 1-10

// var age = prompt("What is your age?");
// var firstName = prompt("What is your first name?");

// var isHungry = confirm("Are you hungry?");
// alert(firstName + " hungry? " + isHungry);

// console.log(age)
// console.log(firstName)
// console.log(isHungry)

// for(var i = 0; i <= 10; i++){
//     console.log(i)
// }
// ============================== 
// if(age > 15 && age <= 18){
//     alert("you can learn to drive")
// } else if(age > 18) {
//     alert("you can take your driving test")
// } else {
//     alert("you can't drive")
// }

// switch(true){
//     case age > 15 && age <= 18:
//         alert("you can learn to drive");
//         break;
//     case age > 18:
//         alert("you can take your driving test");
//         break;
//     default:
//         alert("you can't drive")
// }


// var grade = prompt("Enter a grade");

// switch(grade.toUpperCase()){
//     case 'A':
//         alert('Score of 90-100');
//         break;
//     case 'B':
//         alert('Score of 80-89');
//         break;
//     case 'C':
//         alert('Score of 70-79');
//         break;
//     case 'D':
//         alert('Score of 60-69');
//         break;
//     default:
//         alert('Score of under 60')
// }

// var question = confirm("Would you like to start");
// var list = [];

// alert("starting the app");
// while(list.length < 3 && question === true){
//     var colorQuestion = prompt("Give me a color");
//     list.push(colorQuestion);

//     if(list.length === 3){
//         console.log(list);
//     }
// }

// var count = 4;

// do{
// count++
// console.log(count)
// } while(count < 3)

// var students = ["Nylah", "Tobi", "Sabella"];

// for (let i = 0; i < students.length; i++) {
//    console.log("The students name is " + students[i]) 
// };

for(var i = 1; i <= 10; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}