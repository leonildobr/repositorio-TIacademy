window.onload = function(){
    let veiculos = ['Transformer', 'moto', 'carro'];
    const btbuscar = document.querySelector("#gerarLista")
    const lista = document.querySelector("#veiculos")
    btbuscar.addEventListener('click', ()=>{
        for(vei of veiculos){
            let li = document.createElement('li');
            lista.appendChild(li).textContent = vei
        }
    })
}