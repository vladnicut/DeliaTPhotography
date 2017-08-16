var didScroll;
var lastScrollTop = 0;
var navbarHeight = $('.navbar').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 50);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= 3)
        return;
    
    // If they scrolled down and are past the navbar, add class .MagicMenu-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.navbar').fadeOut(250);
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.navbar').fadeIn(250);
        }
    }
    
    lastScrollTop = st;
}
