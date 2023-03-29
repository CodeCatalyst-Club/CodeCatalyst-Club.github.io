// Hamburger Script

const navLinks = document.getElementById('navLinks');
const ham = document.getElementById('ham');
const hamInner = document.getElementById('hamInner');

ham.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        hamInner.classList.toggle('fa-times');
});

//Clock js
// the clock timer start 
// Set the date we're counting down to
var countDownDate = new Date("March 25, 2023 13:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("count-days").innerHTML = ('0' + days).substr(-2);
        document.getElementById("count-hours").innerHTML = ('0' + hours).substr(-2);
        document.getElementById("count-mins").innerHTML = ('0' + minutes).substr(-2);
        document.getElementById("count-sec").innerHTML = ('0' + seconds).substr(-2);

        // If the count down is finished, write some text
        if (distance < 0) {
                clearInterval(x);
                document.getElementById("clock").innerHTML = "catalystian is Live!🚀";
        }
}, 1000);



    function liveViews(response) {
      document.getElementById('visits').innerText = response.value;
  }
  
// Clock JS End



// TimeLine JS

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

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      if(!items[i].classList.contains("in-view")){
        items[i].classList.add("in-view");
      }
    } else if(items[i].classList.contains("in-view")) {
        items[i].classList.remove("in-view");
    }
  }
}
 
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);


// Cursor JS

class ArrowPointer {
  constructor() {
    this.root = document.body;
    this.cursor = document.querySelector(".curzr");

    (this.position = {
      distanceX: 0,
      distanceY: 0,
      distance: 0,
      pointerX: 0,
      pointerY: 0,
    }),
      (this.previousPointerX = 0);
    this.previousPointerY = 0;
    this.angle = 0;
    this.previousAngle = 0;
    this.angleDisplace = 0;
    this.degrees = 57.296;
    this.cursorSize = 20;

    this.cursorStyle = {
      boxSizing: "border-box",
      position: "fixed",
      top: "0px",
      left: `${-this.cursorSize / 2}px`,
      zIndex: "2147483647",
      width: `${this.cursorSize}px`,
      height: `${this.cursorSize}px`,
      transition: "250ms, transform 100ms",
      userSelect: "none",
      pointerEvents: "none",
    };

    this.init(this.cursor, this.cursorStyle);
  }

  init(el, style) {
    Object.assign(el.style, style);
    this.cursor.removeAttribute("hidden");
  }

  move(event) {
    this.previousPointerX = this.position.pointerX;
    this.previousPointerY = this.position.pointerY;
    this.position.pointerX = event.pageX + this.root.getBoundingClientRect().x;
    this.position.pointerY = event.pageY + this.root.getBoundingClientRect().y;
    this.position.distanceX = this.previousPointerX - this.position.pointerX;
    this.position.distanceY = this.previousPointerY - this.position.pointerY;
    this.distance = Math.sqrt(
      this.position.distanceY ** 2 + this.position.distanceX ** 2
    );

    this.cursor.style.transform = `translate3d(${this.position.pointerX}px, ${this.position.pointerY}px, 0)`;

    if (this.distance > 1) {
      this.rotate(this.position);
    } else {
      this.cursor.style.transform += ` rotate(${this.angleDisplace}deg)`;
    }
  }

  rotate(position) {
    let unsortedAngle =
      Math.atan(Math.abs(position.distanceY) / Math.abs(position.distanceX)) *
      this.degrees;
    let modAngle;
    const style = this.cursor.style;
    this.previousAngle = this.angle;

    if (position.distanceX <= 0 && position.distanceY >= 0) {
      this.angle = 90 - unsortedAngle + 0;
    } else if (position.distanceX < 0 && position.distanceY < 0) {
      this.angle = unsortedAngle + 90;
    } else if (position.distanceX >= 0 && position.distanceY <= 0) {
      this.angle = 90 - unsortedAngle + 180;
    } else if (position.distanceX > 0 && position.distanceY > 0) {
      this.angle = unsortedAngle + 270;
    }

    if (isNaN(this.angle)) {
      this.angle = this.previousAngle;
    } else {
      if (this.angle - this.previousAngle <= -270) {
        this.angleDisplace += 360 + this.angle - this.previousAngle;
      } else if (this.angle - this.previousAngle >= 270) {
        this.angleDisplace += this.angle - this.previousAngle - 360;
      } else {
        this.angleDisplace += this.angle - this.previousAngle;
      }
    }
    style.transform += ` rotate(${this.angleDisplace}deg)`;

    setTimeout(() => {
      modAngle =
        this.angleDisplace >= 0
          ? this.angleDisplace % 360
          : 360 + (this.angleDisplace % 360);
      if (modAngle >= 45 && modAngle < 135) {
        style.left = `${-this.cursorSize}px`;
        style.top = `${-this.cursorSize / 2}px`;
      } else if (modAngle >= 135 && modAngle < 225) {
        style.left = `${-this.cursorSize / 2}px`;
        style.top = `${-this.cursorSize}px`;
      } else if (modAngle >= 225 && modAngle < 315) {
        style.left = "0px";
        style.top = `${-this.cursorSize / 2}px`;
      } else {
        style.left = `${-this.cursorSize / 2}px`;
        style.top = "0px";
      }
    }, 0);
  }

  remove() {
    this.cursor.remove();
  }
}

(() => {
  const cursor = new ArrowPointer();
  if (
    !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    document.onmousemove = function (event) {
      cursor.move(event);
    };
  } else {
    cursor.remove();
  }
})();


// Preloader JS

window.onload = function () {
  setTimeout(function () {
    // animations
    document.getElementById("block1").style =
      "animation:fade 1500ms ease-in-out;";

    document.getElementById("block2").style =
      "animation:fade1 1500ms ease-in-out ;animation-delay:1000ms";

    setTimeout(function () {
      document.getElementById("block1").style.display = "none";
      document.getElementById("block2").style.display = "block";
      document.body.style.overflowY = "scroll";
    }, 1400);
  }, 1500);
};


const countE1=document.getElementById("visits");
countvisits();
function countvisits() {
  fetch('https://api.countapi.xyz/update/ccc/club/?amount=1')
  .then((res)=>res.json())
  .then((res)=> {
    countE1.innerHTML=res.value;
  });
}

function clusk(){
 const regis = document.getElementById("regi");
 regis.innerHTML="REGISTRATION IS CLOSED...!";
 
}

function tick_5() {
  let d1 = document.getElementById("timer");
  let d2 = document.getElementById("info");
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const datee = d.getDate();
  const hour = d.getHours();
const  minutes = d.getMinutes();

  
  if (year == "2023" && month =="3"&& datee == "29" && hour =="10" ){
    window.open("https://portal.codebreachers.in/");
  } else {
    d1.innerText = "please wait...!";
  }
}
