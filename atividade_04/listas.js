// 1. ARRAYS

// 1.1 Array Simples 
const frutas = ["Maçã", "Banana", "Laranja"]
// 1.2 FIFO (Fila)
const fila = ["Ana", "Beto", "Caio", "Daiane"];
fila.push("Ellen")
const primeiro = fila.shift(); // Primeiro intem 
console.log (primeiro);
// 1.3 FILO (Pilha)
const pilha = 
["Inferno de Dante",
    "One Piece",
    "A quarta Asa"];
pilha.push("O Alquimista");
const livro = pilha.pop ();
console.log(livro);
// 1.4 Buscar se existe
const teamLaranja = frutas.includes("Laranja");
const teamManga = frutas.includes("Manga");

// 2. Sets (Conjuntos)
// 2.1 Adicionando duplicados
const matricula = new Set([1001, 1002, 1005, 1009, 1002]);
console.log([...matricula]);
// 2.2 Adicionar item 
const cores = new Set(["Verde", "Azul"]);
cores.add("Vermelho");
cores.add("Branco");
cores.add("Preto");
console.log([...cores]);
// 2.3 Buscar se Existe
const teamVerde = cores.has("Verde");
const teamAmarelo = cores.has("amarelo");
console.log(teamVerde);
console.log(teamAmarelo);
// 2.4 Converter array em set
const convidados = ["Bruno", "henrique", "juliana",
    "carol", "Juliana", "Breno", "Henrique"];
    const convidados_unicos = new Set (convidados);
    console.log([...convidados_unicos]);
    // 3. Map (Mapas)
    // 3.1 Cadastro de Preços
    const produtos = new Map ();
    produtos.set ("Mouse", 50.00);
    produtos.set("Teclado", 120.00);
    // 3.2 Buscando um valor
    valorMouse = produtos.get("Mouse");
    console.log(valorMouse);