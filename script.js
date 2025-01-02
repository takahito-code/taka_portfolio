const colorButton = document.getElementById("colorButton");
const colors = ["#fef3c7", "#d1fae5", "#ede9fe", "#fee2e2"];
colorButton.addEventListener("click", () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth"});
    });
});

document.addEventListener("scroll", ()=>  {
    const projects = document.querySelectorAll(".project");
    projects.forEach((project) => {
        const rect = project.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            project.classList.add("visible");
        }
    });
});