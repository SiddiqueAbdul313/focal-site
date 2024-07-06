var swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

function runAnimations() {
  var tl = gsap.timeline();

  tl.from(".collection", {
    y: 30,
    duration: 0.2,
    stagger: 0.1,
    opacity: 0,
    ease: "power1.out",
  });
  tl.from(".title, .collection1", {
    y: 70,
    duration: 0.2,
    stagger: 0.1,
    opacity: 0,
    ease: "power1.out",
  });
  tl.from(
    ".btn",
    {
      y: 70,
      duration: 0.2,
      opacity: 0,
      ease: "power1.out",
    },
    "-=.4"
  );

  swiper.on("slideChange", function () {
    runAnimations();
  });
  runAnimations();

  document.querySelectorAll(".btn").forEach((button) => {
    const overlay = button.querySelector(".btn-overlay");
    let hoverAnimation;

    button.addEventListener("mouseenter", () => {
      hoverAnimation = gsap.fromTo(
        overlay,
        { translateY: 100, opacity: 0 },
        { translateY: 0, duration: 0.5, opacity: 1 }
      );
    });

    button.addEventListener("mouseleave", () => {
      if (hoverAnimation) {
        hoverAnimation.reverse();
      }
    });
  });
}

// overlay function

document.getElementById("openBox").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("overlay").classList.remove("hidden");
});

function closeOverlay() {
  document.getElementById("overlay").classList.add("hidden");
}

function subscribe() {
  var email = document.getElementById("email").value;
  if (email) {
    alert("Subscribed with " + email);
  } else {
    alert("Please enter a valid email address");
  }
}

// drawer function below

var open;

var tl = gsap.timeline();

var openMenu = document.querySelector("#searchBtn i");
var closeMenu = document.getElementById("closeBtn");

tl.to("#drawer", {
  right: 0,
  duration: 0.5,
});
tl.from("#drawerList h4, #drawerList li", {
  x: 50,
  duration: 0.1,
  opacity: 0,
  stagger: 0.05,
  ease: "power1.out",
});
tl.pause();
openMenu.addEventListener("click", function () {
  tl.play();
});
closeMenu.addEventListener("click", function () {
  tl.reverse();
});
