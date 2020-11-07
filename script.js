const nav = document.querySelector('#navbar');

window.addEventListener('scroll', winScroll);


function winScroll(){
if(window.pageYOffset > 1){
    nav.classList.add('color');
    document.querySelector('.anim').style.cssText = 'transform: translateX(0vh); opacity: 1;';
   

} else if(window.pageYOffset < 10 ){
    nav.classList.remove('color');
    }

    console.log(window.pageYOffset);

    if(window.pageYOffset> 100){
        document.querySelector('#img').style.cssText = 'transform: translateY(0vh); opacity: 1;'    }
       
  if(window.pageYOffset> 610){
    document.querySelector('.anim2').style.cssText = 'transform: translateX(0vh); opacity:1;';   }

    if(window.pageYOffset> 660){
        document.querySelector('.info').style.cssText = 'transform: none';   }
    

        if(window.pageYOffset>1150){
            document.querySelector('.img1').style.cssText = 'transform: translateY(0vh)';
            document.querySelector('.img2').style.cssText = 'transform: translateY(0vh)';
            document.querySelector('.img3').style.cssText = 'transform: translateY(0vh)';
        }
        if(window.pageYOffset>1350){
            document.querySelector('.contactus').style.cssText = 'transform: translateX(0vh); opacity: 1;';
        }
        if(window.pageYOffset>1450){
            document.querySelector('.name').style.cssText = 'top: 0;';
            document.querySelector('.mail').style.cssText = 'top: 0;';
            document.querySelector('#text').style.cssText = 'top: 0;';
            document.querySelector('.submit').style.cssText = 'top: 0;';
        }


        console.log(pageYOffset)

};

