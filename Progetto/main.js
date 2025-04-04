let navbar = document.querySelector('#navbar');
let links = document.querySelectorAll('.nav-link');
let containerfluid = document.querySelector('#containerfluid');






window.addEventListener('scroll', ()=>{
     if (window.scrollY > 0) {
        navbar.style.height = '150px';
        navbar.classList.remove('bg-y');
        navbar.classList.add('bg-b');
        containerfluid.classList.remove('bg-y');
        containerfluid.classList.add('bg-b');
     } else {
        navbar.style.height = '86px';
        navbar.classList.remove('bg-b');
        navbar.classList.add('bg-y');
        containerfluid.classList.remove('bg-b');
        containerfluid.classList.add('bg-y');
     }
})