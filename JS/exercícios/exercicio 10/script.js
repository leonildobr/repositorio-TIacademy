
function valImc(nome,altura,peso) {
    altura = Number(altura);
    peso = Number(peso);
    let imc = peso / (altura*2);
    document.write('<br>nome..: ', nome, '</br>');
    document.write('<br>Altura..: ', altura, '</br>');
    document.write('<br>peso..:', peso, '</br>')
    document.write('<br>IMC..:', imc.toFixed(2) , '</br>')
}
promptnome = prompt("calculador de EMC: vamos começar!!! digite seu nome:")
promptpeso = prompt("calculador de EMC: digite seu peso:")
promptaltura = prompt("calcular seu EMC: agora digite sua altura:")

valImc(promptnome, promptpeso, promptaltura);