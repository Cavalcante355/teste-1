let distanciaPercorrida, combustivelGasto, media

distanciaPercorrida = parseInt(prompt("Digite a distância percorrida pelo automovel:"));
combustivelGasto = parseInt(prompt("Digite o Combustivel Gasto pelo automovel:"));

media = distanciaPercorrida / combustivelGasto;

document.write(`O consumo médio é ${media}`);