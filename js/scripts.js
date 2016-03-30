$(document).ready(function() {

  //BUSINESS LOGIC
  var translation = function(english) {
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
  };

  //UI LOGIC
  $("form#translator").submit(function(event) {
    event.preventDefault();

    var english = $("input#phrase").split();
    var piglatin = translation(english);

    if (isNaN(year)) {
      alert("Please type a valid number");
    } else if (!result) {
      $(".not").text("not");
    } else if (result) {
      $(".not").text("");
    } else {
      alert("please type a valid number.")
    };

    $(".years").text(year);

    $("#result").show();
  });
});
