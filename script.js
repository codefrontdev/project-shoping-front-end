let menu = document.querySelector('.menu');
let btn = document.querySelector('.btn-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
        btn.innerHTML = '<i class="fa fa-close"></i>';
        // document.querySelector('.navbar').style.background = 'blue';
    } else {
        btn.innerHTML = '<i class="fa fa-bars"></i>';
        // document.querySelector('.navbar').style.background = 'transparent';
    }
});

// Scroll 


addEventListener('scroll', () =>{
    if (pageYOffset > 60) {
        document.querySelector('.navbar').style.background = 'blue';
    } else {
        document.querySelector('.navbar').style.background = 'transparent';
    }
})