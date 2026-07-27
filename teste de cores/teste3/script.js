function alternarTema(){
    document.body.classList.toggle('dark-mode')
    var btn = document.getElementById('btn-tema')
    if (document.body.classList.contains('dark-mode')) {
        btn.innerHTML = '☀️ Modo Claro';
    } else {
        btn.innerHTML = '🌙 Modo Escuro'
    }
}