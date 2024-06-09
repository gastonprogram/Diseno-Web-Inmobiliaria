$(document).ready(function() {
    // actualizar el link
    function updateActiveLink() {
        var path = window.location.pathname.split('/').pop();
        if (path === 'contactos.html') {
            $(".nav-links a").removeClass("active");
            localStorage.removeItem('activeLink');
        } else {
            $(".nav-links a").removeClass("active");
            $(".nav-links a[href='" + path + "']").addClass("active");
            localStorage.setItem('activeLink', path);
        }
    }

    // # revisar link activo
    var activeLink = localStorage.getItem('activeLink');
    if (activeLink) {
        $(".nav-links a[href='" + activeLink + "']").addClass("active");
    }


    function setActiveLink(event) {
        var href = $(this).attr('href');
        if (href === 'contactos.html') {
            $(".nav-links a").removeClass("active");
            localStorage.removeItem('activeLink');
        } else {
            $(".nav-links a").removeClass("active");
            $(".nav-links a[href='" + href + "']").addClass("active");
            localStorage.setItem('activeLink', href);
        }
    }

    $(".nav-links a, .footer-links a, .articulo-button a").click(setActiveLink);

    // cambiar el link si el usuario va hacia adelante o atras
    // en el navegador
    window.addEventListener('popstate', function() {
        updateActiveLink();
    });

    updateActiveLink();
});