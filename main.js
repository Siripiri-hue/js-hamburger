// assegno alla variabile l'icona hamburger
const hambMenu = document.querySelector(".fa-bars");
console.log(hambMenu); //verifico sia stata presa correttamente

//event listener click sull'icona hamburger
hambMenu.addEventListener("click", function() 
{
    // alert(`it's working`);
    document.querySelector(".hamburger-menu").style.display = "block"; //apro il menu
});

//event listener click sull'icona x
const close = document.querySelector(".close");
close.addEventListener("click", function() 
{
    // console.log("hai premuto sulla x");
    document.querySelector(".hamburger-menu").style.display = "none"; //chiudo il menu
});