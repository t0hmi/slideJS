const header = document.querySelector('header');
const logo = document.querySelector('header h1');
const signIn = document.querySelector('.sign-in');
const signUp = document.querySelector('.sign-up');
const exploreBtn = document.querySelector('.explore a');
const dots = document.querySelectorAll('.dot');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const burger = document.querySelector('.burger');
const lines = document.querySelectorAll('.line');
const nav = document.querySelector('.nav-bar');
const signInPhone = document.querySelector('.sign-in-phone');
const signUpPhone = document.querySelector('.sign-up-phone');
let index = 0;

burger.addEventListener('click',function(){
    nav.classList.toggle('active');
});

left.addEventListener('click',function(){
    dots[index].classList.remove('active');
    if(index == 0){
        index = 3;
    }else{
        index --;
    }
    slider.style.transform = `translateX(calc(-100vw * ${index}))`;
    dots[index].classList.add('active');
    console.log(slider.children[index].attributes[1].value);
    updateSlide()
});

right.addEventListener('click',function(){
    dots[index].classList.remove('active');
    if(index==3){
        index = 0;
    }else{
        index++;
    }
    dots[index].classList.add('active');
    slider.style.transform = `translateX(calc(-100vw * ${index}))`;
    updateSlide()
});

function updateSlide(){
    let activeSlide = slider.children[index];
     header.style.background = `#${activeSlide.attributes[1].value}`;
     logo.style.color = `#${activeSlide.attributes[2].value}`;
     signIn.style.color = `#${activeSlide.attributes[2].value}`;
     signIn.style.background = `#${activeSlide.attributes[1].value}`;
     signIn.style.borderColor = `#${activeSlide.attributes[2].value}`;
     signUp.style.background = `#${activeSlide.attributes[2].value}`;
     signUp.style.color = `#${activeSlide.attributes[1].value}`;   
     lines.forEach(line=>{
        line.style.background = `#${activeSlide.attributes[2].value}`;
     });
     nav.style.background = `#${activeSlide.attributes[1].value}`;
     signInPhone.style.color = `#${activeSlide.attributes[2].value}`;
     signInPhone.style.background = `#${activeSlide.attributes[1].value}`;
     signInPhone.style.borderColor = `#${activeSlide.attributes[2].value}`;
     signUpPhone.style.background = `#${activeSlide.attributes[2].value}`;
     signUpPhone.style.color = `#${activeSlide.attributes[1].value}`;   
}