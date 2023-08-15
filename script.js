const btn = document.querySelector('.btn');
const nav = document.querySelector('nav');
const illustration = document.querySelector('.illustration');
const texteIntro = document.querySelector('.texte-intro');



btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    nav.classList.toggle('visible');
    illustration.classList.toggle('hidden');
    texteIntro.classList.toggle('hidden');
})










