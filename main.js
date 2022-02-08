const hambMenu = document.querySelector(".fa-bars");
console.log(hambMenu);

hambMenu.addEventListener("click", function() 
{
    // alert(`it's working`);
    document.querySelector(".hamburger-menu").style.display = "block";
});

