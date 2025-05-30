let filaAtendimento = [
    "cliente 003",
    "cliente 004",
    "cliente 005",
    "cliente 006",
    "cliente 007"
  ];

filaAtendimento.unshift('cliente 001' , 'cliente 002');
console.log(`Depois do unshift: ${filaAtendimento}`);
console.log(filaAtendimento);