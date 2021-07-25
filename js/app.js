SliderAuto = setInterval(() => {
    SliderNext();
    }, 7000); 
function iniciarContador() {
    SliderAuto = setInterval(() => {
    SliderNext();
    }, 7000); 
}
function detenerContador() {
    clearInterval(SliderAuto);
}

const NumberSliders = 8;
let CurrentDot= 1;


const Slider = document.querySelector('.slider');
const ContainerSlider = document.querySelector('.container-slider');
const ItemsSlider = document.querySelectorAll('.item-slider');
const LastItemSlider = ItemsSlider[ItemsSlider.length - 1];
const SliderRight = document.querySelector('#sliderRight');
const Sliderleft = document.querySelector('#sliderLeft');



Slider.insertAdjacentElement('afterbegin', LastItemSlider);

function SliderNext(){
    let FirstItemSlider = document.querySelector('.item-slider');
    Slider.style.marginLeft = '-200%';
    Slider.style.transition = 'all 2s';
    CurrentDot+= 1;    
    
    //disable Next and Prev while switching photos
    SliderRight.style.pointerEvents = 'none';
    Sliderleft.style.pointerEvents = 'none';
    const disableEveryDot = document.querySelectorAll('.dot');
    disableEveryDot.forEach(dotdisable => {
        dotdisable.style.pointerEvents = 'none';
    });

    setTimeout(() => {
        Slider.style.transition = 'none';
        Slider.insertAdjacentElement('beforeend', FirstItemSlider);
        Slider.style.marginLeft = '-100%'
        //enable Next and Prev
        SliderRight.style.pointerEvents = 'auto';
        Sliderleft.style.pointerEvents = 'auto';
        disableEveryDot.forEach(dotdisable => {
            dotdisable.style.pointerEvents = 'auto';
        });
    }, 2000);
    if (CurrentDot == NumberSliders + 1){
        CurrentDot = 1; 
    }

    //restart the automatic slider
    detenerContador();
    DotActive(CurrentDot);
    iniciarContador();    
}

function SliderPrev(){
    let SliderNew = document.querySelectorAll('.item-slider');
    let NewLastItem = SliderNew[SliderNew.length - 1];
    Slider.style.marginLeft = '0';
    Slider.style.transition = 'all 2s';
    CurrentDot-=1;
   

    //disable Next and Prev while switching photos
    SliderRight.style.pointerEvents = 'none';
    Sliderleft.style.pointerEvents = 'none';
    const disableEveryDot = document.querySelectorAll('.dot');
    disableEveryDot.forEach(dotdisable => {
        dotdisable.style.pointerEvents = 'none';
    });
   
    setTimeout(() => {
        Slider.style.transition = 'none';
        Slider.insertAdjacentElement('afterbegin', NewLastItem);
        Slider.style.marginLeft = '-100%';
        //enable Next and Prev
        SliderRight.style.pointerEvents = 'auto'; 
        Sliderleft.style.pointerEvents = 'auto'; 
        disableEveryDot.forEach(dotdisable => {
            dotdisable.style.pointerEvents = 'auto';
        });
    }, 2000);
    if (CurrentDot == 0){
        CurrentDot = NumberSliders;
    }

    //restart the automatic slider
    detenerContador();
    DotActive(CurrentDot);
    iniciarContador();
    
  
}


//highlight the active dot
function DotActive(dotactive){
    const alldots = document.querySelectorAll('.dot');
    alldots.forEach(element => {
        if(element.getAttribute('data-dot') == dotactive){
            element.classList.add('active');
        } else if(element.classList.contains('active')){
            element.classList.remove('active');
        }
    });
}

SliderRight.addEventListener('click',SliderNext);
Sliderleft.addEventListener('click',SliderPrev);


//create the displacement dots
const Dots = document.querySelector('.dots');
const NumberDots = ItemsSlider.length;

for (let i = 1; i <= NumberDots; i++) {    
    let DotDiv = document.createElement('DIV');
    DotDiv.setAttribute('data-dot',`${i}`)
    DotDiv.classList.add('dot');
    if(i==1){
        DotDiv.classList.add('active');
    }
    Dots.appendChild(DotDiv);
}

const EveryDot = document.querySelectorAll('.dot');

EveryDot.forEach( (dot) => {
    dot.addEventListener('click', (e)=>{
        const targetDot = e.target;
        const targetDotAttribute = targetDot.getAttribute('data-dot');
        EveryDot.forEach(dotdisable => {
            dotdisable.style.pointerEvents = 'none';
        });
        if(CurrentDot < targetDotAttribute){
            let imageJump = targetDotAttribute - CurrentDot -1; 
           for (let index = 0; index < imageJump; index++) {
            let FirstItemSlider = document.querySelector('.item-slider');
            Slider.style.marginLeft = '-200%';
            Slider.style.transition = 'all 2s';
            CurrentDot+= 1;    
            
            //disable Next and Prev while switching photos
            SliderRight.style.pointerEvents = 'none';
            Sliderleft.style.pointerEvents = 'none';
            
                Slider.style.transition = 'none';
                Slider.insertAdjacentElement('beforeend', FirstItemSlider);
                Slider.style.marginLeft = '-100%'
                //enable Next and Prev
                SliderRight.style.pointerEvents = 'auto';
                Sliderleft.style.pointerEvents = 'auto';
            
            if (CurrentDot == NumberSliders + 1){
                CurrentDot = 1; 
            }
        
            //restart the automatic slider
            detenerContador();
            DotActive(CurrentDot);
            iniciarContador();
               
           }
           SliderNext();    
           
        }
        if(CurrentDot > targetDotAttribute){

            let imageJump = CurrentDot - targetDotAttribute -1;
            for (let index = 0; index < imageJump; index++) {
                
                let SliderNew = document.querySelectorAll('.item-slider');
                let NewLastItem = SliderNew[SliderNew.length - 1];
                Slider.style.marginLeft = '0';
                Slider.style.transition = 'all 2s';
                CurrentDot-=1;
               
            
                //disable Next and Prev while switching photos
                SliderRight.style.pointerEvents = 'none';
                Sliderleft.style.pointerEvents = 'none';
                    Slider.style.transition = 'none';
                    Slider.insertAdjacentElement('afterbegin', NewLastItem);
                    Slider.style.marginLeft = '-100%';
                    //enable Next and Prev
                    SliderRight.style.pointerEvents = 'auto'; 
                    Sliderleft.style.pointerEvents = 'auto'; 
                
                if (CurrentDot == 0){
                    CurrentDot = NumberSliders;
                }
            
                //restart the automatic slider
                detenerContador();
                DotActive(CurrentDot);
                iniciarContador();
                
            }
            SliderPrev();
        }
    });
});

