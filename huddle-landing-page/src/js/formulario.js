function btn() {
let bordas = document.querySelectorAll ('.caixa')
let erro = document.querySelectorAll ('.erro')

if(nome.value == ''|| email.value == ''|| tel.value == ''|| txt.value == ''){

    for(i=0; i < bordas.length; i++){
        bordas[i].classList.remove ('ativado')
        bordas[i].classList.add ('desativado')
    }
    for(i=0; i < erro.length; i++){
        erro[i].style.display = 'block'
    }
}else {
    for(i=0; i < bordas.length; i++){
        bordas[i].classList.remove ('desativado')
        bordas[i].classList.add ('ativado')
    }
    for(i=0; i < erro.length; i++){
        erro[i].style.display = 'none'
    }
}

}