
var con = document.querySelector('#container')
var icon = document.querySelector('i')

con.addEventListener("click", function() {
    icon.style.transform ='translate(-50%,-50%) scale(1)'
    setTimeout(function() {
        icon.style.transform ='translate(-50%,-50%) scale(0)'
    }, 3000);
});