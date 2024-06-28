
const inputs = document.getElementsByClassName('inputTag'); //PEGA TOTOS OS CAMPOS INPUTS E COLOCA NO VETOR 'inputs'
    
const localMsgErro = document.getElementsByClassName('MSGERRO');//PEGA TODOS AS DIVS QUE IRÃO APARECER MENSAGEM DE ERROS E COLOCA DENTRO DO VETOR 'localMsgErro'

const msgErro = document.createElement('p');//CRIA UMA MENSAGEM DE ERRO COM O ELEMENTO 'p'
msgErro.textContent = 'Cant be blank';

let msgErro2 = msgErro.cloneNode(true);//CRIA CLONES DAS MENSAGENS
let msgErro3 = msgErro.cloneNode(true);//CRIA CLONES DAS MENSAGENS
let msgErro4 = msgErro.cloneNode(true);//CRIA CLONES DAS MENSAGENS

const msgErroLet = document.createElement('p');//CRIA UMA MENSAGEM DE ERRO COM O ELEMENTO 'p'
msgErroLet.textContent = 'Wrong format, numbers only';//CONTEUDO DA MENSAGEM

let msgErroLet2 = msgErroLet.cloneNode(true);//CRIA CLONES DAS MENSAGENS
let msgErroLet3 = msgErroLet.cloneNode(true);//CRIA CLONES DAS MENSAGENS

/** Código que formata o input, neste caso, faz com que o input de campo text a cada 4 caracteres digitados irá adicionar um espaço automaticamente */

/**CRIA UM EVENTO DO TIPO OUVINTE, QUE GARANTE QUE o código JavaScript só será executado após o DOM (Document Object Model) estar completamente carregado. */
document.addEventListener('DOMContentLoaded', () => {

    inputCardNumber.addEventListener('input', (e) => {//CRIA UM EVENTO DO TIPO OUVINTE NO INPUT COM O ID 'inputCardNumber', (ESSE EVENTO SERÁ ACIOANO A CADA DIGITO QUE O USUARIO DER NO INPUT)
    let value = e.target.value.replace(/\s+/g, ''); // CRIA UMA VARIAVEL COM NOME DE 'value' E ATRIBUI O VALOR DE 'inputCardNumber' A ELE.

    
    if (value.length > 4) {
        value = value.slice(0, 4) + ' ' + value.slice(4);// Adiciona espaço após o QUARTO dígito
    }
    if(value.length > 9){
        value = value.slice(0, 9) + ' ' + value.slice(9)// Adiciona espaço após o NONO dígito
    }
    if(value.length > 14){
        value = value.slice(0,14) + ' ' + value.slice(14);// Adiciona espaço após o DECIMO QUARTO dígito
    }

    e.target.value = value;// ATUALIZA O VALOR DE DENTRO DO INPUT
    });
});

    const teste = document.getElementById('msgErro4');

function checkInputs(a){/**FUNÇÃO QUE CHECA O INPUT (DEPENDENDO DO QUE FOI SELECIONADO) E APLICA MENSAGENS DE ERROS */
    switch(a){
        case 1:
            if(inputs[0].value.length == 0){
                inputs[0].style.border = '1px solid red';
                localMsgErro[0].appendChild(msgErro);
            }
            break;

        case 2:
            if(inputs[1].value.length == 0){
                inputs[1].style.border = '1px solid red';
                localMsgErro[1].appendChild(msgErro2);
            }else if (/[a-zA-Z]/.test(inputs[1].value)) {
                inputs[1].style.border = '1px solid red';
                localMsgErro[1].appendChild(msgErroLet);
            }
            break;

        case 3:
            if(inputs[2].value.length == 0){
                inputs[2].style.border = '1px solid red';
                localMsgErro[2].appendChild(msgErro3);
            }else if (/[a-zA-Z]/.test(inputs[2].value)) {
                inputs[2].style.border = '1px solid red';
                localMsgErro[2].appendChild(msgErroLet2);
            }
            break;

        case 4:
            if(inputs[3].value.length == 0){
                inputs[3].style.border = '1px solid red';
                localMsgErro[2].appendChild(msgErro3);
            }else if (/[a-zA-Z]/.test(inputs[3].value)) {
                inputs[3].style.border = '1px solid red';
                localMsgErro[2].appendChild(msgErroLet2);
            }
            break;

        case 5:
            if(inputs[4].value.length == 0){
                inputs[4].style.border = '1px solid red';
                localMsgErro[3].appendChild(msgErro4);
            }else if (/[a-zA-Z]/.test(inputs[4].value)) {
                inputs[4].style.border = '1px solid red';
                localMsgErro[3].appendChild(msgErroLet3);
                teste.style.marginRight = '7%'
            }
            break;

        default: 
            alert(`no parameters`)
            break;
    }
    
}

function checkAllInputs(){/**FUNÇÃO QUE CHECA TODOS OS INPUTS (FUNÇÃO FEITA PARA O BOTÃO)*/
    for(a = 1; a <= 5; a++){
        checkInputs(a)
    }
}

function clearMsgErro(b){/*FUNÇÃO QUE LIMPA A MENSAGEM DE ERRO DOS INPUTS*/
    for(var i = 1; i <=3; i++){
        if(i = b){
            const lastParagraph = localMsgErro[i-1].lastElementChild;
            inputs[i-1].style.border = '1px solid hsl(270, 3%, 87%)';
            localMsgErro[i-1].removeChild(lastParagraph);  
        }         
    }
}

