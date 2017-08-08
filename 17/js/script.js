$page = $(".site-wrapper")

sponsorship = function() {
  window.location = "mailto:partnerships@freetailhackers.com"
}

$page.on('click', '.sponsorship', sponsorship);
