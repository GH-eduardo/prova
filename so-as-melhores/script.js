let cidades = [ "Abelardo Luz, SC", "Adolfo, SP", "Afogados da Ingazeira, PE", "Águas Frias, SC", "Águas Mornas, SC", "Águas de Chapecó, SC", "Água Limpa, GO", "Alegre, ES", "Alegria, RS", "Altinho, PE", "Altos, PI", "Alumínio, SP", "Americano do Brasil, GO", "Américo Brasiliense, SP", "Ângulo, PR", "Arara, PB", "Araújos, MG", "Arco-Íris, SP", "Areia de Baraúnas, PB", "Areia, PB", "Arvorezinha, RS", "Avaí, SP", "Açailândia, MA", "Bady Bassitt, SP", "Bagre, PA", "Baianópolis, BA", "Bananal, SP", "Baraúna, PB", "Baraúna, RN", "Barbacena, MG", "Barcelona, RN",
"Barro Duro, PI", "Barroso, MG", "Batalha, AL", "Bebedouro, SP", "Bilac, SP", "Boa Vista do Cadeado, RS", "Boa Vista do Incra, RS", "Bocaiúva do Sul, PR", "Bocaiúva, MG", "Bonito, BA", "Bonito, PA", "Bonito, PE", "Branquinha, AL", "Brasileira, PI", "Brasília de Minas, MG", "Buenos Aires, PE", "Bugre, MG", "Cacimbinhas, AL", "Cacique Doble, RS", "Caetanópolis, MG", "Cafarnaum, BA", "Califórnia, PR", "Calçado, PE", "Campo Grande, RN", "Canaã, MG",
"Capitão Enéas, MG", "Capoeiras, PE", "Casca, RS", "Casinhas, PE", "Central de Minas, MG", "Chalé, MG", "Chaves, PA", "Chuvisca, RS", "Chácara, MG", "Cláudia, MT", "Cláudio, MG", "Coité do Nóia, AL", "Combinado, TO", "Congo, PB", "Coqueiro Seco, AL", "Corguinho, MS", "Cristina, MG", "Custódia, PE", "Cássia, MG", "Córrego Fundo, MG", "Denise, MT", "Derrubadas, RS", "Descalvado, SP", "Descanso, SC", "Descoberto, MG", "Divina Pastora, SE", "Divino, MG", "Dom Pedrito, RS",
"Dom Pedro, MA", "Escada, PE", "Espumoso, RS", "Extrema, MG", "Fama, MG", "Faro, PA", "Fartura, SP", "Felisburgo, MG", "Feliz Deserto, AL", "Feliz Natal, MT", "Feliz, RS", "Fernandes Tourinho, MG", "Fernando de Noronha, PE", "Fernão, SP", "Filadélfia, BA", "Filadélfia, TO ", "Flórida Paulista, SP", "Flórida, PR", "Formiga, MG", "Formigueiro, RS", "Fronteira, MG", "Fruta de Leite, MG", "Fundão, ES", "Gabriel Monteiro, SP", "Gado Bravo, PB", "Galinhos, RN",
"Galvão, SC", "Gentil, RS", "Governador Dix-Sept Rosado, RN", "Governador Lindenberg, ES", "Heitoraí, GO", "Ilha Comprida, SP", "Ilha Solteira, SP", "Inocência, MS", "Iraceminha, SC", "Israelândia, GO", "Itabira, MG", "Itabirinha, MG", "Itabirito, MG", "Itapipoca, CE", "Itaú, RN", "Jacaré dos Homens, AL", "Jacinto Machado, SC", "Jacinto, MG", "Jales, SP", "Jericó, PB", "Lagarto, SE", "Lagoa da Confusão, TO", "Lagoa dos Gatos, PE", "Lajeado do Bugre, RS", "Lajes, RN",
"Lontra, MG", "Lourdes, SP", "Luisburgo, MG", "Luislândia, MG", "Macedônia, SP", "Magalhães Barata, PA", "Mamonas, MG", "Manga, MG", "Manoel Urbano, AC", "Maravilha, AL", "Maravilha, SC", "Marco, CE", "Marquinho, PR", "Mata, RS", "Mato Grosso, PB", "Mato Queimado, RS", "Mercedes, PR", "Modelo, SC", "Moeda, MG", "Moita Bonita, SE", "Monte Sião, MG", "Moreno, PE", "Mormaço, RS", "Morro Redondo, RS", "Mostardas, RS", "Nazaré, BA", "Nobres, MT", "Nordestina, BA", "Normandia,RR",
"Nova Iorque, MA", "Nova Maringá, MT", "Não-Me-Toque, RS", "Óleo, SP", "Ouro, SC", "Ourolândia, BA", "Pai Pedro, MG", "Palestina de Goiás, GO", "Palestina do Pará, PA", "Palestina, AL", "Palestina, SP", "Palmitinho, RS", "Panamá, GO", "Panelas, PE", "Paraná, RN", "Paranã, TO", "Pareci Novo, RS", "Pará de Minas, MG", "Passa Quatro, MG", "Passa Sete, RS", "Passa Tempo, MG", "Passa Vinte, MG", "Passa e Fica, RN", "Patos, PB", "Paudalho, PE", "Pavão, MG",
"Pedra Mole, SE", "Pedro Velho, RN", "Pedrão, BA", "Peixe, TO", "Peixe-Boi, PA", "Perolândia, GO", "Pescaria Brava, SC", "Petrolândia, PE", "Picada Café, RS", "Pilar, PB", "Pilões, PB", "Pilõezinhos, PB", "Pimenta, MG", "Pinto Bandeira, RS", "Pintópolis, MG", "Pocinhos, PB", "Porteirão, GO", "Porto Alegre do Piauí, PI", "Porto Feliz, SP", "Posse, GO", "Prata, PB", "Princesa, SC", "Realeza, PR", "Registro, SP", "Riachuelo, RN", "Riachuelo, SE", "Rio Sono, TO", "Russas, CE",
"Salgadinho, PB", "Salgado, SE", "Salto Grande, SP", "Santa Gertrudes, SP", "Santa Juliana, MG", "Santa Mercedes, SP", "Santiago, RS", "Saudades, SC", "Saúde, BA", "Segredo, RS", "Serrinha dos Pintos, RN", "Sertão, RS", "Silvânia, GO", "Socorro, SP", "Sombrio, SC", "Sul Brasil, SC", "São Geraldo, MG", "São José do Calçado, ES", "São Julião, PI", "São Miguel do Gostoso, RN", "São Pedro, SP", "São Tomé das Letras, MG", "Sério, RS", "Telha, SE", "Toledo, MG", "Toledo, PR",
"Travesseiro, RS", "Trombas, GO", "Urânia, SP", "Valentim Gentil, SP", "Viseu, PA", "Vista Alegre do Alto, SP", "Vitória Brasil, SP", "Wagner, BA", "Wanderley, BA", "Xique-Xique, BA", "Zé Doca, MA"
];

function criarTabela() {

    tabela = document.querySelector("#tabela")

    var i = 0

    for (index = 0; index < 51; index++) {
        tr = document.createElement("tr")
        for (let j = 0; j < 5; j++) {
            td = document.createElement("td")
            td.innerText = cidades[i]
            i++
            tr.appendChild(td)
        }
        tabela.appendChild(tr)
    }
}