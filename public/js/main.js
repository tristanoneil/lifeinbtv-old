$(function() {
  function addPlayerEvents() {
    var iframe = $("#vimeo")[0];
    window.player = $f(iframe);

    window.player.addEvent("ready", function() {
      window.player.addEvent("play", function() {
        $("section.video").css("opacity", "1");
        $("div.tint").show();
      });

      window.player.addEvent("pause", function() {
        $("div.tint").hide();
      });

      $("div.tint").bind("click", function() {
        window.player.api("pause");
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
