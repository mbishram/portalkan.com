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

// Masonry
var elem = document.querySelector('.portal-links');
var msnry = new Masonry( elem, {
    // options
    itemSelector: '.portal-link',
    columntWidth: '.portal-link',
    gutter: 25
});

// END Masonry