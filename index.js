const select = document.querySelector('select');
const allLang = ['ru','en'];

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage(){
    let lang = select.value;
    location.hash = lang;
    location.reload();
} 

function changeLanguage(){ 
    let hash = window.location.hash.substr(1);
    if(!allLang.includes(hash)){
        location.hash = 'ru';
        location.reload();
    }
    select.value = hash;
    for(let key in langArr){
        let elem = document.querySelector('.lng-' + key);
        if(elem){
            elem.innerHTML = langArr[key][hash];
        }
    }
}

window.addEventListener('load', changeLanguage);

let modal = document.getElementById("modal");
let btn = document.getElementById("openModal");
let span = document.getElementById("closeModal");
btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}