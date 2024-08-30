window.addEventListener('load', () => {
    const but = document.querySelector('.test');

    but.addEventListener("click", () => {
        but.innerHTML = "HA";
    })

    const but2 = document.getElementById("test2");

    but2.addEventListener("click", () => {
        but2.innerHTML ="HI";
    })
});