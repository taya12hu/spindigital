console.log("tanya");

window.addEventListener('scroll',function(){
    var header=document.getElementById("header");
    var headright=document.getElementById("header_right");
    var spin=document.getElementById("spin");
    if(document.documentElement.scrollTop>100|| document.body.scrollTop>100){
       
        header.style.backgroundColor='white';
        header.style.color='black';
        headright.style.marginTop='1vh';
        spin.style.marginTop='2vh';
        
    }

    else{
        header.style.backgroundColor='black';
        header.style.color='white';
        headright.style.marginTop='4vh';
        spin.style.marginTop='5vh';
        spin.style.color='black';
    }
})

window.addEventListener('scroll',()=>{

    document.getElementById("intro").style.top=Math.max(950-0.3*window.scrollY,0)+"px";
    document.getElementById("intro").style.transition="all 0.1s ease";
    document.getElementById("intro2").style.top=Math.max(1800-0.3*window.scrollY,0)+"px";
    document.getElementById("intro2").style.transition="all 0.1s ease";
    document.getElementById("intro3").style.transition="all 0.1s ease"
    document.getElementById("intro3").style.top=Math.max(1950-0.3*window.scrollY,0)+"px";
});



window.addEventListener('scroll',fade_in=()=>{
    var main=document.querySelector("#award_heading")
    var windowheight=window.innerHeight;
    var revealtop=main.getBoundingClientRect().top;
    var revealpoint=50;

    if(revealtop < windowheight - revealpoint){
        main.classList.add('fade_in')
    }
})


window.addEventListener('scroll',fade_in2=()=>{
    var main=document.querySelector(".awardimg");
    var windowheight=window.innerHeight;
    var revealtop=main.getBoundingClientRect().top;
    var revealpoint=10;

    if(revealtop < windowheight - revealpoint){
        main.classList.add('fade_in2')
    }
})


window.addEventListener('scroll',fade_in=()=>{
    var main=document.querySelector(".helping_brand_right");
    var windowheight=window.innerHeight;
    var revealtop=main.getBoundingClientRect().top;
    var revealpoint=50;

    if(revealtop < windowheight - revealpoint){
        main.classList.add('fade_in')
    }
})


window.addEventListener('scroll',fade_in=()=>{
    var main=document.querySelector(".trust_rightsection");
    var windowheight=window.innerHeight;
    var revealtop=main.getBoundingClientRect().top;
    var revealpoint=50;

    if(revealtop < windowheight - revealpoint){
        main.classList.add('fade_in')
    }
})

window.addEventListener('scroll',fade_in=()=>{
    var main=document.querySelector("#learn_section1");
    var windowheight=window.innerHeight;
    var revealtop=main.getBoundingClientRect().top;
    var revealpoint=50;

    if(revealtop < windowheight - revealpoint){
        main.classList.add('fade_in')
    }
})

window.addEventListener('scroll',fade_in=()=>{
    var main=document.querySelector("#learn_section2");
    var windowheight=window.innerHeight;
    var revealtop=main.getBoundingClientRect().top;
    var revealpoint=50;

    if(revealtop < windowheight - revealpoint){
        main.classList.add('fade_in')
    }
})

window.addEventListener('scroll',fade_in=()=>{
    var main=document.querySelector("#learn_section3");
    var windowheight=window.innerHeight;
    var revealtop=main.getBoundingClientRect().top;
    var revealpoint=50;

    if(revealtop < windowheight - revealpoint){
        main.classList.add('fade_in')
    }
})


function show_hide_function(){
    var x = document.querySelector(".digmarketing_info");
     var color=document.getElementById("digmarketing");
    if (x.style.display === "grid") {
        x.style.display = "none";
        color.style.backgroundColor="black";
        color.style.color="white";
    }
    else {
        x.style.display = "grid";
        color.style.backgroundColor="white";
        color.style.color="black";
    }
}



