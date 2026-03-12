function toggleDarkMode(){
    document.body.classList.toggle("dark");
}

function toggleMenu(){
    document.querySelector('nav').classList.toggle('active');
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('nav').classList.remove('active');
    });
});

const text = ["Web Developer", "Programmer", "Informatics Student"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
    if (count === text.length) {
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);
    document.getElementById("typing").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 150);
}

type();

// initialize AOS animations
if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, once: true });
}