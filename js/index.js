let texto = document.querySelector(".p_down");
let flecha = document.querySelector(".bi-arrow-down");

const transform = (obj1, obj2, action) => {
    obj1.style.transform = action;
    obj2.style.transform = action;
};

const untransform = (obj1, obj2, action) => {
    obj1.style.transform = action;
    obj2.style.transform = action;
};

texto.addEventListener("mouseenter", (e) =>
    transform(texto, flecha, "scale(1.2)"),
);
flecha.addEventListener("mouseenter", (e) =>
    transform(texto, flecha, "scale(1.2)"),
);
texto.addEventListener("mouseleave", (e) =>
    untransform(texto, flecha, "scale(1)"),
);
flecha.addEventListener("mouseleave", (e) =>
    untransform(texto, flecha, "scale(1)"),
);

texto.addEventListener("click", (e) => (window.location.href = "#about"));
flecha.addEventListener("click", (e) => (window.location.href = "#about"));

let catText = document.querySelector(".text_category_final");
let arrow = document.querySelector(".right_arrow__");

catText.addEventListener("mouseenter", (e) => {
    transform(catText, arrow, "translate(0,2px)");
    catText.style.textShadow = "0 0 0 #C4A484";
    arrow.style.textShadow = "0 0 0 #C4A484";
});
arrow.addEventListener("mouseenter", (e) => {
    transform(catText, arrow, "translate(0,3px)");
    catText.style.textShadow = "0 0 0 #C4A484";
    arrow.style.textShadow = "0 0 0 #C4A484";
});
catText.addEventListener("mouseleave", (e) => {
    untransform(catText, arrow, "translate(0,-3px)");
    catText.style.textShadow = "";
    arrow.style.textShadow = "";
});
arrow.addEventListener("mouseleave", (e) => {
    untransform(catText, arrow, "translate(0,-3px)");
    catText.style.textShadow = "";
    arrow.style.textShadow = "";
});

let foot_imp = document.querySelector(".text_title_footer");

foot_imp.addEventListener("click", (e) => {
    window.location.href = "#";
});

let productCard = document.querySelectorAll(".card_product");

productCard.forEach((card) => {
    card.addEventListener("mouseenter", (e) => {
        let precio = e.currentTarget.querySelector("p");
        precio.style.color = "#fff";
    });

    card.addEventListener("mouseleave", (e) => {
        let precio = e.currentTarget.querySelector("p");
        precio.style.color = "";
    });
});

let logo = document.querySelector(".logo");

logo.addEventListener("click", (e) => {
    window.location.href = "#";
});

let btnCatlog = document.querySelector(".btn-catalogo");

btnCatlog.addEventListener("click", (e) => {
    window.location.href = "../view/catalog.html";
});

let login = document.querySelector('.login');
let register = document.querySelector('.register');

login.addEventListener('click', (e) => {
    window.location.href = "./view/login.html";
})

register.addEventListener("click", (e) => {
    window.location.href = "./view/register.html";
});