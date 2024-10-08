function  criaCartao(pergunta, resposta){
    let conteudo = document.getElementById('conteudo') 
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
    
    cartao.innerHTML = `
    <div class="cartao--conteudo">
    <div class="cartao--pergunta"><p>Quando foi lançado o One Piece?</p></div>
    <div class="cartao--resposta"><p>Em 1997</p></div>
    </div>
    `
    console.log(cartao)

}

