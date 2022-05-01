// Variaveis que referenciam os elementos do html
const $mobileMenu = document.querySelector('.mobileMenu');
const $navList = document.querySelector('.navList');
const $navListLinks = document.querySelectorAll('.navList li');
const classActive = 'active';

// Função que chama um evento no caso o de click
$mobileMenu.addEventListener('click', () => {

    // Tira ou colocar uma classe no elemento
    $navList.classList.toggle(classActive);

    // Chama função de animação 
    animationNavLinks();
});

function animationNavLinks() {
    // Passa por cada link que temos no menu superior
    // Verificando se tem a animação ou não
    // Se tem animação retira
    // Se não tem coloca animação
    
    $navListLinks.forEach((link) => {
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = "navLinksFade 0.5s ease forwards 0.3s";
        }
    });
}