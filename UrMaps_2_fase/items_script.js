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

