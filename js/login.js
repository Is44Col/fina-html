let logo = document.querySelector('.logosolute');

logo.addEventListener('click', (e) => {
    window.location.href = '../index.html';
});

let imp = document.querySelector(".text_title_footer");

imp.addEventListener('click', (e) => {
    window.location.href = '../index.html';
})

let input = document.querySelectorAll('.get_info');

input.forEach((thing) => {
    thing.addEventListener('focus', (e) => {
        let container = e.target.parentElement;
        container.style.outline = '4px solid #48e';
    });

    thing.addEventListener("blur", (e) => {
        let container = e.target.parentElement;
        container.style.outline = "none";
    });
})

// Mostrar y ocultar contraseña
let firstEye = document.getElementById("firstEye");
let firstInput = document.getElementById("contrasena");

firstEye.addEventListener('click', (e) => {
    if (firstInput.type === 'password') {
        firstInput.type = 'text';
    } else {
        firstInput.type = "password";
    };
    firstEye.classList.toggle("bi-eye");
    firstEye.classList.toggle("bi-eye-slash");
});
