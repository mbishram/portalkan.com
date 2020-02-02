// Menu
function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.menubtn')) {
        var dropdowns = document.getElementsByClassName("menu-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


// END Menu

// Sidenav
function toggleSidenav() {
    sidenav = document.getElementById('sidenav-mobile');
    sidenavImg = document.querySelector('.sidenav-mobile .sidenav-logo img');

    document.getElementById("sidenav-mobile").classList.toggle("open");
    if (sidenav.classList.contains('open')) {
        sidenavImg.src= 'images/logo/logo.svg';
    } else {
        sidenavImg.src= 'images/logo/logo-p.svg';
    }
}

// END Sidenav

// Masonry
var elem = document.querySelector('.portal-links');
var msnry = new Masonry( elem, {
    // options
    itemSelector: '.portal-link',
    columntWidth: '.portal-link',
    gutter: 25
});

// END Masonry

