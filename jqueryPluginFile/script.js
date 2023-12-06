
  // this variable use for portfolio nav link
  const portfolioNav = document.querySelectorAll('.nav_plink')
  const active = document.querySelector('.nav_active')

  portfolioNav.forEach(e=>{
    e.addEventListener('click',()=>{
      document.querySelector('.nav_active')?.classList.remove('nav_active')
      e.classList.add('nav_active')
    })
  }) 

  //this variable for team section icons
  // const teamButton = document.querySelectorAll('.master-class')

  let hideClasseO = document.querySelector('.as-master-class-hide-one')
  let hideClasseT = document.querySelector('.as-master-class-hide-two')
  let hideClasseTh = document.querySelector('.as-master-class-hide-three')
  let hideClasseFo = document.querySelector('.as-master-class-hide-four')
  let hideClasseFi = document.querySelector('.as-master-class-hide-five')
  let hideClasseSi = document.querySelector('.as-master-class-hide-six')
  let hideClasseSev = document.querySelector('.as-master-class-hide-seven')
  let hideClasseEi = document.querySelector('.as-master-class-hide-eight')
  let masterClassOne = document.querySelector('.master-class-one')
  let masterClassTwo = document.querySelector('.master-class-two')
  let masterClassThree = document.querySelector('.master-class-three')
  let masterClassFour = document.querySelector('.master-class-four')
  let masterClassFive = document.querySelector('.master-class-five')
  let masterClassSix = document.querySelector('.master-class-six')
  let masterClassSev = document.querySelector('.master-class-seven')
  let masterClassEig = document.querySelector('.master-class-eight')
  let display = 1

  let clickOne = () =>{
    if(display===1){
      hideClasseO.classList.add('master-class-child')
      masterClassOne.classList.add('click-master-class')
      display = 0;
    }else{
      hideClasseO.classList.remove('master-class-child')
      masterClassOne.classList.remove('click-master-class')
      display=1
    }
  }

  let clickTwo = () =>{
    if(display===1){
      hideClasseT.classList.add('master-class-child')
      masterClassTwo.classList.add('click-master-class')
      display = 0;
    }else{
      hideClasseT.classList.remove('master-class-child')
      masterClassTwo.classList.remove('click-master-class')
      display=1
    }
  }

  let clickThree = () =>{
    if(display===1){
      hideClasseTh.classList.add('master-class-child')
      masterClassThree.classList.add('click-master-class')
      display = 0;
    }else{
      hideClasseTh.classList.remove('master-class-child')
      masterClassThree.classList.remove('click-master-class')
      display=1
    }
  }

  let clickFour = () =>{
    if(display===1){
      hideClasseFo.classList.add('master-class-child')
      masterClassFour.classList.add('click-master-class')
      display = 0;
    }else{
      hideClasseFo.classList.remove('master-class-child')
      masterClassFour.classList.remove('click-master-class')
      display=1
    }
  }

  let clickFive = () =>{
    if(display===1){
      hideClasseFi.classList.add('master-class-child')
      masterClassFive.classList.add('click-master-class')
      display = 0;
    }else{
      hideClasseFi.classList.remove('master-class-child')
      masterClassFive.classList.remove('click-master-class')
      display=1
    }
  }

  let clickSix = () =>{
    if(display===1){
      hideClasseSi.classList.add('master-class-child')
      masterClassSix.classList.add('click-master-class')
      display = 0;
    }else{
      hideClasseSi.classList.remove('master-class-child')
      masterClassSix.classList.remove('click-master-class')
      display=1
    }
  }

  let clickSeven = () =>{
    if(display===1){
      hideClasseSev.classList.add('master-class-child')
      masterClassSev.classList.add('click-master-class')
      display = 0;
    }else{
      hideClasseSev.classList.remove('master-class-child')
      masterClassSev.classList.remove('click-master-class')
      display=1
    }
  }

  let clickEight = () =>{
    if(display===1){
      hideClasseEi.classList.add('master-class-child')
      masterClassEig.classList.add('click-master-class')
      display = 0;
    }else{
      hideClasseEi.classList.remove('master-class-child')
      masterClassEig.classList.remove('click-master-class')
      display=1
    }
  }

 



//aita akta falto code ... foreach diya onek try korsi. but milaite pari nai

//Note:::: jodio onek choto akta kaj but saradin dore kaj kore milaite pari nai. obosese 11:17pm e akta asa dekte parci..




  

// this variable for lottie files 
var animation = bodymovin.loadAnimation({
    container: document.getElementById('animContainer'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://lottie.host/ce2ba211-900d-4bae-ba28-313565c03983/aD8QavMfhy.json' // lottie file path
  })


//owl carousel 
$(document).ready(function(){
  
})

$('.owl-carousel').owlCarousel({
  margin:10,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  loop:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      767:{
          items:2,
          nav:false
      },
      1000:{
          items:3,
          nav:false,
          loop:true
      },
      1200:{
        items:4,
        loop:false
      },
      1500:{
        items:5,
        loop:false
      }
  }
})

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})