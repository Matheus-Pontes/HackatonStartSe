// Elementos do html

// Elementos do menu superior
const $menuSuperior = document.querySelector('#cabecalho');
const classTravaNoTopo = 'travaNoTopo';

const $btnCalcular = document.querySelector('#btnCalcular');
const $renda = document.querySelector('#renda');
const $despesa = document.querySelector('#despesa');
const $resultado = document.querySelector('.seuResultado');

// Elementos do simulador de gastos

// Controle do menu superior ao dar um scroll na página
// Se tem scroll então fixa o menu superior no topo
window.addEventListener('scroll', function (e) {
    if(this.scrollY != 0 ) {
        $menuSuperior.classList.add(classTravaNoTopo);
    } else {
        $menuSuperior.classList.remove(classTravaNoTopo);
    }
});

// Calculadora...
$btnCalcular.addEventListener('click', () => {
    let renda = Number($renda.value);
    let despesa = Number($despesa.value);

    if(renda == 0 && despesa == 0) {  
        alert("Acho que você não vem comprando nada e nem se esforçando por um emprego...Digite algum valor");
    } 
    else if(renda == Number(renda) && despesa == Number(despesa)) {
        if(renda > despesa) {
            alert(`Você vem se controlando né kkk Sobrou R$${renda - despesa}`);
        }
        if(renda == despesa) {  
            alert("Valores iguais oloko impressionou kkk");
        } 
        if (renda < despesa) {
            alert(`IIIIH Rapaz é melhor verificar nossa planilha de gestão para evitar esses problemas ${('https://drive.google.com/drive/folders/1SMFZ8vm_wAdsq3FXRYqvXjvKWRROkq8w')}...Sobrou R$${renda - despesa}`);
        }
    }
    else {
        alert('Digite apenas números');
    }
});