function clearMsgErroEsp1(){/*FUNÇÃO QUE LIMPA A MENSAGEM DE ERRO DO INPUT 'YEAR'*/

        const lastParagraph = localMsgErro[2].lastElementChild;
        inputs[3].style.border = '1px solid hsl(270, 3%, 87%)';
        localMsgErro[2].removeChild(lastParagraph);         
    
}

function clearMsgErroEsp2(){/*FUNÇÃO QUE LIMPA A MENSAGEM DE ERRO DO INPUT 'CVV'*/

        const lastParagraph = localMsgErro[3].lastElementChild;
        inputs[4].style.border = '1px solid hsl(270, 3%, 87%)';
        localMsgErro[3].removeChild(lastParagraph);         
    
}


/*CÓDIGO QUE APLICA O VALOR DO INPUT DENTRO DO CARTÃO*/
const NameCardSpan = document.getElementById('namePerson');//PEGA O CAMPO DO SPAN NOME NO QUAL IRÁ MOSTRAR O NOME DA PESSOA DONA DO CARTÃO
const NumberCardSpan = document.getElementById('numberResult');//PEGA O CAMPO DO SPAN NUMERO NO QUAL IRÁ MOSTRAR O NUMERO DO CARTÃO DA PESSOA
const MounthCardSpan = document.getElementById('ResultMounth');//PEGA O CAMPO DO SPAN MES NO QUAL IRÁ MOSTRAR O MES DE EXPIRAÇÃO DO CARTÃO DA PESSOA
const YearCardSpan = document.getElementById('ResultYear');//PEGA O CAMPO DO SPAN ANO NO QUAL IRÁ MOSTRAR O ANO DE EXPIRAÇÃO DO CARTÃO DA PESSOA
const CVVCardSpan = document.getElementById('spanCVV');//PEGA O CAMPO DO SPAN CVV NO QUAL IRÁ MOSTRAR O CODIGO DO CARTÃO DA PESSOA


    inputs[1].addEventListener('input', function() {//ADICIONA UM EVENTO DO TIPO OUVINTE NO INPUT DOS NÚMEROS DO CARTÃO. A CADA INPUT DENTRO DELE IRÁ ACIONAR ESSA FUNÇÃO
        const inputValue = inputs[1].value;
        const spanText =  inputValue + '0000 0000 0000 0000'.slice(inputValue.length);
        
        NumberCardSpan.textContent = spanText.toUpperCase();
    });

    inputs[0].addEventListener('input', function() {//ADICIONA UM EVENTO DO TIPO OUVINTE NO INPUT DO NOME DO CARTÃO. A CADA INPUT DENTRO DELE IRÁ ACIONAR ESSA FUNÇÃO
        const inputValue = inputs[0].value; 
        const spanText = inputValue;

        NameCardSpan.textContent = spanText.toUpperCase();
    });

    inputs[2].addEventListener('input', function() {//ADICIONA UM EVENTO DO TIPO OUVINTE NO INPUT DO MES DE EXPIRAÇÃO DO CARTÃO. A CADA INPUT DENTRO DELE IRÁ ACIONAR ESSA FUNÇÃO
        const inputValue = inputs[2].value; 
        const spanText = MounthCardSpan;

        const paddedValue = inputValue.padStart(2, '0')
        spanText.textContent = paddedValue;

        
    });

    inputs[3].addEventListener('input', function() {//ADICIONA UM EVENTO DO TIPO OUVINTE NO INPUT DO ANO DE EXPIRAÇÃO DO CARTÃO. A CADA INPUT DENTRO DELE IRÁ ACIONAR ESSA FUNÇÃO
        const inputValue = inputs[3].value; 
        const spanText = YearCardSpan;

        const paddedValue = inputValue.padStart(2, '0')
        spanText.textContent = paddedValue;

        
    });

    inputs[4].addEventListener('input', function() {//ADICIONA UM EVENTO DO TIPO OUVINTE NO INPUT DO CVV DO CARTÃO. A CADA INPUT DENTRO DELE IRÁ ACIONAR ESSA FUNÇÃO
        const inputValue = inputs[4].value; 
        const spanText = CVVCardSpan;

        const paddedValue = inputValue.padStart(3, '0');
        spanText.textContent = paddedValue;


    });
/*CÓDIGO QUE APLICA O VALOR DO INPUT DENTRO DO CARTÃO*/



/**VERIFICA SE ESTÁ TUDO CERTO PARA MANDAR O FORMULÁRIO */
const formulario = document.querySelector('form'); 
const MsgAproved = document.getElementById('aproved');
function verifyForm(){
    if(inputs[0].value.length > 0 && inputs[1].value.length == 19 && inputs[2].value.length > 0 && inputs[3].value.length > 0 && inputs[4].value.length > 0 &&  !/[a-zA-Z]/.test(inputs[1].value) && !/[a-zA-Z]/.test(inputs[2].value) && !/[a-zA-Z]/.test(inputs[3].value) && !/[a-zA-Z]/.test(inputs[4].value) ){
        formulario.style.display = 'none';
        MsgAproved.style.display = 'flex';

    }
}
/**VERIFICA SE ESTÁ TUDO CERTO PARA MANDAR O FORMULÁRIO */


function reloadPage(){//FUNÇÃO QUE RECARREGA A PÁGINA
    location.reload();
}