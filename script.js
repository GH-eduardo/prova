(async () => {
    const response = await fetch(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
    ).then(response => response.json());

    let a = document.createElement("a");
    let li = document.createElement("li");

    for(i = 0; i < 27; i++) {

        a = document.createElement("a");
        li = document.createElement("li");    

        li.textContent = `${response[i].nome}`

        a.href = "./municipios/index.html" + "?" + "nome=" + `${response[i].sigla}`
        document.querySelector("#lista-de-estados").appendChild(a)

        document.querySelector("#lista-de-estados").lastElementChild.appendChild(li)
    }

})();