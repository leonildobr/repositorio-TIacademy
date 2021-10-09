
window.onload = function(){


    const mult = document.querySelector("#multiplicador");
    const btn = document.querySelector("#calcular");
    const resp = document.querySelector("#resposta");

    btn.addEventListener('click', function(){
    let num = Number(mult.value)
    let tab = 0
        if( isNaN(num )){
            resp.innerHTML = `Não dá pra fazer tabuada com isso, tente digitar um NUMERO válido`
        } else { 
            if (num < 1 || num > 10) {
                resp.innerHTML = 'vamos ficar entre as tabuadas mais simples ok?'
            } else {
                let tab = 0;
                resp.innerHTML = `tabuada do ${mult.value}<br>`
                while (tab <= 10){
                    resp.innerHTML += `${num} X ${tab} = ` + num * tab + "<br>";
                    tab++;
                }
            }
        }
    })
}