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
const Slider = document.querySelector('.slider');
const ContainerSlider = document.querySelector('.container-slider');
const ItemsSlider = document.querySelectorAll('.item-slider');
const LastItemSlider = ItemsSlider[ItemsSlider.length - 1];
const SliderRight = document.querySelector('#sliderRight');
const Sliderleft = document.querySelector('#sliderLeft');

const HeightSlider= '80rem';
const NumberSliders = 4
let CurrentDot= 1;

Slider.style.width= `${100 * NumberSliders}%`;
Slider.style.height = `${HeightSlider}`;

Slider.insertAdjacentElement('afterbegin', LastItemSlider);

function SliderNext(){
    let FirstItemSlider = document.querySelector('.item-slider');
    Slider.style.marginLeft = '-200%';
    Slider.style.transition = 'all 2s';
    
    
    CurrentDot+= 1;
    
    console.log(CurrentDot);
    setTimeout(() => {
        Slider.style.transition = 'none';
        Slider.insertAdjacentElement('beforeend', FirstItemSlider);
        Slider.style.marginLeft = '-100%'
    }, 2000);
    if (CurrentDot == NumberSliders){
        CurrentDot = 0;
        console.log(CurrentDot);        
    }
}

function SliderPrev(){
    let SliderNew = document.querySelectorAll('.item-slider');
    let NewLastItem = SliderNew[SliderNew.length - 1];
    Slider.style.marginLeft = '0';
    Slider.style.transition = 'all 2s';
    CurrentDot-=1;
    
    setTimeout(() => {
        Slider.style.transition = 'none';
        Slider.insertAdjacentElement('afterbegin', NewLastItem);
        Slider.style.marginLeft = '-100%';
    }, 2000);
    if (CurrentDot == -1){
        CurrentDot = 3;
    }    
    detenerContador();
    iniciarContador();

}
console.log(CurrentDot);
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
SliderRight.addEventListener('click',SliderNext);
Sliderleft.addEventListener('click',SliderPrev);




const Dots = document.querySelector('.dots');
const NumberDots = ItemsSlider.length;

for (let i = 0; i < NumberDots; i++) {    
    let DotDiv = document.createElement('DIV');
    DotDiv.setAttribute('data-dot',`${i}`)
    DotDiv.classList.add('dot');
    Dots.appendChild(DotDiv);
}
if (CurrentDot == 6){
    CurrentDot = 0
}else if(CurrentDot ==- 1){
    CurrentDot = 3
}

