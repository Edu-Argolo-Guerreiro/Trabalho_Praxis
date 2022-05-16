
const name  = document.getElementById('name')
const CPF = document.getElementById('CPF');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const formulario = document.getElementsByClassName('formulario');
const button = document.getElementById('mostrarTabela')
let i = 0
let z = 0



name.setAttribute('placeholder', 'Nome')
name.addEventListener('input', Validarnome)
function Validarnome (){
let conteúdo = name.value
for(let i = 0; i< 10; i++){
    if(name.value.indexOf(`${i}`) !=1){name.value = name.value.replace(`${i}`,'')}
    }
let test = conteúdo.indexOf('1')
    if (test != -1){
        name.value = conteúdo.replace('1',"")
        console.log(conteúdo.indexOf("1"))}
    else{
        console.log(conteúdo.indexOf('1'))
    }
    }


let maskCPF = document.getElementById('CPF')
maskCPF.setAttribute('placeholder', 'CPF')

let inputCPF = document.getElementById('CPF')

inputCPF.addEventListener('input', mascaraCPF)

function mascaraCPF(){
    let numerosCPF = inputCPF.value 
    let arrayCPF = []
    if(numerosCPF.length == 11 && numerosCPF.indexOf('.') == -1){
        for(let i = 1; i < 12; i++){ 
            if(i == 3 || i == 6){
                arrayCPF.push(numerosCPF[i-1])
                arrayCPF.push('.')
            }else if(i == 9){
                arrayCPF.push(numerosCPF[i-1])
                arrayCPF.push('-')
            }
            else{
                arrayCPF.push(numerosCPF[i-1])
            }

        }
inputCPF.value = arrayCPF.join('')
    }else if(numerosCPF.indexOf('.') != -1){
        let x =0
        while(numerosCPF.indexOf('.') != -1 && x <=3){
            
            numerosCPF = numerosCPF.replace('.', "");
            numerosCPF = numerosCPF.replace('-', "");

            inputCPF.value = numerosCPF
            x++
        }
    }
}


email.setAttribute ('placeholder','Email')


let maskTel = document.getElementById('telefone')
maskTel.setAttribute('placeholder', 'Telefone')

let inputTel = document.getElementById('telefone')
inputTel.addEventListener('input', mascaraTel)

function mascaraTel (){
    let numerosTel =  inputTel.value
    let arrayTel = []
    if(numerosTel.length == 11 && numerosTel.indexOf('-') == -1){
        for(let i = -1; i < 11; i++){
            if(i == -1){
                arrayTel.push(numerosTel[i])
                arrayTel.push('(')
            }else if(i == 1){
                arrayTel.push(numerosTel[i])
                arrayTel.push(')')
            }else if( i == 6){
                arrayTel.push(numerosTel[i])
                arrayTel.push('-')
            }else{
                arrayTel.push(numerosTel[i])
            }
        }
inputTel.value = arrayTel.join('')
    }else if(numerosTel.indexOf('.') != -1){
        let y =0
        while(numerosTel.indexOf('.') != -1 && y <=3){
            
            numerosTel = numerosTel.replace('()', "");
            numerosTel = numerosTel.replace('-', "");

            inputTel.value = numerosTel
            x++
        }
    }    
}



mostrarTabela.addEventListener('click', escondertabela)
function escondertabela (){
    if (i%2 == 0 ){
        document.getElementById('tabela').setAttribute('class', 'escondido')
    }else{
        document.getElementById('tabela').setAttribute('class', 'table table-secondary table-hover table-bordered')
    }
    i++
}


registrar.addEventListener('click', addTabela)

function addTabela (){
let table = document.getElementsByTagName('tbody')[0]
let tabela = document.createElement('tr')
let cabeçalho = document.createElement('th')
let nomeTabela = document.createElement('td')
let cpfTabela = document.createElement('td')
let emailTabela = document.createElement('td')
let telTabela = document.createElement('td')

cabeçalho.textContent = ''
nomeTabela.textContent = name.value
cpfTabela.textContent = CPF.value
emailTabela.textContent = email.value
telTabela.textContent = telefone.value



tabela.appendChild(cabeçalho)
tabela.appendChild(nomeTabela)
tabela.appendChild(cpfTabela)
tabela.appendChild(emailTabela)
tabela.appendChild(telTabela)

table.appendChild(tabela)}


let registro = document.getElementById('registro')
let tabela = document.getElementById('tabela')
let corrigir = document.getElementById('corrigir')
tabela.addEventListener('click', mostrarCorrigir)
function mostrarCorrigir(){
    corrigir.classList.remove('escondido')
    registro.classList.add('escondido')
}