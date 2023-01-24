const campos = document.querySelectorAll ('.caixa')
const erro = document.querySelectorAll ('.erro')


function errosValidacao (index) {
    erro[index].style.display = 'block'
    campos[index].style.border = 'solid 2px red'
}

function acertoValidacao (index) {
    erro[index].style.display = 'none'
    campos[index].style.border = 'solid 2px green'
}


function validarName () {
    if(campos[0].value == ''){
        errosValidacao(0)
    }else{
        acertoValidacao(0)
    }
}

function validarEmail () {
    if(campos[1].value == ''){
        errosValidacao(1)
    }else{
        acertoValidacao(1)
    }
}

function validarTel () {
    if(campos[2].value == ''){
        errosValidacao(2)
    }else{
        acertoValidacao(2)
    }
}

function validarTexto () {
    if(campos[3].value == ''){
        errosValidacao(3)
    }else{
        acertoValidacao(3)
    }
}

document.querySelector('.btn').addEventListener('click',() => {
    validarName()
    validarEmail()
    validarTel()
    validarTexto()
})