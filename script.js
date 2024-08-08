const firstitem = document.querySelector(".firstitem");
const seconditem = document.querySelector(".seconditem");
const thirditem = document.querySelector(".thirditem");

const image1 = document.querySelector(".item1");
const image2 = document.querySelector(".item2");
const image3 = document.querySelector(".item3");

image1.addEventListener("mouseenter",()=>{
    firstitem.style.display="block";
})

image1.addEventListener("mouseleave",()=>{
    firstitem.style.display="none";
})

image2.addEventListener("mouseenter",()=>{
    seconditem.style.display="block";
})
image2.addEventListener("mouseleave",()=>{
    seconditem.style.display="none";
})

image3.addEventListener("mouseenter",()=>{
    thirditem.style.display="block";
})
image3.addEventListener("mouseleave",()=>{
    thirditem.style.display="none";
})
