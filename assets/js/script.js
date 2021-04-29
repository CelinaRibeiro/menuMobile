window.onload = function() {
    document.querySelector('.menuMobile').addEventListener('click', function(){
        if(document.querySelector('.header-menu nav ul').style.display == 'flex') {
            document.querySelector('.header-menu nav ul').style.display = 'none';
        } else {
            document.querySelector('.header-menu nav ul').style.display = 'flex';
        }
    });
};

