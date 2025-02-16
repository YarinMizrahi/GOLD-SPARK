document.addEventListener("DOMContentLoaded", () => {
    const projectsSection = document.querySelector(".project-list");


    // הוספת אפקט אנימציה בהשהייה
    const productElements = document.querySelectorAll(".product");
    productElements.forEach((product, index) => {
        setTimeout(() => {
            product.classList.add("animate");
        }, index * 300);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".product");

    products.forEach((product, index) => {
        setTimeout(() => {
            product.classList.add("animate");
        }, index * 300);
    });
});