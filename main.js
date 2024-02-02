const primeiroNumero = document.getElementById('primeiro-numero');
const segundoNumero = document.getElementById('segundo-numero');
const form = document.getElementById('form');


form.addEventListener('submit', function(e) {
    e.preventDefault()

    maior = primeiroNumero.value >> segundoNumero.value;
    
    if (maior){
        document.getElementById('enviado').style.display = 'block';
        document.getElementById('erro-acerto').style.display = 'none';
        document.getElementById('enviado').innerHTML = `CORRETO! ${primeiroNumero.value} é maior que o ${segundoNumero.value}`
        primeiroNumero.style.backgroundColor = '';
        segundoNumero.style.backgroundColor = '';
    }

    else {
        document.getElementById('erro-acerto').style.display = 'block';
        document.getElementById('enviado').style.display = 'none';
        document.getElementById('erro-acerto').innerHTML = `ERRO: ${primeiroNumero.value} é menor ou igual a ${segundoNumero.value}`
        primeiroNumero.style.backgroundColor = 'rgba(99, 0, 0, 0.32)';
        segundoNumero.style.backgroundColor = 'rgba(99, 0, 0, 0.32)';
}});

