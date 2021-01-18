let bthHistorico = document.getElementById('historico');
let historico = document.getElementById('memoria');
let btnFecharHistorico = document.getElementById('fecharHistorico')


bthHistorico.addEventListener('click',function(){
    historico.classList.add('visible');
});

btnFecharHistorico.addEventListener('click',function(){
    historico.classList.remove('visible');
});