function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) nivel = "Ferro";
    else if (vitorias >= 11 && vitorias <= 20) nivel = "Bronze";
    else if (vitorias >= 21 && vitorias <= 50) nivel = "Prata";
    else if (vitorias >= 51 && vitorias <= 80) nivel = "Ouro";
    else if (vitorias >= 81 && vitorias <= 90) nivel = "Diamante";
    else if (vitorias >= 91 && vitorias <= 100) nivel = "Lendário";
    else if (vitorias >= 101) nivel = "Imortal";

    return `O Herói tem um saldo de ${saldoVitorias} vitórias e está no nível ${nivel}`;
}

const jogadores = [
    { nome: "Ahri", vitorias: 5, derrotas: 2 },
    { nome: "Darius", vitorias: 60, derrotas: 20 },
    { nome: "Ezreal", vitorias: 95, derrotas: 10 },
    { nome: "Garen", vitorias: 15, derrotas: 3 },
    { nome: "Jinx", vitorias: 85, derrotas: 5 },
    { nome: "Katarina", vitorias: 120, derrotas: 15 },
    { nome: "Lux", vitorias: 35, derrotas: 10 }
];

jogadores.forEach(jogador => {
    console.log(`${jogador.nome}: ${calcularNivel(jogador.vitorias, jogador.derrotas)}`);
});
