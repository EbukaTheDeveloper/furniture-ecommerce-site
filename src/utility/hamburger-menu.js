export default function hamburgerMenu() {
    function showMenu() {
        const navContainer = document.querySelector('.hide-nav-menu');
        navContainer.classList.toggle('hide-nav-menu');
        navContainer.classList.add('nav-menu');
    }
    function hideMenu() {
        if (window.innerWidth < 800) {
            console.log('21');
            const navContainer = document.querySelector('.nav-menu');
            navContainer.classList.toggle('nav-menu');
            navContainer.classList.add('hide-nav-menu');
        }
    }
    return { showMenu, hideMenu }
}