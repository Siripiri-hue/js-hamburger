const hambMenu = document.querySelector(".fa-bars");
console.log(hambMenu);

hambMenu.addEventListener("click", function() 
{
    // alert(`it's working`);
    document.querySelector(".hamburger-menu").style.display = "block";
});

const close = document.querySelector(".close");
close.addEventListener("click", function() 
{
    console.log("hai premuto sulla x");
});