function show_hide_function2(){
    var x = document.querySelector(".cms_info");
     var color=document.getElementById("cms");
    if (x.style.display === "grid") {
        x.style.display = "none";
        color.style.backgroundColor="black";
        color.style.color="white";
    }
    else {
        x.style.display = "grid";
        color.style.backgroundColor="white";
        color.style.color="black";
        color.style.height="auto";
    }
}


function show_hide_function3(){
    var x = document.querySelector(".app_info");
     var color=document.getElementById("app");
    if (x.style.display === "grid") {
        x.style.display = "none";
        color.style.backgroundColor="black";
        color.style.color="white";
    }
    else {
        x.style.display = "grid";
        color.style.backgroundColor="white";
        color.style.color="black";
        color.style.height="auto";
    }
}

function show_hide_function4(){
    var x = document.querySelector(".website_info");
     var color=document.getElementById("website");
    if (x.style.display === "grid") {
        x.style.display = "none";
        color.style.backgroundColor="black";
        color.style.color="white";
    }
    else {
        x.style.display = "grid";
        color.style.backgroundColor="white";
        color.style.color="black";
    }
}

function show_hide_function5(){
    var x = document.querySelector(".strategy_info");
     var color=document.getElementById("strategy");
    if (x.style.display === "grid") {
        x.style.display = "none";
        color.style.backgroundColor="black";
        color.style.color="white";
    }
    else {
        x.style.display = "grid";
        color.style.backgroundColor="white";
        color.style.color="black";
    }
}

function show_hide_function6(){
    var x = document.querySelector(".discovery_info");
     var color=document.getElementById("discovery");
    if (x.style.display === "grid") {
        x.style.display = "none";
        color.style.backgroundColor="black";
        color.style.color="white";
    }
    else {
        x.style.display = "grid";
        color.style.backgroundColor="white";
        color.style.color="black";
    }
}

function open_connect(){
    var y=document.querySelector(".connect_info");
    var create_info=document.querySelector(".create_info");
    var evolve_info=document.querySelector(".evolve_info")
    var connect=document.getElementById("connect");
    if(y.style.display==="block"){
        y.style.display="none";
        connect.style.backgroundColor="white";
        connect.color.color="black"
        y.style.paddingBottom="40vh";
        y.style.paddingLeft="10vw";
        y.style.paddingRight="5vw";
        y.style.paddingTop="5vh";
        create_info.style.display="none";
        evolve_info.style.display="none";
    }
    
  
}

function open_create(){
    var y=document.querySelector(".create_info");
    var connect_info=document.querySelector(".connect_info");
    var evolve_info=document.querySelector(".evolve_info")
    if(y.style.display==="none"){
        y.style.display="block";
        y.style.paddingBottom="40vh";
        y.style.paddingLeft="10vw";
        y.style.paddingRight="5vw";
        y.style.paddingTop="5vh";
        connect_info.style.display="none";
        evolve_info.style.display="none";
    }
   
}

function open_evolve(){
    var y=document.querySelector(".evolve_info");
    var connect_info=document.querySelector(".connect_info");
    var create_info=document.querySelector(".evolve_info")
    if(y.style.display==="none"){
        y.style.display="block";
        y.style.paddingBottom="40vh";
        y.style.paddingLeft="10vw";
        y.style.paddingRight="5vw";
        y.style.paddingTop="5vh";
        connect_info.style.display="none";
        create_info.style.display="none";
    }
}

let moves = document.querySelector('.moves');
let moving = document.querySelector('.moving_section');

moves.addEventListener('scroll', () => {
    console.log("sjjs")
  let scrollY = moves.scrollTop;
  moving.style.transform = `translateX(-${scrollY}px)`;
});

/*
  

  let moving=document.querySelector("moving_section");
  let moving2=document.querySelector("moving_section1");
  let move=document.querySelector("moves")
  
  
  moves.onscroll=function(){
    var newLeftPosition = move.scrollTop;
    textElementl.style.left = '-' + newLeftPosition + 'px';

  }
  */