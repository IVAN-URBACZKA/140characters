const texte = document.querySelector('textarea');
const button = document.querySelector('button');


texte.addEventListener('keyup',function(){

  button.disabled = texte.value.length > 140 ? true : false;


})


