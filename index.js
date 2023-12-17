let nomeHeroi = "XTudo"
let quantXP = 20003
let levHeroi = ""


if (quantXP >= 1 && quantXP <= 1000) {
    levHeroi = "Ferro"
    console.log(levHeroi)
} else if (quantXP >= 1001 && quantXP <= 2000) {
    levHeroi = "Bronze"
    console.log(levHeroi)
}else if (quantXP >= 2001 && quantXP <= 5000) {
    levHeroi = "Prata"
}else if (quantXP >= 6001 && quantXP <= 7000) {
    levHeroi ="Ouro"
}else if (quantXP >= 7001 && quantXP <= 8000) {
    levHeroi = "Platina"
}else if (quantXP >= 8001 && quantXP <= 9000) {
    levHeroi = "Ascedente"
}else if (quantXP >= 9001 && quantXP <= 10000) {
    levHeroi = "Imortal"
}else if (quantXP >= 10001) {
    levHeroi = "Radiante"
}else {
    console.log("Seu herói "+ nomeHeroi+" ainda não tem ponto de experiência!!")
}

console.log("Seu herói de nome "+ nomeHeroi+ " está no nível de " + levHeroi)

