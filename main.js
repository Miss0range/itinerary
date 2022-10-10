
const nav = document.getElementById("nav");
const content = document.getElementById("content");
let offSetTop = window.innerHeight;

const events_item = document.querySelectorAll('.event-container');
const navLi = document.querySelectorAll('.event');
let curIndex = -1;

const dropBtn = document.getElementById('dropdown-btn');

//don't add sticky and highlight menu item on tablet and mobile screen. 
let mmedia = window.matchMedia("(max-width:769px)");

document.addEventListener("DOMContentLoaded", () => {
    const loader= document.getElementById('loader-container');
    const main = document.getElementById('main');
    setTimeout(()=>{
        loader.style.display = "none";
        main.style.display = "block";
    },2500);


    if(mmedia.matches){

    }else{
        //When page load on middle of page (refresh)
        hightlightNav();
        addSticky();
    }
});

dropBtn.addEventListener("click", ()=> {
    dropBtn.classList.toggle('dropdown-btn-active');
    const wrap = document.getElementById('nav-wrap');
    const rollnav = document.getElementById('roll-nav1');
    if(wrap.clientHeight){
        wrap.style.height = 0;
        rollnav.style.display = "block";
    }else{
        const toggleNav = document.getElementById('nav-container');
        wrap.style.height = toggleNav.clientHeight + "px";
        rollnav.style.display = "none";
    }
})

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