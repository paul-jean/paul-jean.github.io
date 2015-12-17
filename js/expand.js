(function($) {
    var expand = function(e) {
        var target = $(e.target);
        // TODO: use e.data.quad
        if (target.hasClass('expanded')) {
            target.on('webkitAnimationEnd', function() {
                target.off('webkitAnimationEnd');
                target.removeClass('contracting');
            });
            target.removeClass('expanded');
            target.addClass('contracting');
        } else {
            target.on('webkitAnimationEnd', function() {
                target.off('webkitAnimationEnd');
                target.removeClass('expanding');
                target.addClass('expanded');
            });
            target.addClass('expanding');
        }
    };
    $('.quadrants').children().
        on('click', expand);
})(jQuery)
