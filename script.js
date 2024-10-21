const menu = document.querySelector(".menu_bar");
const nav = document.getElementById("nav_menu");
const clients = document.querySelectorAll('.client');
const list = document.querySelector('.client-list');

menu.addEventListener("click", () => {
    let ami = nav_menu.classList.toggle("active");
    if(ami){
        menu.innerHTML ="&#215;" 
    }else{
        menu.innerHTML ='&#9776' 
    }
});
list.addEventListener('scroll', () => {
    const clientHeight = clients[0].offsetHeight; 
    const scrollTop = list.scrollTop; 
    const totalClients = clients.length;

    const index = Math.floor(scrollTop / clientHeight);
    clients.forEach((client) => {
        client.classList.remove('active');
        client.style.opacity = '0.5';
        client.style.color = 'gray';
        client.style.transform = 'rotateY(0deg)';
    });

    if (index < totalClients) {
        clients[index].classList.add('active');
        clients[index].style.opacity = '1';
        clients[index].style.color = '#000';
        clients[index].style.transform = 'rotateY(360deg)';
    }
});

