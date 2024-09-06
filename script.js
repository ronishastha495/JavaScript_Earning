//print odd no 
// for (let num = 0; num <= 100; num++) {
//     if(num%2 !== 0 ){
//         console.log("num =", num);
//     }
// }

//Q2 random no
let gameNum = 25;
let userNum = prompt("Guess the game  number: ");

while(userNum != gameNum){
    userNum = prompt ("You entered the wrong no. Guess again: ");
}

console.log("Congratulations, you entered the right no")