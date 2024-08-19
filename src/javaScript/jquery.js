$(document).ready(function () {
  $('.infopage__graph').each(function (index) {
    $(this)
      .delay(index * 1000)
      .queue(function (next) {
        $(this).addClass('animate');
        next();
      });
  });
});
