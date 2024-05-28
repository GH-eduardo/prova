(async () => {
    const response = await fetch(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
    ).then(response => response.json());

    let li;
    let a;

    for(i = 0; i < 27; i++) {

        li = document.createElement("li");    
        a = document.createElement("a");

        a.textContent = `${response[i].nome}`
        a.href = "./municipios/index.html" + "?" + "nome=" + `${response[i].sigla}`

        document.querySelector("#lista-de-estados").appendChild(li)
        document.querySelector("#lista-de-estados").lastElementChild.appendChild(a)
    }

})();