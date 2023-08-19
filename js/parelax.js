// page1
let sec1 = document.querySelector('.sec1')
let header = document.querySelector('header')

if(window.innerWidth < 1024){
    console.log(window.innerWidth);
    
    sec1.removeEventListener('mousemove', paralex)
    header.classList.add('index')
    
}else{
    sec1.addEventListener('mousemove', paralex)
}
window.addEventListener('resize', ()=>{
    if(window.innerWidth < 1024){
        
        sec1.removeEventListener('mousemove', paralex)
        header.classList.add('index')
        
    }else{
        sec1.addEventListener('mousemove', paralex)
    }
})
function paralex(event) {
document.querySelectorAll('.paralax').forEach(item => {
    let speed = item.getAttribute('data-speed')
    document.querySelector('.p2').style.transform = `translateY(${event.clientY * 40/1000}px)`
     item.style.transform = `translateX(${event.clientX * speed/1000}px)`
});


}
sec1.addEventListener('mousemove', paralex)


new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1024:{
            slidesPerView: 3,
            spaceBetween: 40
        }
      }
  });

