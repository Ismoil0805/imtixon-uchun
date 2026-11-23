// pasga tushganda rangi o'zgaradi navni 
let navbar = document.getElementById("desktop-nav");
window.addEventListener("scroll", function(){
    if(window.scrollY > 50){
        navbar.classList.add("active2");
    }else{
        navbar.classList.remove("active2")
    }
});
// mediada pasga tushganda rangi o'zgaradi hamburger-nav ni
let hamburger = document.getElementById("hamburger-nav");
window.addEventListener("scroll", function(){
    if(window.scrollY > 50){
        hamburger.classList.add("active2");
    }else{
        hamburger.classList.remove("active2")
    }
});
// pastga tushsa knopka chiqadigan codlar
let topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", ()=>{
    if(window.scrollY > 50){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }
});
// tepaga olip chiqadigan knopkani codlari
topBtn.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});
// nav ustiga bosganda boshqa sectionga olip tuship qo'yadi mediada ham
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
// nav boshqa sectionga o'tganga navda ko'rsatadigan codlar
const sectionlar = document.querySelectorAll("section");
const navlinks = document.querySelectorAll(".nav-link");
const kuzatuvchi = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            navlinks.forEach(link => {
                link.classList.remove("active");
            });
            const activelink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
            if(activelink){
                activelink.classList.add("active");
            };
        };
    });
}, {threshold: 0.5

});
sectionlar.forEach(section =>{
    kuzatuvchi.observe(section);
});