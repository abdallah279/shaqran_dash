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


let isRtl = $('html[lang="ar"]').length > 0;

// Normal Select To
if($(".select").length > 1)
$(".select").select2({
  dir: isRtl ? "rtl" : "ltr",
  minimumResultsForSearch: Infinity,
});
