function saudacao(nome: string, idade?: number, cidade?: string, ocupacao?: string): string {
    let mensagem = `Olá, ${nome}!`;
    if (idade) {
        mensagem += ` Você tem ${idade} anos.`;
    }    
    if (cidade) {
        mensagem += ` Você mora em ${cidade}.`;
    }
    if (ocupacao) {
        mensagem += ` Você trabalha como ${ocupacao}.`;
    }
     return mensagem;
}
console.log(saudacao("Alice"));
console.log(saudacao("Bob", 30));
console.log(saudacao("Carlos", 25, "São Paulo"));
console.log(saudacao("Diana", 28, "Rio de Janeiro", "Engenheira"));
