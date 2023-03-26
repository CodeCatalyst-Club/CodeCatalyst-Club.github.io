const ins = document.queryselector(".fa-brands fa-instagram");
const github = document.queryselector(".fa-brands fa-github");

function tick_1() {
  window.open("https://www.instagram.com/code_catalystt/");
}

function tick_2() {
  window.open("https://github.com/CodeCatalyst-Club");
}

function tick_4() {
  window.open("https://escai.rf.gd/");
}

function tick_5() {
  window.open("https://gtprojectz.blogspot.com/");
}

function swap() {
  let hamburger_section = document.querySelector(".hamburger_section");
  let z = document.getElementById("hidden_section");
  hamburger_section.classList.toggle("change");
  if (z.style.display === "block") {
    z.style.display = "none";
  } else {
    z.style.display = "block";
  }
}

function scrollWin1() {
  window.open( "https://drive.google.com/file/d/1dDCBTqqs0w024ltpRqsDB84641xxILJP/view?usp=share_link" );
}

function scrollWin2() {
  window.open("https://drive.google.com/file/d/1iFdKO-WUAIAKY2kIhp9dRPfklg74KuxE/view?usp=share_link");
}

function scrollWin3() {
  window.open("https://forms.gle/j82U64bkyV9AqwXK7");
}

function scrollWin4() {
  window.open("rules.html");
}

function scrollWin5() {
  window.open("https://goo.gl/maps/XMnnFeZjZY5m553g9");
}



function scroll1() {
  window.open(
    "https://drive.google.com/file/d/1dDCBTqqs0w024ltpRqsDB84641xxILJP/view?usp=share_link"
  );
}

function scroll2() {
  window.open("https://drive.google.com/file/d/1iFdKO-WUAIAKY2kIhp9dRPfklg74KuxE/view?usp=share_link");
}

function scroll3() {
  window.open("https://forms.gle/j82U64bkyV9AqwXK7");
}

function scroll4() {
  window.open("rules.html");
}

function scroll5() {
  window.open("https://goo.gl/maps/XMnnFeZjZY5m553g9");
}
var items = document.querySelectorAll(".timeline li");

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function read_more() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
