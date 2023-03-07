const nome = document.querySelector('#nome')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const calcular = document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')


function imc() {

    if(nome.value === '') {
        alert('Preencha seu nome.')
        return
    }

    if(altura.value === '') {
        alert('Preencha sua altura.')
        return
    }

    if(peso.value === '') {
        alert('Preencha seu peso.')
        return
    }

    const valorIMC = peso.value / altura.value ** 2

    let classificacao = ''

    if(valorIMC < 18.5) {
        classificacao = "abaixo do peso."
    } else if (valorIMC < 25) {
        classificacao = "com o peso ideal."
    } else if (valorIMC < 30) {
        classificacao = "acima do peso."
    } else if (valorIMC < 35) {
        classificacao = "com obesidade grau 1."
    } else if (valorIMC < 41) {
        classificacao = "com obesidade grau 2."
    } else {
        classificacao = "com obesidade grau 3."
    }


    resultado.textContent = `${nome.value}, seu IMC é ${valorIMC.toFixed(2)} e você está ${classificacao}`
}

calcular.addEventListener('click', imc);