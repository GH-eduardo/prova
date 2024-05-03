(async () => {

    let params = new URLSearchParams(document.location.search);
    let uf = params.get("nome")

    const response = await fetch(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados/' + uf + '/municipios'
    ).then(response => response.json());

    document.querySelector("#titulo").textContent = "Municípios de " + uf

    let lista = document.querySelector("#lista-de-municipios");

    let li = document.createElement("li");
    let button = document.createElement("button");

    for(i = 0; i <= response.length; i++) {
        
        li = document.createElement("li");    
        button = document.createElement("button");
        
        button.textContent = "Favoritar"
        li.textContent = `${response[i].nome}`

        document.querySelector("#lista-de-municipios").appendChild(li)
        document.querySelector("#lista-de-municipios").lastElementChild.appendChild(button)
    }

})();