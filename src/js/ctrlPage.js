const $menuSuperior = document.querySelector('#cabecalho');
const classTravaNoTopo = 'travaNoTopo';

// Controle do menu superior ao dar um scroll na página
// Se tem scroll então fixa o menu superior no topo
window.addEventListener('scroll', function (e){
    if(this.scrollY > 0) {
        $menuSuperior.classList.add(classTravaNoTopo);
    } else {
        $menuSuperior.classList.remove(classTravaNoTopo);
    }
});