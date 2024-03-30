document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.querySelector('.menu');

    // Adicione um evento de clique ao botão de menu
    menuBtn.addEventListener('click', function () {
        // Alternar a classe 'active' no menu para mostrar ou ocultar
        menu.classList.toggle('active');
    });
});