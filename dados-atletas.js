class Atleta{
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura; 
        this.notas = notas;
    }
calculaCategoria() {
    if(this.idade <= 11){
        return "Infantil";
    } else if (this.idade >= 12 && this.idade <=13){
        return "Juvenil";
    } else if (this.idade >=14 && this.idade <=15){
        return "Intermadiario";
    } else if (this.idade >=16 && this.idade <= 30){
        return "Adulto";
    } else {
        return "Sem categoria"
    }
}
calculaIMC() {
    
    let imc = this.peso / (this.altura * this.altura);
    return imc;
}
calculaMediaValida(){
    let notasOrdenadas = atleta.notas.slice().sort((a, b) => a - b);

        
        notasOrdenadas.shift(); 
       
        notasOrdenadas.pop(); 

        
        let notasParaMedia = notasOrdenadas;

        
        let somaNotas = notasParaMedia.reduce((acumulador, nota) => acumulador + nota, 0);

        
        let media = somaNotas / 3;
        return media
}

obtemNomeAtleta() {
    return this.nome;
}
obtemIdadeAtleta() {
    return this.idade
}
obtemPesoAtleta() {
    return this.peso
}

obtemNotasAtleta() {
    return this.notas
}

}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);



console.log(`Nome: ${atleta.nome}`);
console.log(`Idade: ${atleta.idade}`);
console.log(`Peso: ${atleta.peso}`);
console.log(`Altura: ${atleta.altura}`)
console.log(`Notas: ${atleta.notas}`);
console.log(`Categoria: ${atleta.calculaCategoria()}`);
console.log(`IMC: ${atleta.calculaIMC()}`);
console.log(`Média Válida das Notas: ${atleta.calculaMediaValida()}`);

