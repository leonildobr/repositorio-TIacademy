let frutas = [
    "Banana",
    "Araticum",
    "Amora",
    "Cajá",
    "Carambola",
    "Cupuaçu",
    "Coco",
    "Melão",
    "Melancia",
]

const modifyArray = (sendArray,NewNameArray,indiceNum)=>{
document.write(`Quantidade de elementos na array...: ${sendArray.length}<br>`);
document.write(`Você escolheu o indce ${indiceNum} que é o elemento ${sendArray[indiceNum]}<br>`);
document.write(`O nome ${NewNameArray} foi inserido na array<br>`);
sendArray.push(NewNameArray);
document.write(`A quantitdade de elementos na string agora é de...: ${sendArray.length}<br>`);
}
modifyArray(frutas, prompt("escreva uma fruta") , prompt("escolha um indice entre 0 e 8"));
modifyArray(frutas, prompt("escreva uma fruta") , prompt("escolha um indice entre 0 e 8"))