/* function to keep the header sticky */
(function () {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function () { myFunction() };

    // Get the header
    var header = document.getElementsByClassName("primary-navigation")[0];
    var content = document.getElementsByClassName("site-content")[0];
    var stickyLogo = document.getElementsByClassName("primary-navigation-sticky-logo-container")[0];

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("primary-navigation-sticky");
            content.classList.add("site-content-sticky-header");
            stickyLogo.classList.remove("primary-navigation-sticky-logo-hide");
            stickyLogo.classList.add("fade-in");
        } else {
            header.classList.remove("primary-navigation-sticky");
            content.classList.remove("site-content-sticky-header");
            stickyLogo.classList.add("primary-navigation-sticky-logo-hide");
            stickyLogo.classList.remove("fade-in");
        }
    }
}());