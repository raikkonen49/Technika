$(document).ready(function() {

    //hamburger

    $(".hamburger").click(function() {
        $(".mob-nav").slideToggle(200);
        $(".hamburger").toggleClass("is-active");
    });

    $(".header > ul > li").hover(function() {
        $(this).find(".sub-meniu").slideToggle(200);
    });

    $(".fixed-goods-btn").click(function() {
        $(this).parent().toggleClass("open");
    });

    $(".goods-list-block > ul > li > ul > li .btn").hover(function() {
        $(this).parent().parent().find("> li").toggleClass("open");
    });

    $(".goods-location ul li a").hover(function() {
        $(this).find(".goods-location-adress").slideToggle(0);
    });

    $('.recommend-tools-list ul').each(function() {
        var itemH = $(this).outerHeight();
        $(this).find("li").css('height', itemH);
    });


    //height

    // if ($(window).width() <= 767) {
    //     $(".about-project-wrap").appendTo(".row-slider");
    // }

    $('.adress-item-line').each(function() {
        var itemH = $(this).outerHeight();
        $(this).find("> ul > li").css('height', itemH);
    });

    $('.map').each(function() {
        var itemH = $(this).outerHeight();
        $(this).parent().parent().find("> li").css('height', itemH);
    });

    $('.gallery-img').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 1.235;
        $(this).css('height', itemH);
    });

    $('.goods-list-img span').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 1.494;
        $(this).css('height', itemH);
    });

    $('.goods-inside-slider .item').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 1;
        $(this).css('height', itemH);
    });

    $('.goods-inside-slider .carousel-indicators li').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 1;
        $(this).css('height', itemH);
    });

    $('.recommend-tools-list-img span').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 1.865;
        $(this).css('height', itemH);
    });

    $('.category-list > ul > li > a').click(function(e) {
        e.preventDefault();

        var $this = $(this);

        if ($this.next().hasClass('down')) {
            $this.next().removeClass('down');
            $this.next().slideUp(200);

        } else {
            $this.parent().parent().find('.category-list ul li ul').removeClass('down');
            $this.parent().parent().find('.category-list ul li ul').slideUp(350);
            $this.next().toggleClass('down');
            $this.next().slideToggle(200);
            $(this).removeClass('down');
        }
        $(this).toggleClass('down');
    });
    if ($(window).width() <= 767) {
        $( ".goods-inside-block, .recommend-tools-title" ).wrap( "<div class='row row-goods-inside-block'></div>" );
    }

    if ($(window).width() <= 767) {
        $( ".goods-inside-block.form" ).unwrap();
    }






    // $(".news-block-item .btn").hover(function() {
    //     $(this).parent().parent().parent().parent().toggleClass("more");
    // });


});

$(window).resize(function(event) {

    $('.recommend-tools-list ul').each(function() {
        var itemH = $(this).outerHeight();
        $(this).find("li").css('height', itemH);
    });

    $('.adress-item-line').each(function() {
        var itemH = $(this).outerHeight();
        $(this).find("> ul > li").css('height', itemH);
    });

    $('.gallery-img').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 1.235;
        $(this).css('height', itemH);
    });

    $('.goods-list-img span').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 1.494;
        $(this).css('height', itemH);
    });

    $('.goods-inside-slide .item').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 1;
        $(this).css('height', itemH);
    });

    $('.goods-inside-slider .carousel-indicators li').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 1;
        $(this).css('height', itemH);
    });

    $('.map').each(function() {
        var itemH = $(this).outerHeight();
        $(this).parent().parent().find("> li").css('height', itemH);
    });

    $('.recommend-tools-list-img span').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 1.865;
        $(this).css('height', itemH);
    });

});
