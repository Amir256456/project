const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};


let toggleBtn = document.querySelector('.toggleBtn');
let nav = document.querySelector('.nav');
let links = document.querySelectorAll('.link');

links.forEach(element => {
    element.addEventListener('click', () =>{
        toggleBtn.classList.remove('fa-xmark');
        toggleBtn.classList.add('fa-bars');
        nav.classList.toggle('active');
    })
})
toggleBtn.addEventListener('click', () =>{
    if(toggleBtn.classList.contains('fa-bars')){
        toggleBtn.classList.remove('fa-bars');
        toggleBtn.classList.add('fa-xmark');
    }else{
        toggleBtn.classList.remove('fa-xmark');
        toggleBtn.classList.add('fa-bars');
    }

    nav.classList.toggle('active');
})