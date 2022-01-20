const todosOsProjetos = document.querySelector('.todos-projetos');



new function(){
    mostrarProjetos()
}


function mostrarProjetos(){
    if(localStorage.length == 0){
        return 0;
    }
    let projetos = []
    for(let i = 0; i < localStorage.length; i++){
        projetos.push(JSON.parse(localStorage.getItem(i)))
        console.log(projetos)
    }
    projetos.forEach(projeto  =>{
        
        todosOsProjetos.innerHTML += montaCartao(projeto)

        
    })

}

function montaCartao(projeto){
    let cartao = 
    `
    <a class="projetowrapper" data-id="${projeto.id}">
        <div class="projeto">
            <div class=" codigo__wrapper_comunidade">
                <code class="preview ${projeto.detalheDoProjeto.linguagem}">${projeto.detalheDoProjeto.codigo}</code>
            </div>
            <div class="descricaoCode_comunidade">
                <h2 class="projeto_titulo">${projeto.detalheDoProjeto.NomeDoProjeto}</h2>
                <p class="projeto_descricao">${projeto.detalheDoProjeto.DescricaoDoProjeto}</p>
            </div>
            <div class="linguagem_usada">
                <h4 class="projeto_linguagem --linguagem${projeto.detalheDoProjeto.linguagem}">${projeto.detalheDoProjeto.linguagem}</h4>
            <div>
        </div>
    </a>
    ` 
    return cartao

}
