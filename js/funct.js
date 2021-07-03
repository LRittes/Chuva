// monstrar o menu no mobile

let showN = true;

const navbarLeft = document.querySelector(".navbar-left");
const menuToggle = navbarLeft.querySelector(".menu-toggle");

menuToggle.addEventListener('click', () => {
    navbarLeft.classList.toggle("on", showN);

    showN = !showN;
    console.log('DEU BOM')
})

// função para mostrar o conteudo completo do resumo

const seeM = document.querySelector('.see');
const boxHidden = document.querySelector('.comment-hidden');

function show(){
    seeM.style.cssText = "display: none;";
    boxHidden.style.cssText = "overflow: visible; height: max-content;";
};

seeM.addEventListener('click', show);

// função para retirar a msg de criar tópico mostrar o formulario e a msg de enviado  

const addM = document.querySelector('.add-matter')
const boxAddMatter = document.querySelector('.box-add-matter')
const formHidden = document.querySelector('.form-hidden')

function addMatter(){
    formHidden.style.cssText = "display: block;"
    boxAddMatter.style.cssText = "display: none;"
}

addM.addEventListener('click', addMatter)

const showMSG = document.querySelector('.box-submit')
const msgM = document.querySelector('.msg')

function addTopi() {
    msgM.style.cssText = 'display: flex;'
    boxAddMatter.style.cssText = 'display: none;'
    formHidden.style.cssText = 'display: none;'
}

showMSG.addEventListener('click', addTopi)

const backAdd = document.querySelector('#add-n-topic')

function createTopi() {
    formHidden.style.cssText = 'display: block;'
    msgM.style.cssText = 'display: none;'
}

// função para enviar um topico do form 

const sendM = document.querySelector('.showmsg')


showMSG.addEventListener('click', () => {
    const dshow = document.querySelector('.box-matter')

    let Matter = document.createElement('div')
    Matter.classList.add('matter')
    Matter.style.cssText = "position: relative;";
    
    dshow.insertAdjacentElement("afterbegin",Matter)

    wrapS = document.createElement('div')

    wrapS.style.cssText = 'text-align: center;position: absolute; top: 20%; left: 40%;'
    wrapS.classList.add('wrap-img-check-add')

    Matter.insertAdjacentElement('afterbegin', wrapS)

    let inseI = document.createElement('img')
    inseI.src = '../assets/img/discussion-content/check.png'
    inseI.classList.add('img-check-add')

    wrapS.insertAdjacentElement("beforeend", inseI)
    
    let tpm = document.createElement('p')
    tpm.style.cssText = "padding: 1.0rem 0; color: #725C5C; font-family: 'Quicksand', Verdana, Geneva, Tahoma, sans-serif; font-weight: 700;"
    tpm.innerHTML = 'Aguardando feedback dos autores'

    wrapS.insertAdjacentElement("beforeend", tpm)

    let linkE = document.createElement('a')
    linkE.href= '#'
    linkE.innerHTML = 'Editar tópico'
    linkE.classList.add('textd')
    linkE.classList.add('-td5')
    linkE.classList.add('-tds')
    linkE.style.cssText = 'cursor: pointer; font-size: 1.6rem; font-weight: 700;'

    wrapS.insertAdjacentElement('beforeend', linkE)
    
    let wrapM = document.createElement('div')
    wrapM.style.cssText = 'filter: blur(4px);'

    Matter.insertAdjacentElement('afterbegin', wrapM)

    let th4 = document.createElement('h4')
    th4.innerHTML = 'Assunto da pergunta aparece aqui';
    th4.classList.add('textd')
    th4.classList.add('-td4')
    
    wrapM.insertAdjacentElement("beforeend",th4)

    let th5 = document.createElement('h5')
    th5.innerHTML = 'Carlos Henrique Santos';
    th5.classList.add('textd')
    th5.classList.add('-td5')
    
    wrapM.insertAdjacentElement("beforeend",th5)
    
    let tp = document.createElement('p')
    tp.innerHTML = 'Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...';
    tp.classList.add('textd')
    tp.classList.add('-tp')
    
    wrapM.insertAdjacentElement("beforeend",tp)
})

// função para dar like nos comentarios no tópicos

const like = document.querySelector('#btn-like')
let hmLike = document.querySelector('#hm-like')
let likes = 4

like.addEventListener('click', () => {
    likes += 1;
    hmLike.innerHTML = `${likes} likes`;
})

const like2 = document.querySelector('#btn-like2')
let hmLike2 = document.querySelector('#hm-like2')
let likes2 = 4

like2.addEventListener('click', () => {
    likes2 += 1;
    hmLike2.innerHTML = `${likes2} likes`;
})

// função para mostrar os comentarios

const answer = document.querySelector('#btn-answer2');
const boxComen = document.querySelector('.box-answers');

function addA(){
    boxComen.style.cssText = 'display: block;'
};

answer.addEventListener('click', addA) 

