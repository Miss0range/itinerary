
const nav = document.getElementById("nav");
const content = document.getElementById("content");
let offSetTop = window.innerHeight;

const events_item = document.querySelectorAll('.event-container');
const navLi = document.querySelectorAll('.event');
let curIndex = -1;

let mmedia = window.matchMedia("(max-width:1024px)");

document.addEventListener("DOMContentLoaded", () => {
    if(mmedia.matches){

    }else{
        //When page load on middle of page (refresh)
        hightlightNav();
        addSticky();
    }
    
});

window.onscroll = function(){
    if(mmedia.matches){

    }else{
        hightlightNav();
        addSticky();
    }
};

window.onresize = function(){
    if(mmedia.matches){

    }else{
        offSetTop = window.innerHeight;
        addSticky();   
    }
}

function addSticky(){
    if(window.pageYOffset > offSetTop){
        nav.classList.add("sticky");
        content.classList.add("content-sticky");

    }else{
        nav.classList.remove("sticky");
        content.classList.remove("content-sticky");
    }
}

function hightlightNav(){
    let current = -1;
    events_item.forEach((item,index)=>{
        const itemToTop = item.getBoundingClientRect().top - offSetTop/3;
        if(itemToTop <= 0){
            current = index;
        }
    })
    //if index changed
    if(current !== curIndex){
        if(current !== -1){
            navLi[current].classList.add("highlight-li");
            if(curIndex !== -1){
                navLi[curIndex].classList.remove("highlight-li");
            }
            curIndex = current;
        }else{
            navLi[curIndex].classList.remove("highlight-li");
            curIndex = current;
        }
    }
}

document.cookie = "AC-C=ac-c; SameSite=None; Set-Cookie: cross-site-cookie=whatever; Secure";