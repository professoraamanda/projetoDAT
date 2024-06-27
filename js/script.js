

document.addEventListener('DOMContentLoaded', function () {
    var dropdownToggle = document.querySelector('.dropdown-toggle');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', function () {
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        } else {
            dropdownMenu.style.display = 'block';
        }
    });

    // Fechar o menu ao clicar fora dele
    document.addEventListener('click', function (event) {
        var isClickInside = dropdownToggle.contains(event.target) || dropdownMenu.contains(event.target);
        if (!isClickInside) {
            dropdownMenu.style.display = 'none';
        }
    });
});