let seeM = document.querySelector('.-see');
let boxHidden = document.querySelector('.comment-hidden');

function show(){
    seeM.style.cssText = "display: none;";
    boxHidden.style.cssText = "overflow: visible; height: max-content;";
};

seeM.addEventListener('click', show);