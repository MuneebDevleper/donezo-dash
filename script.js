
let menu = document.querySelector (".side-bar");
let menuBar = document.querySelector ("#menu-bar");

menuBar.addEventListener('click', () => {
    console.log("clicked")
    menu.classList.toggle('active');
});




let btn1 = document.querySelector(".theme-btn-1");
let btn2 = document.querySelector(".theme-btn-2");
let currentTheme = localStorage.getItem("theme");

btn1.addEventListener("click", () => {
     console.log("button_1 was clicked");
    setTheme();
});
btn2.addEventListener("click", () => {
     console.log("button_2 was clicked");
    setTheme();

});

setTheme = () => {
    let currentTheme = document.body.getAttribute("theme");
    if (currentTheme === "dark") {
        setLightMode();
    } else {
        setDarkMode();
    }
}

setDarkMode = () => {
    document.body.setAttribute("theme", "dark");
    localStorage.setItem("theme", "dark");
    btn2.classList.toggle("on");
    btn1.classList.remove("on");


    
}

setLightMode = () => {
    document.body.setAttribute("theme", "light");
    localStorage.setItem("theme", "light");
    btn1.classList.toggle("on");
    btn2.classList.remove("on");

    
}



