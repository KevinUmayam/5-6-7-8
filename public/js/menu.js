window.onload = function () {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');
    console.log("clicked");
    menu_btn.addEventListener('click', function () {
        console.log("clicked");
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
}