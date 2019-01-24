$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var input = $("input#year").val();
    var year = parseFloat(input);
    $(".inputYear").text(input);
    if ((year - Math.floor(year)) !== 0) {
      $("#year-false").show();
      $("#leap-year-true").hide();
      $("#leap-year-false").hide();
    }
    else if ((year%4 === 0) && (year%100 !== 0) || (year%400 === 0)) {
      $("#leap-year-true").show();
      $("#leap-year-false").hide();
      $("#year-false").hide();
    } else {
      $("#leap-year-false").show();
      $("#leap-year-true").hide();
      $("#year-false").hide();
    }
  });
});
