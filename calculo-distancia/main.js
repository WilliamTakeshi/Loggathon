const API =
  "https://maps.googleapis.com/maps/api/distancematrix/json?origins=Vancouver+BC|Seattle&destinations=San+Francisco|Victoria+BC&mode=bicycling&language=fr-FR&key=AIzaSyAFPcf4tDTqFqQNEFxyIeet6BSfOQWdiSQ";

// const INPUT = document.getElementById("input");

var result = "";
var a = [];

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

function callback(response, status) {
  response.rows[0].elements.forEach(element => {
    // console.log(element.status);

    if (element.status === "OK") {
      result = `${result},${element.duration.value}`;
      a.push(element.duration.value);
    } else {
      result = `${result},`;
      a.push("-");
    }
  });
  sleep(1000);
  console.log(result);
  console.log(a.length);
  console.log(a);
}

function submit() {
  //   const INPUT = document.getElementById("cities").value;

  //   const URL = API;

  //   console.log(URL);

  //   fetch(URL)
  //     .then(function(response) {
  //       return response.json();
  //     })
  //     .then(function(myJson) {
  //       console.log(myJson);
  //       let cities = [];

  //       console.log(cities);
  //     });

  var origin = [
    { id: 1302603, name: "Manaus, Brazil" },
    { id: 2304400, name: "Fortaleza, Brazil" },
    { id: 2611606, name: "Recife, Brazil" },
    { id: 2927408, name: "Salvador, Brazil" },
    { id: 3106200, name: "Belo Horizonte, Brazil" },
    { id: 3304557, name: "Rio de Janeiro, Brazil" },
    { id: 3509502, name: "Campinas, Brazil" },
    { id: 3543402, name: "Ribeirão Preto, Brazil" },
    { id: 3548500, name: "Santos, Brazil" },
    { id: 3549904, name: "São José dos Campos, Brazil" },
    { id: 3550308, name: "São Paulo, Brazil" },
    { id: 4106902, name: "Curitiba, Brazil" },
    { id: 4314902, name: "Porto Alegre, Brazil" },
    { id: 5208707, name: "Goiânia, Brazil" },
    { id: 5300108, name: "Brasília, Brazil" }
  ];

  var destinations1 = [
    { id: 1100122, name: "Ji-Paraná, Brazil" },
    { id: 1100205, name: "Porto Velho, Brazil" },
    { id: 1200401, name: "Rio Branco, Brazil" },
    { id: 1300300, name: "Autazes, Brazil" },
    { id: 1301100, name: "Careiro, Brazil" },
    { id: 1301159, name: "Careiro da Várzea, Brazil" },
    { id: 1301852, name: "Iranduba, Brazil" },
    { id: 1301902, name: "Itacoatiara, Brazil" },
    { id: 1302504, name: "Manacapuru, Brazil" },
    { id: 1302553, name: "Manaquiri, Brazil" },
    { id: 1303403, name: "Parintins, Brazil" },
    { id: 1303536, name: "Presidente Figueiredo, Brazil" },
    { id: 1303569, name: "Rio Preto da Eva, Brazil" },
    { id: 1400100, name: "Boa Vista, Brazil" },
    { id: 1500107, name: "Abaetetuba, Brazil" },
    { id: 1500800, name: "Ananindeua, Brazil" },
    { id: 1501402, name: "Belém, Brazil" },
    { id: 1501501, name: "Benevides, Brazil" },
    { id: 1501709, name: "Bragança, Brazil" },
    { id: 1502103, name: "Cametá, Brazil" },
    { id: 1502400, name: "Castanhal, Brazil" },
    { id: 1504208, name: "Marabá, Brazil" },
    { id: 1504422, name: "Marituba, Brazil" },
    { id: 1505536, name: "Parauapebas, Brazil" },
    { id: 1506500, name: "Santa Izabel do Pará, Brazil" },
    { id: 1506807, name: "Santarém, Brazil" },
    { id: 1600303, name: "Macapá, Brazil" },
    { id: 1600600, name: "Santana, Brazil" },
    { id: 1702109, name: "Araguaína, Brazil" },
    { id: 1713205, name: "Miracema do Tocantins, Brazil" },
    { id: 1716109, name: "Paraíso do Tocantins, Brazil" },
    { id: 1718204, name: "Porto Nacional, Brazil" },
    { id: 1721000, name: "Palmas, Brazil" },
    { id: 2100055, name: "Açailândia, Brazil" },
    { id: 2100204, name: "Alcântara, Brazil" },
    { id: 2101202, name: "Bacabal, Brazil" },
    { id: 2103000, name: "Caxias, Brazil" },
    { id: 2103307, name: "Codó, Brazil" },
    { id: 2105104, name: "Icatu, Brazil" },
    { id: 2105302, name: "Imperatriz, Brazil" },
    { id: 2105500, name: "João Lisboa, Brazil" },
    { id: 2107506, name: "Paço do Lumiar, Brazil" },
    { id: 2109452, name: "Raposa, Brazil" },
    { id: 2109601, name: "Rosário, Brazil" },
    { id: 2110203, name: "Santa Rita, Brazil" },
    { id: 2111201, name: "São José de Ribamar, Brazil" },
    { id: 2111300, name: "São Luís, Brazil" },
    { id: 2112209, name: "Timon, Brazil" },
    { id: 2200400, name: "Altos, Brazil" },
    { id: 2205508, name: "José de Freitas, Brazil" },
    { id: 2207702, name: "Parnaíba, Brazil" },
    { id: 2211001, name: "Teresina, Brazil" },
    { id: 2211100, name: "União, Brazil" },
    { id: 2301000, name: "Aquiraz, Brazil" },
    { id: 2301901, name: "Barbalha, Brazil" },
    { id: 2303204, name: "Caririaçu, Brazil" },
    { id: 2303501, name: "Cascavel, Brazil" },
    { id: 2303709, name: "Caucaia, Brazil" },
    { id: 2304004, name: "Coreaú, Brazil" },
    { id: 2304202, name: "Crato, Brazil" },
    { id: 2304285, name: "Eusébio, Brazil" },
    { id: 2304350, name: "Forquilha, Brazil" },
    { id: 2304954, name: "Guaiúba, Brazil" },
    { id: 2305233, name: "Horizonte, Brazil" },
    { id: 2306256, name: "Itaitinga, Brazil" },
    { id: 2306405, name: "Itapipoca, Brazil" },
    { id: 2307106, name: "Jardim, Brazil" },
    { id: 2307304, name: "Juazeiro do Norte, Brazil" },
    { id: 2307650, name: "Maracanaú, Brazil" },
    { id: 2307700, name: "Maranguape, Brazil" },
    { id: 2308005, name: "Massapê, Brazil" },
    { id: 2308401, name: "Missão Velha, Brazil" },
    { id: 2309607, name: "Pacajus, Brazil" },
    { id: 2309706, name: "Pacatuba, Brazil" },
    { id: 2310209, name: "Paracuru, Brazil" },
    { id: 2310258, name: "Paraipaba, Brazil" },
    { id: 2312007, name: "Santana do Acaraú, Brazil" },
    { id: 2312403, name: "São Gonçalo do Amarante, Brazil" },
    { id: 2312908, name: "Sobral, Brazil" },
    { id: 2313500, name: "Trairi, Brazil" },
    { id: 2402600, name: "Ceará-Mirim, Brazil" },
    { id: 2403251, name: "Parnamirim, Brazil" },
    { id: 2403608, name: "Extremoz, Brazil" },
    { id: 2404200, name: "Goianinha, Brazil" },
    { id: 2407104, name: "Macaíba, Brazil" },
    { id: 2407807, name: "Monte Alegre, Brazil" },
    { id: 2408003, name: "Mossoró, Brazil" },
    { id: 2408102, name: "Natal, Brazil" },
    { id: 2408201, name: "Nísia Floresta, Brazil" },
    { id: 2412005, name: "São Gonçalo do Amarante, Brazil" },
    { id: 2412203, name: "São José de Mipibu, Brazil" },
    { id: 2501807, name: "Bayeux, Brazil" },
    { id: 2503001, name: "Caaporã, Brazil" },
    { id: 2503209, name: "Cabedelo, Brazil" },
    { id: 2504009, name: "Campina Grande, Brazil" },
    { id: 2504603, name: "Conde, Brazil" },
    { id: 2507507, name: "João Pessoa, Brazil" },
    { id: 2508307, name: "Lagoa Seca, Brazil" },
    { id: 2510808, name: "Patos, Brazil" },
    { id: 2511202, name: "Pedras de Fogo, Brazil" }
  ];
  var destinations2 = [
    { id: 2512507, name: "Queimadas, Brazil" },
    { id: 2512903, name: "Rio Tinto, Brazil" },
    { id: 2513703, name: "Santa Rita, Brazil" },
    { id: 2600054, name: "Abreu e Lima, Brazil" },
    { id: 2602902, name: "Cabo de Santo Agostinho, Brazil" },
    { id: 2603454, name: "Camaragibe, Brazil" },
    { id: 2604106, name: "Caruaru, Brazil" },
    { id: 2606002, name: "Garanhuns, Brazil" },
    { id: 2606200, name: "Goiana, Brazil" },
    { id: 2606804, name: "Igarassu, Brazil" },
    { id: 2607208, name: "Ipojuca, Brazil" },
    { id: 2607604, name: "Ilha de Itamaracá, Brazil" },
    { id: 2607752, name: "Itapissuma, Brazil" },
    { id: 2607901, name: "Jaboatão dos Guararapes, Brazil" },
    { id: 2608750, name: "Lagoa Grande, Brazil" },
    { id: 2609402, name: "Moreno, Brazil" },
    { id: 2609600, name: "Olinda, Brazil" },
    { id: 2610707, name: "Paulista, Brazil" },
    { id: 2611101, name: "Petrolina, Brazil" },
    { id: 2612604, name: "Santa Maria da Boa Vista, Brazil" },
    { id: 2613701, name: "São Lourenço da Mata, Brazil" },
    { id: 2616407, name: "Vitória de Santo Antão, Brazil" },
    { id: 2700300, name: "Arapiraca, Brazil" },
    { id: 2700409, name: "Atalaia, Brazil" },
    { id: 2702355, name: "Craíbas, Brazil" },
    { id: 2702603, name: "Feira Grande, Brazil" },
    { id: 2702900, name: "Girau do Ponciano, Brazil" },
    { id: 2704005, name: "Junqueiro, Brazil" },
    { id: 2704203, name: "Limoeiro de Anadia, Brazil" },
    { id: 2704302, name: "Maceió, Brazil" },
    { id: 2704708, name: "Marechal Deodoro, Brazil" },
    { id: 2706901, name: "Pilar, Brazil" },
    { id: 2707701, name: "Rio Largo, Brazil" },
    { id: 2708808, name: "São Sebastião, Brazil" },
    { id: 2709202, name: "Traipu, Brazil" },
    { id: 2800308, name: "Aracaju, Brazil" },
    { id: 2800605, name: "Barra dos Coqueiros, Brazil" },
    { id: 2804805, name: "Nossa Senhora do Socorro, Brazil" },
    { id: 2806701, name: "São Cristóvão, Brazil" },
    { id: 2900702, name: "Alagoinhas, Brazil" },
    { id: 2901106, name: "Amélia Rodrigues, Brazil" },
    { id: 2903201, name: "Barreiras, Brazil" },
    { id: 2905701, name: "Camaçari, Brazil" },
    { id: 2906501, name: "Candeias, Brazil" },
    { id: 2907202, name: "Casa Nova, Brazil" },
    { id: 2908200, name: "Conceição da Feira, Brazil" },
    { id: 2908507, name: "Conceição do Jacuípe, Brazil" },
    { id: 2908903, name: "Coração de Maria, Brazil" },
    { id: 2909901, name: "Curaçá, Brazil" },
    { id: 2910057, name: "Dias d'Ávila, Brazil" },
    { id: 2910727, name: "Eunápolis, Brazil" },
    { id: 2910800, name: "Feira de Santana, Brazil" },
    { id: 2913606, name: "Ilhéus, Brazil" },
    { id: 2914505, name: "Irará, Brazil" },
    { id: 2914802, name: "Itabuna, Brazil" },
    { id: 2916104, name: "Itaparica, Brazil" },
    { id: 2918001, name: "Jequié, Brazil" },
    { id: 2918407, name: "Juazeiro, Brazil" },
    { id: 2919207, name: "Lauro de Freitas, Brazil" },
    { id: 2921005, name: "Mata de São João, Brazil" },
    { id: 2924009, name: "Paulo Afonso, Brazil" },
    { id: 2925204, name: "Pojuca, Brazil" },
    { id: 2925303, name: "Porto Seguro, Brazil" },
    { id: 2926301, name: "Riachão do Jacuípe, Brazil" },
    { id: 2929206, name: "São Francisco do Conde, Brazil" },
    { id: 2929305, name: "São Gonçalo dos Campos, Brazil" },
    { id: 2929503, name: "São Sebastião do Passé, Brazil" },
    { id: 2930709, name: "Simões Filho, Brazil" },
    { id: 2930774, name: "Sobradinho, Brazil" },
    { id: 2931350, name: "Teixeira de Freitas, Brazil" },
    { id: 2933208, name: "Vera Cruz, Brazil" },
    { id: 2933307, name: "Vitória da Conquista, Brazil" },
    { id: 3103504, name: "Araguari, Brazil" },
    { id: 3105400, name: "Barão de Cocais, Brazil" },
    { id: 3105608, name: "Barbacena, Brazil" },
    { id: 3106309, name: "Belo Oriente, Brazil" },
    { id: 3106705, name: "Betim, Brazil" },
    { id: 3109006, name: "Brumadinho, Brazil" },
    { id: 3109303, name: "Buritis, Brazil" },
    { id: 3110004, name: "Caeté, Brazil" },
    { id: 3113404, name: "Caratinga, Brazil" },
    { id: 3118304, name: "Conselheiro Lafaiete, Brazil" },
    { id: 3118601, name: "Contagem, Brazil" },
    { id: 3119401, name: "Coronel Fabriciano, Brazil" },
    { id: 3122306, name: "Divinópolis, Brazil" },
    { id: 3124104, name: "Esmeraldas, Brazil" },
    { id: 3127701, name: "Governador Valadares, Brazil" },
    { id: 3129806, name: "Ibirité, Brazil" },
    { id: 3130101, name: "Igarapé, Brazil" },
    { id: 3131307, name: "Ipatinga, Brazil" },
    { id: 3131703, name: "Itabira, Brazil" },
    { id: 3131901, name: "Itabirito, Brazil" },
    { id: 3133808, name: "Itaúna, Brazil" },
    { id: 3136652, name: "Juatuba, Brazil" },
    { id: 3136702, name: "Juiz de Fora, Brazil" },
    { id: 3137601, name: "Lagoa Santa, Brazil" },
    { id: 3140704, name: "Mateus Leme, Brazil" },
    { id: 3141108, name: "Matozinhos, Brazil" },
    { id: 3143302, name: "Montes Claros, Brazil" },
    { id: 3143906, name: "Muriaé, Brazil" }
  ];
  var destinations3 = [
    { id: 3144805, name: "Nova Lima, Brazil" },
    { id: 3147105, name: "Pará de Minas, Brazil" },
    { id: 3147907, name: "Passos, Brazil" },
    { id: 3148004, name: "Patos de Minas, Brazil" },
    { id: 3149309, name: "Pedro Leopoldo, Brazil" },
    { id: 3151800, name: "Poços de Caldas, Brazil" },
    { id: 3152501, name: "Pouso Alegre, Brazil" },
    { id: 3154606, name: "Ribeirão das Neves, Brazil" },
    { id: 3156700, name: "Sabará, Brazil" },
    { id: 3157203, name: "Santa Bárbara, Brazil" },
    { id: 3157807, name: "Santa Luzia, Brazil" },
    { id: 3158953, name: "Santana do Paraíso, Brazil" },
    { id: 3162922, name: "São Joaquim de Bicas, Brazil" },
    { id: 3165537, name: "Sarzedo, Brazil" },
    { id: 3167202, name: "Sete Lagoas, Brazil" },
    { id: 3168606, name: "Teófilo Otoni, Brazil" },
    { id: 3168705, name: "Timóteo, Brazil" },
    { id: 3169901, name: "Ubá, Brazil" },
    { id: 3170107, name: "Uberaba, Brazil" },
    { id: 3170206, name: "Uberlândia, Brazil" },
    { id: 3170404, name: "Unaí, Brazil" },
    { id: 3170701, name: "Varginha, Brazil" },
    { id: 3171204, name: "Vespasiano, Brazil" },
    { id: 3201209, name: "Cachoeiro de Itapemirim, Brazil" },
    { id: 3201308, name: "Cariacica, Brazil" },
    { id: 3201506, name: "Colatina, Brazil" },
    { id: 3202405, name: "Guarapari, Brazil" },
    { id: 3203205, name: "Linhares, Brazil" },
    { id: 3204906, name: "São Mateus, Brazil" },
    { id: 3205002, name: "Serra, Brazil" },
    { id: 3205101, name: "Viana, Brazil" },
    { id: 3205200, name: "Vila Velha, Brazil" },
    { id: 3205309, name: "Vitória, Brazil" },
    { id: 3300100, name: "Angra dos Reis, Brazil" },
    { id: 3300209, name: "Araruama, Brazil" },
    { id: 3300407, name: "Barra Mansa, Brazil" },
    { id: 3300456, name: "Belford Roxo, Brazil" },
    { id: 3300704, name: "Cabo Frio, Brazil" },
    { id: 3300803, name: "Cachoeiras de Macacu, Brazil" },
    { id: 3301009, name: "Campos dos Goytacazes, Brazil" },
    { id: 3301702, name: "Duque de Caxias, Brazil" },
    { id: 3301850, name: "Guapimirim, Brazil" },
    { id: 3301900, name: "Itaboraí, Brazil" },
    { id: 3302007, name: "Itaguaí, Brazil" },
    { id: 3302270, name: "Japeri, Brazil" },
    { id: 3302403, name: "Macaé, Brazil" },
    { id: 3302502, name: "Magé, Brazil" },
    { id: 3302700, name: "Maricá, Brazil" },
    { id: 3302858, name: "Mesquita, Brazil" },
    { id: 3303203, name: "Nilópolis, Brazil" },
    { id: 3303302, name: "Niterói, Brazil" },
    { id: 3303401, name: "Nova Friburgo, Brazil" },
    { id: 3303500, name: "Nova Iguaçu, Brazil" },
    { id: 3303609, name: "Paracambi, Brazil" },
    { id: 3303906, name: "Petrópolis, Brazil" },
    { id: 3304144, name: "Queimados, Brazil" },
    { id: 3304201, name: "Resende, Brazil" },
    { id: 3304300, name: "Rio Bonito, Brazil" },
    { id: 3304524, name: "Rio das Ostras, Brazil" },
    { id: 3304904, name: "São Gonçalo, Brazil" },
    { id: 3305109, name: "São João de Meriti, Brazil" },
    { id: 3305554, name: "Seropédica, Brazil" },
    { id: 3305752, name: "Tanguá, Brazil" },
    { id: 3305802, name: "Teresópolis, Brazil" },
    { id: 3306305, name: "Volta Redonda, Brazil" },
    { id: 3501608, name: "Americana, Brazil" },
    { id: 3502507, name: "Aparecida, Brazil" },
    { id: 3502804, name: "Araçatuba, Brazil" },
    { id: 3502903, name: "Araçoiaba da Serra, Brazil" },
    { id: 3503208, name: "Araraquara, Brazil" },
    { id: 3503307, name: "Araras, Brazil" },
    { id: 3503802, name: "Artur Nogueira, Brazil" },
    { id: 3503901, name: "Arujá, Brazil" },
    { id: 3504107, name: "Atibaia, Brazil" },
    { id: 3505500, name: "Barretos, Brazil" },
    { id: 3505609, name: "Barrinha, Brazil" },
    { id: 3505708, name: "Barueri, Brazil" },
    { id: 3505906, name: "Batatais, Brazil" },
    { id: 3506003, name: "Bauru, Brazil" },
    { id: 3506359, name: "Bertioga, Brazil" },
    { id: 3506508, name: "Birigui, Brazil" },
    { id: 3506607, name: "Biritiba Mirim, Brazil" },
    { id: 3507001, name: "Boituva, Brazil" },
    { id: 3507506, name: "Botucatu, Brazil" },
    { id: 3507605, name: "Bragança Paulista, Brazil" },
    { id: 3507803, name: "Brodowski, Brazil" },
    { id: 3508405, name: "Cabreúva, Brazil" },
    { id: 3508504, name: "Caçapava, Brazil" },
    { id: 3508603, name: "Cachoeira Paulista, Brazil" },
    { id: 3509007, name: "Caieiras, Brazil" },
    { id: 3509205, name: "Cajamar, Brazil" },
    { id: 3509403, name: "Cajuru, Brazil" },
    { id: 3509601, name: "Campo Limpo Paulista, Brazil" },
    { id: 3509700, name: "Campos do Jordão, Brazil" },
    { id: 3510401, name: "Capivari, Brazil" },
    { id: 3510500, name: "Caraguatatuba, Brazil" },
    { id: 3510609, name: "Carapicuíba, Brazil" },
    { id: 3511102, name: "Catanduva, Brazil" },
    { id: 3511508, name: "Cerquilho, Brazil" },
    { id: 3512209, name: "Conchal, Brazil" }
  ];
  var destinations4 = [
    { id: 3512407, name: "Cordeirópolis, Brazil" },
    { id: 3512803, name: "Cosmópolis, Brazil" },
    { id: 3513009, name: "Cotia, Brazil" },
    { id: 3513108, name: "Cravinhos, Brazil" },
    { id: 3513405, name: "Cruzeiro, Brazil" },
    { id: 3513504, name: "Cubatão, Brazil" },
    { id: 3513603, name: "Cunha, Brazil" },
    { id: 3513801, name: "Diadema, Brazil" },
    { id: 3515004, name: "Embu das Artes, Brazil" },
    { id: 3515103, name: "Embu-Guaçu, Brazil" },
    { id: 3515707, name: "Ferraz de Vasconcelos, Brazil" },
    { id: 3516200, name: "Franca, Brazil" },
    { id: 3516309, name: "Francisco Morato, Brazil" },
    { id: 3516408, name: "Franco da Rocha, Brazil" },
    { id: 3518305, name: "Guararema, Brazil" },
    { id: 3518404, name: "Guaratinguetá, Brazil" },
    { id: 3518602, name: "Guariba, Brazil" },
    { id: 3518701, name: "Guarujá, Brazil" },
    { id: 3518800, name: "Guarulhos, Brazil" },
    { id: 3519071, name: "Hortolândia, Brazil" },
    { id: 3519709, name: "Ibiúna, Brazil" },
    { id: 3520400, name: "Ilhabela, Brazil" },
    { id: 3520509, name: "Indaiatuba, Brazil" },
    { id: 3521002, name: "Iperó, Brazil" },
    { id: 3521408, name: "Iracemápolis, Brazil" },
    { id: 3522109, name: "Itanhaém, Brazil" },
    { id: 3522208, name: "Itapecerica da Serra, Brazil" },
    { id: 3522307, name: "Itapetininga, Brazil" },
    { id: 3522505, name: "Itapevi, Brazil" },
    { id: 3523107, name: "Itaquaquecetuba, Brazil" },
    { id: 3523404, name: "Itatiba, Brazil" },
    { id: 3523909, name: "Itu, Brazil" },
    { id: 3524006, name: "Itupeva, Brazil" },
    { id: 3524303, name: "Jaboticabal, Brazil" },
    { id: 3524402, name: "Jacareí, Brazil" },
    { id: 3524709, name: "Jaguariúna, Brazil" },
    { id: 3525003, name: "Jandira, Brazil" },
    { id: 3525102, name: "Jardinópolis, Brazil" },
    { id: 3525201, name: "Jarinu, Brazil" },
    { id: 3525300, name: "Jaú, Brazil" },
    { id: 3525904, name: "Jundiaí, Brazil" },
    { id: 3526209, name: "Juquitiba, Brazil" },
    { id: 3526407, name: "Laranjal Paulista, Brazil" },
    { id: 3526704, name: "Leme, Brazil" },
    { id: 3526902, name: "Limeira, Brazil" },
    { id: 3527207, name: "Lorena, Brazil" },
    { id: 3527306, name: "Louveira, Brazil" },
    { id: 3528403, name: "Mairinque, Brazil" },
    { id: 3528502, name: "Mairiporã, Brazil" },
    { id: 3529005, name: "Marília, Brazil" },
    { id: 3529401, name: "Mauá, Brazil" },
    { id: 3530508, name: "Mococa, Brazil" },
    { id: 3530607, name: "Mogi das Cruzes, Brazil" },
    { id: 3530706, name: "Mogi Guaçu, Brazil" },
    { id: 3531100, name: "Mongaguá, Brazil" },
    { id: 3531308, name: "Monte Alto, Brazil" },
    { id: 3531803, name: "Monte Mor, Brazil" },
    { id: 3531902, name: "Morro Agudo, Brazil" },
    { id: 3533403, name: "Nova Odessa, Brazil" },
    { id: 3534302, name: "Orlândia, Brazil" },
    { id: 3534401, name: "Osasco, Brazil" },
    { id: 3534708, name: "Ourinhos, Brazil" },
    { id: 3536505, name: "Paulínia, Brazil" },
    { id: 3537107, name: "Pedreira, Brazil" },
    { id: 3537602, name: "Peruíbe, Brazil" },
    { id: 3537800, name: "Piedade, Brazil" },
    { id: 3537909, name: "Pilar do Sul, Brazil" },
    { id: 3538006, name: "Pindamonhangaba, Brazil" },
    { id: 3538709, name: "Piracicaba, Brazil" },
    { id: 3539509, name: "Pitangueiras, Brazil" },
    { id: 3539806, name: "Poá, Brazil" },
    { id: 3540200, name: "Pontal, Brazil" },
    { id: 3540606, name: "Porto Feliz, Brazil" },
    { id: 3541000, name: "Praia Grande, Brazil" },
    { id: 3541406, name: "Presidente Prudente, Brazil" },
    { id: 3543303, name: "Ribeirão Pires, Brazil" },
    { id: 3543907, name: "Rio Claro, Brazil" },
    { id: 3544004, name: "Rio das Pedras, Brazil" },
    { id: 3544103, name: "Rio Grande da Serra, Brazil" },
    { id: 3545209, name: "Salto, Brazil" },
    { id: 3545308, name: "Salto de Pirapora, Brazil" },
    { id: 3545803, name: "Santa Bárbara d'Oeste, Brazil" },
    { id: 3546702, name: "Santa Gertrudes, Brazil" },
    { id: 3546801, name: "Santa Isabel, Brazil" },
    { id: 3547304, name: "Santana de Parnaíba, Brazil" },
    { id: 3547502, name: "Santa Rita do Passa Quatro, Brazil" },
    { id: 3547601, name: "Santa Rosa de Viterbo, Brazil" },
    { id: 3547809, name: "Santo André, Brazil" },
    { id: 3548005, name: "Santo Antônio de Posse, Brazil" },
    { id: 3548708, name: "São Bernardo do Campo, Brazil" },
    { id: 3548807, name: "São Caetano do Sul, Brazil" },
    { id: 3548906, name: "São Carlos, Brazil" },
    { id: 3549805, name: "São José do Rio Preto, Brazil" },
    { id: 3550209, name: "São Miguel Arcanjo, Brazil" },
    { id: 3550407, name: "São Pedro, Brazil" },
    { id: 3550605, name: "São Roque, Brazil" },
    { id: 3550704, name: "São Sebastião, Brazil" },
    { id: 3551009, name: "São Vicente, Brazil" },
    { id: 3551504, name: "Serrana, Brazil" },
    { id: 3551702, name: "Sertãozinho, Brazil" }
  ];
  var destinations5 = [
    { id: 3552205, name: "Sorocaba, Brazil" },
    { id: 3552403, name: "Sumaré, Brazil" },
    { id: 3552502, name: "Suzano, Brazil" },
    { id: 3552809, name: "Taboão da Serra, Brazil" },
    { id: 3553302, name: "Tambaú, Brazil" },
    { id: 3554003, name: "Tatuí, Brazil" },
    { id: 3554102, name: "Taubaté, Brazil" },
    { id: 3554508, name: "Tietê, Brazil" },
    { id: 3554805, name: "Tremembé, Brazil" },
    { id: 3555406, name: "Ubatuba, Brazil" },
    { id: 3556206, name: "Valinhos, Brazil" },
    { id: 3556453, name: "Vargem Grande Paulista, Brazil" },
    { id: 3556503, name: "Várzea Paulista, Brazil" },
    { id: 3556701, name: "Vinhedo, Brazil" },
    { id: 3557006, name: "Votorantim, Brazil" },
    { id: 4100400, name: "Almirante Tamandaré, Brazil" },
    { id: 4100509, name: "Altônia, Brazil" },
    { id: 4101408, name: "Apucarana, Brazil" },
    { id: 4101507, name: "Arapongas, Brazil" },
    { id: 4101804, name: "Araucária, Brazil" },
    { id: 4102000, name: "Assis Chateaubriand, Brazil" },
    { id: 4102109, name: "Astorga, Brazil" },
    { id: 4103701, name: "Cambé, Brazil" },
    { id: 4104006, name: "Campina Grande do Sul, Brazil" },
    { id: 4104204, name: "Campo Largo, Brazil" },
    { id: 4104253, name: "Campo Magro, Brazil" },
    { id: 4104808, name: "Cascavel, Brazil" },
    { id: 4105805, name: "Colombo, Brazil" },
    { id: 4106605, name: "Cruzeiro do Oeste, Brazil" },
    { id: 4107652, name: "Fazenda Rio Grande, Brazil" },
    { id: 4108304, name: "Foz do Iguaçu, Brazil" },
    { id: 4108809, name: "Guaíra, Brazil" },
    { id: 4109401, name: "Guarapuava, Brazil" },
    { id: 4109807, name: "Ibiporã, Brazil" },
    { id: 4111258, name: "Itaperuçu, Brazil" },
    { id: 4111506, name: "Ivaiporã, Brazil" },
    { id: 4112108, name: "Jandaia do Sul, Brazil" },
    { id: 4113205, name: "Lapa, Brazil" },
    { id: 4113700, name: "Londrina, Brazil" },
    { id: 4114203, name: "Mandaguari, Brazil" },
    { id: 4114302, name: "Mandirituba, Brazil" },
    { id: 4114609, name: "Marechal Cândido Rondon, Brazil" },
    { id: 4114807, name: "Marialva, Brazil" },
    { id: 4115200, name: "Maringá, Brazil" },
    { id: 4116901, name: "Nova Esperança, Brazil" },
    { id: 4117503, name: "Paiçandu, Brazil" },
    { id: 4117909, name: "Palotina, Brazil" },
    { id: 4118204, name: "Paranaguá, Brazil" },
    { id: 4119152, name: "Pinhais, Brazil" },
    { id: 4119509, name: "Piraquara, Brazil" },
    { id: 4119905, name: "Ponta Grossa, Brazil" },
    { id: 4122206, name: "Rio Branco do Sul, Brazil" },
    { id: 4122305, name: "Rio Negro, Brazil" },
    { id: 4122404, name: "Rolândia, Brazil" },
    { id: 4123501, name: "Santa Helena, Brazil" },
    { id: 4125506, name: "São José dos Pinhais, Brazil" },
    { id: 4126256, name: "Sarandi, Brazil" },
    { id: 4127700, name: "Toledo, Brazil" },
    { id: 4128104, name: "Umuarama, Brazil" },
    { id: 4201307, name: "Araquari, Brazil" },
    { id: 4201406, name: "Araranguá, Brazil" },
    { id: 4202008, name: "Balneário Camboriú, Brazil" },
    { id: 4202107, name: "Barra Velha, Brazil" },
    { id: 4202305, name: "Biguaçu, Brazil" },
    { id: 4202404, name: "Blumenau, Brazil" },
    { id: 4202909, name: "Brusque, Brazil" },
    { id: 4203204, name: "Camboriú, Brazil" },
    { id: 4203808, name: "Canoinhas, Brazil" },
    { id: 4204202, name: "Chapecó, Brazil" },
    { id: 4204608, name: "Criciúma, Brazil" },
    { id: 4204806, name: "Curitibanos, Brazil" },
    { id: 4205407, name: "Florianópolis, Brazil" },
    { id: 4205456, name: "Forquilhinha, Brazil" },
    { id: 4205902, name: "Gaspar, Brazil" },
    { id: 4206504, name: "Guaramirim, Brazil" },
    { id: 4207007, name: "Içara, Brazil" },
    { id: 4207502, name: "Indaial, Brazil" },
    { id: 4208104, name: "Itaiópolis, Brazil" },
    { id: 4208203, name: "Itajaí, Brazil" },
    { id: 4208302, name: "Itapema, Brazil" },
    { id: 4208906, name: "Jaraguá do Sul, Brazil" },
    { id: 4209102, name: "Joinville, Brazil" },
    { id: 4209300, name: "Lages, Brazil" },
    { id: 4210100, name: "Mafra, Brazil" },
    { id: 4211306, name: "Navegantes, Brazil" },
    { id: 4211900, name: "Palhoça, Brazil" },
    { id: 4212502, name: "Penha, Brazil" },
    { id: 4213203, name: "Pomerode, Brazil" },
    { id: 4213609, name: "Porto União, Brazil" },
    { id: 4215000, name: "Rio Negrinho, Brazil" },
    { id: 4215802, name: "São Bento do Sul, Brazil" },
    { id: 4216206, name: "São Francisco do Sul, Brazil" },
    { id: 4216305, name: "São João Batista, Brazil" },
    { id: 4216503, name: "São Joaquim, Brazil" },
    { id: 4216602, name: "São José, Brazil" },
    { id: 4217709, name: "Sombrio, Brazil" },
    { id: 4218004, name: "Tijucas, Brazil" },
    { id: 4218202, name: "Timbó, Brazil" },
    { id: 4219002, name: "Urussanga, Brazil" },
    { id: 4219507, name: "Xanxerê, Brazil" }
  ];
  var destinations6 = [
    { id: 4219705, name: "Xaxim, Brazil" },
    { id: 4300604, name: "Alvorada, Brazil" },
    { id: 4301602, name: "Bagé, Brazil" },
    { id: 4302105, name: "Bento Gonçalves, Brazil" },
    { id: 4303103, name: "Cachoeirinha, Brazil" },
    { id: 4303905, name: "Campo Bom, Brazil" },
    { id: 4304606, name: "Canoas, Brazil" },
    { id: 4304663, name: "Capão do Leão, Brazil" },
    { id: 4304804, name: "Carlos Barbosa, Brazil" },
    { id: 4305108, name: "Caxias do Sul, Brazil" },
    { id: 4305355, name: "Charqueadas, Brazil" },
    { id: 4306403, name: "Dois Irmãos, Brazil" },
    { id: 4306767, name: "Eldorado do Sul, Brazil" },
    { id: 4307609, name: "Estância Velha, Brazil" },
    { id: 4307708, name: "Esteio, Brazil" },
    { id: 4307906, name: "Farroupilha, Brazil" },
    { id: 4308201, name: "Flores da Cunha, Brazil" },
    { id: 4308607, name: "Garibaldi, Brazil" },
    { id: 4309209, name: "Gravataí, Brazil" },
    { id: 4309308, name: "Guaíba, Brazil" },
    { id: 4310108, name: "Igrejinha, Brazil" },
    { id: 4312401, name: "Montenegro, Brazil" },
    { id: 4313375, name: "Nova Santa Rita, Brazil" },
    { id: 4313409, name: "Novo Hamburgo, Brazil" },
    { id: 4314050, name: "Parobé, Brazil" },
    { id: 4314100, name: "Passo Fundo, Brazil" },
    { id: 4314407, name: "Pelotas, Brazil" },
    { id: 4314803, name: "Portão, Brazil" },
    { id: 4315602, name: "Rio Grande, Brazil" },
    { id: 4316808, name: "Santa Cruz do Sul, Brazil" },
    { id: 4316907, name: "Santa Maria, Brazil" },
    { id: 4317608, name: "Santo Antônio da Patrulha, Brazil" },
    { id: 4318408, name: "São Jerônimo, Brazil" },
    { id: 4318507, name: "São José do Norte, Brazil" },
    { id: 4318705, name: "São Leopoldo, Brazil" },
    { id: 4319000, name: "São Marcos, Brazil" },
    { id: 4319505, name: "São Sebastião do Caí, Brazil" },
    { id: 4319901, name: "Sapiranga, Brazil" },
    { id: 4320008, name: "Sapucaia do Sul, Brazil" },
    { id: 4321204, name: "Taquara, Brazil" },
    { id: 4322004, name: "Triunfo, Brazil" },
    { id: 4322400, name: "Uruguaiana, Brazil" },
    { id: 4323002, name: "Viamão, Brazil" },
    { id: 5002704, name: "Campo Grande, Brazil" },
    { id: 5003207, name: "Corumbá, Brazil" },
    { id: 5003702, name: "Dourados, Brazil" },
    { id: 5008305, name: "Três Lagoas, Brazil" },
    { id: 5103403, name: "Cuiabá, Brazil" },
    { id: 5106505, name: "Poconé, Brazil" },
    { id: 5107602, name: "Rondonópolis, Brazil" },
    { id: 5107909, name: "Sinop, Brazil" },
    { id: 5108402, name: "Várzea Grande, Brazil" },
    { id: 5200258, name: "Águas Lindas de Goiás, Brazil" },
    { id: 5200308, name: "Alexânia, Brazil" },
    { id: 5201108, name: "Anápolis, Brazil" },
    { id: 5201405, name: "Aparecida de Goiânia, Brazil" },
    { id: 5203302, name: "Bela Vista de Goiás, Brazil" },
    { id: 5205497, name: "Cidade Ocidental, Brazil" },
    { id: 5206206, name: "Cristalina, Brazil" },
    { id: 5208004, name: "Formosa, Brazil" },
    { id: 5208608, name: "Goianésia, Brazil" },
    { id: 5208806, name: "Goianira, Brazil" },
    { id: 5212501, name: "Luziânia, Brazil" },
    { id: 5214507, name: "Nerópolis, Brazil" },
    { id: 5214606, name: "Niquelândia, Brazil" },
    { id: 5215231, name: "Novo Gama, Brazil" },
    { id: 5215603, name: "Padre Bernardo, Brazil" },
    { id: 5217302, name: "Pirenópolis, Brazil" },
    { id: 5217609, name: "Planaltina, Brazil" },
    { id: 5218805, name: "Rio Verde, Brazil" },
    { id: 5219753, name: "Santo Antônio do Descoberto, Brazil" },
    { id: 5220454, name: "Senador Canedo, Brazil" },
    { id: 5221403, name: "Trindade, Brazil" },
    { id: 5221858, name: "Valparaíso de Goiás, Brazil" }
  ];

  //   console.log(
  //     destinations1.map(function(element) {
  //       return element.name;
  //     })
  //   );

  console.log(origin[0].name);

  var service = new google.maps.DistanceMatrixService();

  let i = 0;
  //   let j = 0;

  //   for (j = 0; j < 15; j++) {
  //     sleep(1000);

  if (document.getElementById("array").value == 1) {
    for (i = 0; i < 4; i++) {
      console.log("wait");
      sleep(1000);
      service.getDistanceMatrix(
        {
          origins: [origin[document.getElementById("index").value].name],
          destinations: destinations1
            .map(function(element) {
              return element.name;
            })
            .slice(25 * i, 25 * (i + 1)),
          travelMode: "DRIVING"
          //   transitOptions: TransitOptions,
          //   drivingOptions: DrivingOptions,
          //   unitSystem: UnitSystem,
          //   avoidHighways: Boolean,
          //   avoidTolls: Boolean
        },
        callback
      );
    }
  }

  if (document.getElementById("array").value == 2) {
    for (i = 0; i < 4; i++) {
      console.log("wait");
      sleep(1000);
      service.getDistanceMatrix(
        {
          origins: [origin[document.getElementById("index").value].name],
          destinations: destinations2
            .map(function(element) {
              return element.name;
            })
            .slice(25 * i, 25 * (i + 1)),
          travelMode: "DRIVING"
          //   transitOptions: TransitOptions,
          //   drivingOptions: DrivingOptions,
          //   unitSystem: UnitSystem,
          //   avoidHighways: Boolean,
          //   avoidTolls: Boolean
        },
        callback
      );
    }
  }

  if (document.getElementById("array").value == 3) {
    for (i = 0; i < 4; i++) {
      console.log("wait");
      sleep(1000);
      service.getDistanceMatrix(
        {
          origins: [origin[document.getElementById("index").value].name],
          destinations: destinations3
            .map(function(element) {
              return element.name;
            })
            .slice(25 * i, 25 * (i + 1)),
          travelMode: "DRIVING"
          //   transitOptions: TransitOptions,
          //   drivingOptions: DrivingOptions,
          //   unitSystem: UnitSystem,
          //   avoidHighways: Boolean,
          //   avoidTolls: Boolean
        },
        callback
      );
    }
  }

  if (document.getElementById("array").value == 4) {
    for (i = 0; i < 4; i++) {
      console.log("wait");
      sleep(1000);
      service.getDistanceMatrix(
        {
          origins: [origin[document.getElementById("index").value].name],
          destinations: destinations4
            .map(function(element) {
              return element.name;
            })
            .slice(25 * i, 25 * (i + 1)),
          travelMode: "DRIVING"
          //   transitOptions: TransitOptions,
          //   drivingOptions: DrivingOptions,
          //   unitSystem: UnitSystem,
          //   avoidHighways: Boolean,
          //   avoidTolls: Boolean
        },
        callback
      );
    }
  }

  if (document.getElementById("array").value == 5) {
    for (i = 0; i < 4; i++) {
      console.log("wait");
      sleep(1000);
      service.getDistanceMatrix(
        {
          origins: [origin[document.getElementById("index").value].name],
          destinations: destinations5
            .map(function(element) {
              return element.name;
            })
            .slice(25 * i, 25 * (i + 1)),
          travelMode: "DRIVING"
          //   transitOptions: TransitOptions,
          //   drivingOptions: DrivingOptions,
          //   unitSystem: UnitSystem,
          //   avoidHighways: Boolean,
          //   avoidTolls: Boolean
        },
        callback
      );
    }
  }

  if (document.getElementById("array").value == 6) {
    for (i = 0; i < 2; i++) {
      console.log("wait");
      sleep(1000);
      service.getDistanceMatrix(
        {
          origins: [origin[document.getElementById("index").value].name],
          destinations: destinations6
            .map(function(element) {
              return element.name;
            })
            .slice(25 * i, 25 * (i + 1)),
          travelMode: "DRIVING"
          //   transitOptions: TransitOptions,
          //   drivingOptions: DrivingOptions,
          //   unitSystem: UnitSystem,
          //   avoidHighways: Boolean,
          //   avoidTolls: Boolean
        },
        callback
      );
    }

    console.log("wait");
    sleep(1000);
    service.getDistanceMatrix(
      {
        origins: [origin[document.getElementById("index").value].name],
        destinations: destinations6
          .map(function(element) {
            return element.name;
          })
          .slice(50, 74),
        travelMode: "DRIVING"
        //   transitOptions: TransitOptions,
        //   drivingOptions: DrivingOptions,
        //   unitSystem: UnitSystem,
        //   avoidHighways: Boolean,
        //   avoidTolls: Boolean
      },
      callback
    );
  }

  //   }
}

