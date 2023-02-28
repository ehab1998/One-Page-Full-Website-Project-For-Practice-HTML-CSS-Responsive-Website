
const hamburger = document.querySelector('.nav-bar .nav-list .hamburger');
const mobileMenu =document.querySelector('.nav-bar .nav-list ul');
const header =document.querySelector('.header.container');
const a =document.querySelectorAll('.header .nav-bar .nav-list ul li a');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    console.log('toggle happend')
})


document.addEventListener('scroll',(e)=>{
    var scroll_position = window.scrollY;
  
        if(scroll_position > 250 )
        {
            header.style.backgroundColor='#29323c';
        }
        else
        
            header.style.backgroundColor = 'transparent';
       
    
})



