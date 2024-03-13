var countDownDate = new Date("March 14, 2024 00:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = ("0" + hours).slice(-2) + ":" +
    ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);

  if (distance <= 0) {
    clearInterval(x);
    document.getElementById("redirect-btn").innerText = "Happy Birthday";
    document.getElementById("redirect-btn").style.display = "block";
    document.getElementById("redirect-btn").onclick = function() {
      window.location.href = "second_page.html"; // Redirect to the second page
    };
  } else {
    document.getElementById("redirect-btn").innerText = "Happy Birthday";
    document.getElementById("redirect-btn").style.display = "block";
    document.getElementById("redirect-btn").onclick = function() {
      alert("kastha oopika pattandi sahithi garu");
    };
  }
}, 1000);
