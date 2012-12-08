$(function() {
  $(".videos").imagesLoaded(function() {
    $('.videos').masonry({
      itemSelector : '.video',
      columnWidth : 235
    });
  });

  $.pjax.defaults.timeout = 4000;

  $("a[data-pjax]").pjax("#main", { fragment: "#main" })

  $("#main").on("pjax:beforeSend", function(e, xhr, err) {
    $("#main .video").html("<h3>Loading</h3>")
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  $(".share a").live("click", function(e) {
    e.preventDefault();
    window.open($(this).attr("href"), "Share", "height=300,width=600");
  });

  $(".share span").live("click", function(e) {
    e.stopPropagation();
    $(".share div").toggle();
  })

  $(".share ul, body").live("click", function() {
    $(".share div").hide();
  });
});
