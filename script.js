const gato = document.querySelector('.gato');
const lixo = document.querySelector('.lixo');

const pulo = ()=>{
    gato.classList.add('pulo');
    setTimeout(()=>{
        gato.classList.remove('pulo')
    },600);
} 

const loop = setInterval(()=>{
    const lixoX = lixo.offsetLeft;
    const gatoY = +window.getComputedStyle(gato).bottom.replace('px','');
    if (lixoX<100 && lixoX>0 && gatoY<80)
    {
        gato.classList.remove('pulo')
        gato.src='explosao.gif';
        lixo.style.animation='none';
        lixo.style.visibility = "hidden";

        setTimeout(()=>{
            gato.style.visibility = "hidden";
        },1000);

        clearInterval(loop);
        
        
    }

} ,10)

document.addEventListener('keydown', pulo) 