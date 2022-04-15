const title = document.querySelector('.info .metadata .title')
const moreBtn = document.querySelector('.info .metadata .moreBtn')

moreBtn.addEventListener('click', ()=>{
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});