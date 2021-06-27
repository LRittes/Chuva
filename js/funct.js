const seeM = document.querySelector('.-see');
const boxHidden = document.querySelector('.comment-hidden');

function show(){
    seeM.style.cssText = "display: none;";
    boxHidden.style.cssText = "overflow: visible; height: max-content;";
};

seeM.addEventListener('click', show);

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