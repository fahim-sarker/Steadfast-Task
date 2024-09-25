const menu = document.querySelector(".menu_bar");
const nav = document.getElementById("nav_menu");

menu.addEventListener("click", () => {
    let ami = nav_menu.classList.toggle("active");
    if(ami){
        menu.innerHTML ="&#215;" 
    }else{
        menu.innerHTML ='&#9776' 
    }
});
