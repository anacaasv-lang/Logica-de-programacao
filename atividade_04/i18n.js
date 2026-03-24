//1.0 lista de Termos (Potuguês)
    const termosPT = ["Bem vindo", "Carrinho" , "Finalizar", "Sair"]

//2.0 Lista de Termos (Inglês)
    const termosEN = new Map([
        ["Bem vindo" , "Welcome"];
        ["Carrinho" , "Cart"];
        ["Sair" , "Logout"];]);
//3.0 Lista de Termos (Espanhol)
    const termoES = new Map ([
        ["Bem vindo" , "Bienvinido"];
        ["Carrinho", "Carrito"];
        ["Sair" , "Salir"];]);
//4.0 escolher o idioma 
    const idioma_selecionado = termosEN
//5.0 gerar termos traduzidos 
    const traducao = 
    termosPT.Map(termo => idioma_selecionado.get(termo));
    console.log(traducao[00]);
    console.log(traducao[01]);
    console.log(traducao[02]);