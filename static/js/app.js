function init() {
  initClock();
  loadLists();
}

function initClock() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10)
    dd = '0' + dd
  if (mm < 10)
    mm = '0' + mm
  if (h < 10)
    h = '0' + h
  if (m < 10)
    m = '0' + m
  if (s < 10)
    s = '0' + s

  $(".time-hours").html(h);
  $(".time-minutes").html(m);
  $(".time-seconds").html(s);
  $(".date-day").html(dd);
  $(".date-month").html(mm);
  $(".date-year").html(yyyy);

  if (h < 12) {
    $(".greetings-title").html("Good Morning");
  } else if (h >= 12 && h < 19) {
    $(".greetings-title").html("Good Afternoon");
  } else {
    $(".greetings-title").html("Good Evening");
  }

  var t = setTimeout(initClock, 500);
}

function loadLists() {
  var into = $('#result');

  function fileRetrieved(contents) {
    var lines = contents.split('\n');
    for (var i = 0; i < lines.length; i += 1) {
      createListElement(lines[i]);
    }
  }

  function createListElement(text) {
    var el = $('<li></li>').html(text);
    el.appendTo(into);
  }

  var text = $('#text').html();
  fileRetrieved(text);
}