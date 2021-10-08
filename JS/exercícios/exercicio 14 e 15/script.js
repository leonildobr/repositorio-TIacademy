function tabuada(num){
    if( typeof num !== 'number'){
        alert(`Não dá pra fazer tabuada com isso, tente digitar um numero válido`)
    } else { 
        if (num < 1 || num > 10) {
            alert('vamos ficar entre as tabuadas mais simples ok?')
        } else {
            let tab = 0;
            document.write(`tabuada do ${num}<br>`)
            while (tab <= 10){
                
                document.write(`${num} X ${tab} = ` + num * tab + "<br>");
                tab++;
            }
        }
    }
}
tabuada(0)