let emissoras = ["Globo", "SBT", "Band", "Rede TV", "TV Cultura"];

function buscarEmissoras(){
    let busca = emissoras.length;
    let numSorteado = Math.floor(Math.random() * busca);

    document.getElementById("h1").innerHTML = emissoras[numSorteado];


}

let canais = ["1", "2", "3", "4", "5"];

function listaCanais(){
    let buscaCanais = canais.length;
    let numSorteadoCanais = Math.floor(Math.random() * buscaCanais);

    document.getElementById("h2").innerHTML = canais[numSorteadoCanais];


}