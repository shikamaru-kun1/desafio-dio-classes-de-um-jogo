// Programa: Classes de um jogo

class Heroi {
    constructor(nome, idade, tipo, arma, defesa){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.arma = arma;
        this.defesa = defesa;
    }

    atacar(){
        if(this.tipo != 'fada'){
            console.log(`O ${this.tipo.toUpperCase()}, DE NOME ${this.nome.toUpperCase()}, ATACOU UTILIZANDO ${this.arma.toUpperCase()}.\nELE TEM ${this.idade} ANOS!`);
        }else{
            console.log(`A ${this.tipo.toUpperCase()}, DE NOME ${this.nome.toUpperCase()}, ATACOU UTILIZANDO ${this.arma.toUpperCase()}.\nELA TEM ${this.idade} ANOS!`);
        }
    }

    defender(){
        if(this.tipo != 'fada'){
            console.log(`O ${this.tipo.toUpperCase()}, DE NOME ${this.nome.toUpperCase()}, SE DEFENDEU UTILIZANDO ${this.defesa.toUpperCase()}.\nELE TEM ${this.idade} ANOS!`);
        }else{
            console.log(`A ${this.tipo.toUpperCase()}, DE NOME ${this.nome.toUpperCase()}, SE DEFENDEU UTILIZANDO ${this.defesa.toUpperCase()}.\nELA TEM ${this.idade} ANOS!`);
        }
    }
}

let resposta = true, idioma, lerTeclado = require("prompt-sync")(), nomeHeroi, idadeHeroi, tipoHeroi, armaHeroi, defesaHeroi;

function isInteger(valor){
    return typeof valor === "number" && isFinite(valor) && Math.floor(valor) === valor;
}

do {
    console.log("EM QUE IDIOMA PRETENDE EXECUTAR O PROGRAMA? | WHAT IS THE LANGUAGE YOU WANT TO RUN THE PROGRAM?");
    console.log("\n===============================================================================================\n");
    console.log("PARA PORTUGUÊS PRESSIONE A TECLA '1' | FOR ENGLISH TYPE '2'");
    console.log("\n===========================================================\n");
    idioma = lerTeclado();

    if(idioma == 1){
        console.log("VOCÊ ESCOLHEU 'PORTUGUÊS'!");
        console.log("\n==========================\n");
        console.log("PROGRAMA: ---- CLASSES DE UM JOGO ----");
        console.log("\n======================================\n");
        console.log("QUAL É O NOME DO HERÓI?");
        nomeHeroi = String(lerTeclado());
        console.log("\n=======================\n");
        console.log("QUAL É A IDADE DO HERÓI?");
        idadeHeroi = Number(lerTeclado());
        console.log("\n========================\n");

        if(isInteger(idadeHeroi)){
            if(idadeHeroi > 70){
                console.log("A IDADE DO HERÓI NÃO DEVE SER SUPERIOR À 70 ANOS!");
                console.log("\n=================================================\n");
            }
        }else{
            console.log("O NÚMERO DIGITADO É INVÁLIDO!");
            console.log("\n=============================\n");
        }

        console.log("QUAL É O TIPO DE HERÓI?");
        tipoHeroi = String(lerTeclado());
        console.log("\n========================\n");
        console.log("QUAL É O TIPO DE ARMA UTILIZADA PELO HERÓI?");
        armaHeroi = String(lerTeclado());
        console.log("\n===========================================\n");
        console.log("QUAL É O TIPO DE DEFESA UTILIZADA PELO HERÓI?");
        defesaHeroi = String(lerTeclado());
        console.log("\n=============================================\n");
        const infoHeroi = new Heroi(nomeHeroi, idadeHeroi, tipoHeroi, armaHeroi, defesaHeroi);
        infoHeroi.atacar();
        infoHeroi.defender();
        console.log("\n==============================================================================\n");
        console.log("DESEJA REPETIR? S/N");
        resposta = castToBoolean(String(lerTeclado()), idioma);
    }else if(idioma == 2){
        console.log("YOU CHOSE 'ENGLISH'!");
        console.log("\n====================\n");
        console.log("PROGRAM: ---- GAMING CLASSES ----");
        console.log("\n=================================\n");
        console.log("WHAT IS THE NAME OF THE HERO?");
        nomeHeroi = String(lerTeclado());
        console.log("\n=============================\n");
        console.log("WHAT IS THE AGE OF THE HERO?");
        idadeHeroi = Number(lerTeclado());
        console.log("\n============================\n");

        if(isInteger(idadeHeroi)){
            if(idadeHeroi > 70){
                console.log("THE AGE OF THE HERO CANNOT BE GREATHER THAN 70 YEARS!");
                console.log("\n=====================================================\n");
            }
        }else{
            console.log("THE NUMBER YOU TYPED IS NOT VALID!");
            console.log("\n==================================\n");
        }

        console.log("WHAT IS THE KIND OF THE HERO?");
        tipoHeroi = String(lerTeclado());
        console.log("\n=============================\n");
        console.log("WHAT IS THE KIND OF WEAPON USED BY THE HERO?");
        armaHeroi = String(lerTeclado());
        console.log("\n============================================\n");
        console.log("WHAT IS THE KIND OF DEFENSE USED BY THE HERO?");
        defesaHeroi = String(lerTeclado());
        console.log("\n=============================================\n");
        const infoHeroi = new Heroi(nomeHeroi, idadeHeroi, tipoHeroi, armaHeroi, defesaHeroi);
        infoHeroi.atacar();
        infoHeroi.defender();
        console.log("\n==============================================================================\n");
        console.log("DO YOU WISH TO REPEAT IT? Y/N");
        resposta = castToBoolean(String(lerTeclado()), idioma);
    }else{
        console.log("IDIOMA NAO ATRIBUÍDO! | NON-ASSIGNED LANGUAGE!");
    }
} while(resposta);

function castToBoolean(letra, lingua){
    if(letra == 'Y' || letra == 'y' || letra == 'S' || letra == 's'){
        return true;
    }else if(letra == 'N' || letra == 'n'){
        return false;
    }else{
        if(lingua == 1){
            console.log("OPÇÃO INVÁLIDA!");
        }else{
            console.log("NON-VALID OPTION!");
        }

        return false;
    }
}