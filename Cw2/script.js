let [...arrCard] = document.querySelectorAll('.card__transform');

if (navigator.platform == 'Win32') {
    arrCard.forEach(function (elem) {
        elem.style.background = 'lightblue'
    })
} else if (navigator.platform == 'Linux i686' || navigator.platform == 'Linux armv7l') {
    arrCard.forEach(function (elem) {
        elem.style.background = 'lightgreen'
    })
} else if (navigator.platform == 'MacIntel' || navigator.platform == 'MacPPC' || navigator.platform == 'Mac68K') {
    arrCard.forEach(function (elem) {
        elem.style.background = 'rgba(255, 0, 0, 0.5)'
    })
}
const modal = document.querySelector('.modal')
const btn = document.querySelector('.btn').onclick = () => f1();
function f1 (){
    modal.style.display = 'none';
}




function batteryLvl() {
    navigator.getBattery().then(function(data){
     let btlvl = data.level
     console.log(btlvl)
     if (btlvl < 95){
         modal.style.display = 'block';
     }
    })
}
batteryLvl ()
