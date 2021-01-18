/* Retorna um array com os botões da calculadora */
let click = document.querySelectorAll(".click");

/* Display dos historicos */
let display = document.querySelector(".displayTela");

/* Display dos Resultados */
let displayResultado = document.querySelector(".displayTelaResultado");

/* botão igual ()=) */
let operar = document.getElementById("Igual");

/* todos o numeros e operadores são adicionados neste array */
let numeros = [];
let resultadoAnterior = [];


/* Objeto com os metodos de operadores */
let operadores = {

    clear:function(){
        numeros = [];
        display.innerHTML = "";
        displayResultado.textContent = 0;
        resultadoAnterior = [];
    },
    addOperacao:function(simbolo){
        numeros.push(simbolo);
    },
    total:function(){

        let calculo = eval(numeros.join(""));

        resultadoAnterior = calculo;
       
        displayResultado.textContent = calculo;


    },
};




/* Adiciona o valor correspondente ao botão clicado no array numeros */
click.forEach(function (click) {

    click.addEventListener("click", function () {

        let valor = click.id;

        switch (valor) {
            case 'C':
                operadores.clear();
            break

            case 'Igual':
                operadores.total();
            break

            case 'Mais':
                operadores.addOperacao('+');
            break

            case 'Menos':
                operadores.addOperacao('-');
            break

            case 'Porcento':
                operadores.addOperacao('%');
            break

            case 'Dividir':
                operadores.addOperacao('/');
            break

            case 'Multiplica':
                operadores.addOperacao('*');
            break
            
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if (isNaN(valor)) {
                    display.textContent = 'error'
                    console.log(valor)
                } else {

                    if (numeros == '') {
                        numeros.push(parseInt(valor));
                    } else {
                        
                        if (numeros[numeros.length - 1] == '+' || numeros[numeros.length - 1] == '*') {
                            numeros.push(parseInt(valor));
                        } else {
                            let concatena = numeros[numeros.length - 1] + valor;
                            numeros[numeros.length - 1] = parseInt(concatena);
                        };

                    };

                };
                
                
            break
        };

        /* Mostra a opração realizada no display de historicos */
        display.textContent = numeros.join("");
        
        console.log(numeros);
    });
});


