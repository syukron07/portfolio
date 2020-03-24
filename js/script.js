// event saat di klik
$('.nav-link').on('click', function(e){

var tujuan = $(this).attr('href');
var satujuan = $(tujuan);

// pindahkan scroll
$('html ,body').animate({
    scrollTop: satujuan.offset().top - 55
}, 1250, 'swing');

e.preventDefault;


});


$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
  });


// paralax
$(window).scroll(function() {

    var wScroll = $(this).scrollTop();


    // jumbotron
    // $('.jumbotron img').css({
    //     'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    // });

    // $('.jumbotron h1').css({
    //     'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    // });

    // $('.jumbotron h1').css({
    //     'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    // });

    // portfolio
    if( wScroll > $('.portfolio').offset().top - 100) {

        $('.portfolio .img-thumbnail').each(function(i){
            setTimeout(function() {
                $('.portfolio .img-thumbnail').eq(i).addClass('muncul'); 
            }, 300 * (i+1));

        });
        
    }
    // console.log(wScroll);

});