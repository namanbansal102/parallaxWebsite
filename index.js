let stars=document.querySelector('#stars')
let moon=document.querySelector('.moon')
let mountBack=document.querySelector('.mount-back')
let moonLight=document.querySelector('.moon-light-head')
console.log("Parallax Webiste Is Running");
window.addEventListener('scroll',()=>{
    let value=window.scrollY
    
    console.log(value);
    console.log(stars);
    stars.style.left=value+'px'
    moon.style.top=value*0.7+'px'
    mountBack.style.top=value*0.4+'px'
    moonLight.style.marginLeft=value*0.8+'px'
    moonLight.style.marginRight=value*4+'px'
})