function save() {
  //   window.sessionStorage.setItem(
  //     `${document.getElementById("index").value}`,
  //     result
  //   );
  for (let i = 0; i < a.length; i++) {
    var node = document.createElement("P"); // Create a <li> node
    var textnode = document.createTextNode(a[i]); // Create a text node
    node.appendChild(textnode); // Append the text to <li>
    document.body.appendChild(node);
  }
}

const file = "dist.json";

//import * as data from './json/evento-xp-export.json';
// const fs = require('fs');
// const json_data = require('../json/evento-xp-export.json    ');

// fs.readFile(json_data, 'utf-8', function(err,data){
//     data=JSON.parse(data);
// });

function loadJSON(callback) {
  var obj = new XMLHttpRequest();

  obj.overrideMimeType("application/json");
  obj.open("GET", file, false);
  obj.onreadystatechange = function() {
    callback(obj.responseText);
  };
  obj.send(null);
}

function load() {
  loadJSON(function(response) {
    var data = JSON.parse(response);
    // console.log(data);

    const threshold = document.getElementById("threshold").value * 3600;
    const from = document.getElementById("selector").value;

    console.log(getCloseBy(from, data, threshold));
  });
}

function getDistance(from, to) {
  return to[from];
}

function isGood(from, to, threshold) {
  if (getDistance(from, to) < threshold) {
    return true;
  } else {
    return false;
  }
}

function getCloseBy(from, data, threshold) {
  let output = [];
  data.forEach(element => {
    if (isGood(from, element, threshold)) {
      output.push({ id: element.id, distance: getDistance(from, element) });
    }
  });
  return output;
}
