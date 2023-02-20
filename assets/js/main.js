// loader js
$(window).on("load", function () {
    $(".loader").delay(300).fadeOut(1000);
});

// Active Link
$(".sidebar-m .links a").each(function () {
    if (window.location.href.includes($(this).attr("href"))) {
      $(this).addClass("active");
    }
});


// dropDown stopPropagation
$(".dropdown-menu").click(function(e){
    e.stopPropagation();
});


$('.open-side').on('click', function(){
  $('.sidebar-m').addClass('active');
  $('.overlay-m').fadeIn(700);
});

$('.overlay-m').on('click', function(){
  $(this).fadeOut(700);
  $('.sidebar-m').removeClass('active');
})

let isRtl = $('html[lang="ar"]').length > 0;

// Normal Select To
$(".select").select2({
  dir: isRtl ? "rtl" : "ltr",
  minimumResultsForSearch: Infinity,
});

