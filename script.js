// load


const load = document.querySelector('.load')

const mytempo = setTimeout(()=>{
    load.setAttribute('style', 'display: none;')
},2100)








const linguagem = document.querySelector('.linguagem')
const areaDoCodigo = document.querySelector('.codigo-wrapper')
const botao = document.querySelector('.botao')
const codigo = document.querySelector('.code__area_textarea')
// Botao highlight 

function aplicaHighlight(){
    const codigo = areaDoCodigo.innerText
    areaDoCodigo.innerHTML = `<code class="hljs code__area_textarea _{linguagem.value}"contenteditable="true" spellcheck="false" aria-label="Editor de código"></code>`
    areaDoCodigo.querySelector('code').textContent = codigo

    hljs.highlightElement(areaDoCodigo.querySelector('code'))
}

botao.addEventListener('click', () => {
    aplicaHighlight()
})


// botão salvar 


const _botaoSalvar = document.querySelector('.salvar')
const _nomeProjeto = document.querySelector('.projeto__nome')
const _descricaoProjeto = document.querySelector('.projeto__descricao')

const _corDaBorda = document.querySelector('.personalizacao__bordas')



_botaoSalvar.addEventListener('click', ()=>{
    if(typeof(Storage) != "undefined"){
        console.log('suporta localstoreg')
        const projeto = montaProjeto()
        salvarLocalStorege(projeto)
    }else{
        console.log('não suporta o localstoreg')
    }

})

let numeroId = 1;

if(localStorage.length > 0){
    numeroId = localStorage.length
}

function montaProjeto(){
    let projeto = {
        'id': atribuiId(),
        'detalheDoProjeto':{
            'NomeDoProjeto': _nomeProjeto.value,
            'DescricaoDoProjeto': _descricaoProjeto.value,
            'linguagem': linguagem.value,
            'codigo': codigo.innerText,
            'corDaBorda': _corDaBorda.value
        }
        
    }
    return projeto   
}

function atribuiId(){
    if(localStorage.length ==0){
        return 0
    }else{
        if(localStorage.length == numeroId){
            let novoId = numeroId;
            numeroId++
            return novoId
        }
    }
}


function salvarLocalStorege(objetoJson){
    localStorage.setItem(objetoJson.id, JSON.stringify(objetoJson))
}





// Interação com Menu



