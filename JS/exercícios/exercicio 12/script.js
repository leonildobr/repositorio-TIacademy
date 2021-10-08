let palavra = prompt("escreva uma palavra")

const brincarComPalavra = (palReceb) => {
    document.write(`Esta palavra tem ${palReceb.length} caracteres<br>`);
    let novaPal = palavra.toUpperCase()
    document.write(`A palavra ${palReceb} foi modificada para ${palReceb.toUpperCase()}<br>`);
    let terceiraLetra = novaPal[2]
    document.write(`a 3º letra da palavra ${novaPal} é ${terceiraLetra}<br>`);
    document.write(`a palavra ${novaPal} foi modificada para ${novaPal.replace(terceiraLetra,'X')}`)

}
brincarComPalavra(palavra)