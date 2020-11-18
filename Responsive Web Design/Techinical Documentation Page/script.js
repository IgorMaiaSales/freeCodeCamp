window.onload = function(){
    document.querySelector(".hamburger").addEventListener("click", function(){
        if(document.querySelector("#navbar ul").style.display == 'block') {
            document.querySelector("#navbar ul").style.display = 'none';
        } else {
            document.querySelector("#navbar ul").style.display = 'block'
        }
    })
};