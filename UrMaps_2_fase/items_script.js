$('#pathList').on('mousedown', function(event) {
    var startX = event.pageX;
    var scrollLeft = this.scrollLeft;
    
    $(this).on('mousemove', function(event) {
        var moveX = event.pageX - startX;
        this.scrollLeft = scrollLeft - moveX;
    });
    
    $(this).on('mouseup', function() {
        $(this).off('mousemove');
    });
});


//cambio color
document.getElementById('switch-color').addEventListener('change', function() {
    document.querySelector('.gradiante').classList.toggle('alt-colors');
});

document.getElementById('switch-color').addEventListener('change', function() {
    document.querySelector('.btn-secondary').classList.toggle('alt-colors');
});

document.getElementById('switch-color').addEventListener('change', function() {
    document.querySelectorAll('.hexagon-item').forEach(item => {
        item.classList.toggle('alt-colors');
    });
});

document.getElementById('switch-color').addEventListener('change', function() {
    document.querySelectorAll('.hex-item').forEach(item => {
        item.classList.toggle('alt-colors');
    });
});

document.getElementById('switch-color').addEventListener('change', function() {
    document.querySelectorAll('.Button_config').forEach(item => {
        item.classList.toggle('alt-colors');
    });
});

document.getElementById('switch-color').addEventListener('change', function() {
    var urmapsLogo = document.getElementById('urmapsLogo');
    // Cambiar el src de las imágenes
    if (urmapsLogo.src.includes('URMAPSHORI.png')) {
        urmapsLogo.src = 'logos/URMAPSHORI_ALTERNATIVO.png';
    } else {
        urmapsLogo.src = 'logos/URMAPSHORI.png';
    }
});
