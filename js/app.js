const Slider = document.querySelector('.slider');
const ContainerSlider = document.querySelector('.container-slider');
const ItemsSlider = document.querySelectorAll('.item-slider');
const LastItemSlider = ItemsSlider[ItemsSlider.length - 1];
const SliderRight = document.querySelector('#sliderRight');
const Sliderleft = document.querySelector('#sliderLeft');


const HeightSlider= '80rem';
const NumberSliders = 4

Slider.style.width= `${100 * NumberSliders}%`;
ContainerSlider.style.height = `${HeightSlider}`;

Slider.insertAdjacentElement('afterbegin', LastItemSlider);

function SliderNext(){
    let FirstItemSlider = document.querySelector('.item-slider');
    Slider.style.marginLeft = '-200%';
    Slider.style.transition = 'all 2s';
    setTimeout(() => {
        Slider.style.transition = 'none';
        Slider.insertAdjacentElement('beforeend', FirstItemSlider);
        Slider.style.marginLeft = '-100%'
    }, 2000);
}
function SliderPrev(){
    let SliderNew = document.querySelectorAll('.slider-seccion');
    let NewLastItem = SliderNew[SliderNew.length - 1];

    Slider.style.marginLeft = '0';
    Slider.style.transition = 'all 2s';
    setTimeout(() => {
        Slider.style.transition = 'none';
        Slider.insertAdjacentElement('afterbegin', NewLastItem);
        Slider.style.marginLeft = '-100%';
    }, 2000);
}

SliderRight.addEventListener('click',SliderNext);
Sliderleft.addEventListener('click',SliderPrev);
setInterval(() => {
    SliderNext();
}, 7000);
