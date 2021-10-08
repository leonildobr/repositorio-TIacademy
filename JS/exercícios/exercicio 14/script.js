let catalogo = [
    //todos os preços são baseados no site https://maringa.cidadecancao.com
    {
        Fruta: "Abacate",
        preço: 10.79
    },
    {
        Fruta: "Abacaxi",
        preço: 17.90
    },
    {
        Fruta: "Banana Nanica",
        preço: 3.69
    },
    {
        Fruta: "Coco",
        preço: 7.78 
    },   
]

function catalogoFrutas(f) {
    
for (let info of f){
    for (let i in info) {
    document.write(`${i}: ${info[i]}<br>`)        
        }
    }
}
catalogoFrutas(catalogo);