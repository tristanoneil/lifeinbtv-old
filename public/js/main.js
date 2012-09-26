$(function() {
  function addPlayerEvents() {
    var iframe = $("#vimeo")[0],
        player = $f(iframe);

    player.addEvent("ready", function() {
      player.addEvent("play", function() {
        $("section.video").css("opacity", "1");
        $("div.tint").show();
      });

      player.addEvent("pause", function() {
        $("div.tint").hide();
      });

      $("div.tint").live("click", function() {
        player.api("pause");
        $("div.tint").hide();
      });
    });
  }

  addPlayerEvents();

  $.pjax.defaults.timeout = 4000;

  $("a[data-pjax]").pjax("#main", { fragment: "#main" })

  $("#main").on("pjax:complete", function(e, xhr, err) {
    addPlayerEvents();
  });

  $("#main").on("pjax:beforeSend", function(e, xhr, err) {
    $("#main .video").html("<h3>Loading</h3>")
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});
