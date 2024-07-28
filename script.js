let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav div ul li a");

window.onscroll = () => {
    let scrollPosition = window.scrollY;

    sections.forEach((section) => {
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (scrollPosition >= offset && scrollPosition < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
            });
            document.querySelector("nav div ul li a[href='#" + id + "']").classList.add("active");
        }
    });
};
