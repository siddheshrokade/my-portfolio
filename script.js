//------------------------------- typing----------------------------------//

let sid = new Typed(".typing", {
    strings: ["Developer","Designer", "and", "Programmer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}












//---------------------------------intro----------------------------------------------------//
const sid1 = gsap.timeline({ defaults: { ease: "power1.out" } });

sid1.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
sid1.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
sid1.to(".intro", { y: "-100%", duration: 1 }, "-=1");
sid1.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
sid1.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

//----------------------------------button---------------------------------------------//





















//-----------------------------------page----------------------------------------------------//
const hero = document.querySelector('.hero');
const headline = document.querySelector('.headline-7');
const slider = document.querySelector('.slider');

const tl = new TimelineMax();

tl.fromTo(hero,1, {height: "0%"} ,{height:"80%", ease: Power2.easeInOut})
.fromTo(hero, 1.2, {width: '100%'}, {width: '80%',ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")
.fromTo(headline,0.5,{opacity:0,x:30},{opacity:1,x:0},"-=0.5");  