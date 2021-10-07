let number1 = prompt("primeiro numero");
let number2 = prompt("segundo numero")

function verifyNum(num1, num2) {
    if (num1 == num2){
        console.log("o numero "+num1+" é igual que o numero "+num2);
    } else if (num1 > num2) {
        console.log("o numero "+num1+" é maior ao numero "+num2)
    } else {
        console.log("o numero "+num1+" é menor que o numero "+num2);
    }
}

verifyNum(number1, number2)