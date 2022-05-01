let emissoras = ["Globo", "SBT", "Band", "Rede TV", "Cultura"];

function buscarEmissoras(){
    let busca = emissoras.length;
    let numSorteado = Math.floor(Math.random() * busca);

    document.getElementById("h1").innerHTML = emissoras[numSorteado];

    
}