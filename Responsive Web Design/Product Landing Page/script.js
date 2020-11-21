window.onload = function(){
    document.querySelector(".menu_mobile").addEventListener("click", function(){
        if(document.querySelector("#nav-bar ul").style.display == 'flex') {
            document.querySelector("#nav-bar ul").style.display = 'none';
        } else {
            document.querySelector("#nav-bar ul").style.display = 'flex'
        }
    })
};