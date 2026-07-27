// Scroll Reveal Animation using Intersection Observer

const revealElements = document.querySelectorAll(".reveal");


const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.2

});



revealElements.forEach((element)=>{

    observer.observe(element);

});



// Button click animation

const buttons = document.querySelectorAll("button");


buttons.forEach((button)=>{

    button.addEventListener("click",()=>{

        button.style.transform = "scale(0.95)";


        setTimeout(()=>{

            button.style.transform = "";

        },150);

    });

});