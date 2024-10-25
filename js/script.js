const hamburegr = document.querySelector('.hamburegr');
const navList = document.querySelector('.nav-list');

if(hamburegr){
    hamburegr.addEventListener('click', ()=>{
        navList.classList.toggle('open');
    })
}