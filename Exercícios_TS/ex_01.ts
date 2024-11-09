let nome:string = "Raquel";
let idade:number = 16;
let ativo:boolean = true;
let hobbies:string[] = ["Cozinhar","Jogar Volei","Ler","Escrever"];
let endereco: {
    pais: string;
    cidade: string;
    estado: string;
    cep: number;
}={
    pais:"Brasil",
    cidade:"Manhuaçu",
    estado:"Minas Gerais",
    cep:1234,
};
console.log(`Nome: ${nome}, Idade: ${idade}, Ativo: ${ativo}`);
console.log(`Meus hobbies: ${hobbies.join(",")}`);
console.log(`Meu endereço: ${endereco.pais} - ${endereco.cidade} - ${endereco.estado} - ${endereco.cep}`);
