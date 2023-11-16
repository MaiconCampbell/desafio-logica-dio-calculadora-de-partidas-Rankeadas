function calculadorElo(vitorias, derrotas) {
  return vitorias - derrotas
}
let result = calculadorElo(20, 3)

if (result <= 10) {
  elo = "Ferro"
}
else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
  elo = "Bronze"
}
else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
  elo = "Prata"
}
else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
  elo = "Ouro"
}
else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
  elo = "Diamante"
}
else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
  elo = "Lendário"
}
else {
  elo = "imortal"
}

const msg = `O herói tem saldo de ${saldoVitorias} vitórias e está no nível ${elo}`

console.log(msg)