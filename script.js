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

// form functions

var tlLogin = gsap.timeline();
var openLogin = document.querySelector("#loginBtn i");
var closeLogin = document.querySelector("#closeLogin i");
var closeUser = document.querySelector("#closeUser i");
var createAccountLink = document.getElementById("createAccountLink");
var backToLoginLink = document.getElementById("backToLoginLink");
var cartDrawer = document.getElementById("cartBtn");
var closeCartDrawer = document.querySelector("#closeCart i");
var mobileCartOpen = document.getElementById("openMobileCart");
var openMobileSidebar = document.getElementById("mobileMenu");
var closeMobileSidebar = document.getElementById("navbarClose");
var navDrawer = document.getElementById("navDrawer");
var openMobileSearch = document.getElementById("openMobileSearch");

var tlNav = gsap.timeline();

tlNav.to(navDrawer, {
  right: 0,
  duration:0.5,
});
tlNav.from("#navDrawerList li", {
  x: 30,
  duration: 0.1,
  opacity: 0,
  stagger: 0.1,
  ease: "power1.out",
});
tlNav.pause();
openMobileSidebar.addEventListener("click", function () {
  tlNav.play();
});
closeMobileSidebar.addEventListener("click", function () {
  tlNav.reverse();
});

openMobileSearch.addEventListener("click", function () {
  tl.play()
});

function cartOpenClose() {
  cartDrawer.addEventListener("click", function () {
    tlLogin.to("#cartDrawer", {
      right: 0,
      duration: 0.5,
    });
  });
  closeCartDrawer.addEventListener("click", function () {
    tlLogin.to("#cartDrawer", {
      right: "-100%",
      duration: 0.5,
    });
  });
}
cartOpenClose();

function openCartDrawer() {
  mobileCartOpen.addEventListener("click", function () {
    tlLogin.to("#cartDrawer", {
      right: 0,
      duration: 0.5,
    });
  });
}

function login() {
  openLogin.addEventListener("click", function () {
    tlLogin.fromTo(
      "#overlayLogin",
      {
        display: "none",
        opacity: 0,
        scale: 0.5,
      },
      {
        display: "flex",
        duration: 0.2,
        opacity: 1,
        scale: 1,
      }
    );
  });
}
login();

backToLoginLink.addEventListener("click", function () {
  tlLogin.to("#overlayCreateAccount", {
    display: "none",
  });
  tlLogin.fromTo(
    "#overlayLogin",
    {
      display: "none",
      opacity: 0,
      scale: 0.5,
    },
    {
      display: "flex",
      duration: 0.2,
      opacity: 1,
      scale: 1,
    }
  );
});

createAccountLink.addEventListener("click", function () {
  tlLogin.to("#overlayLogin", {
    display: "none",
  });
  tlLogin.fromTo(
    "#overlayCreateAccount",
    {
      display: "none",
      opacity: 0,
      scale: 0.5,
    },
    {
      display: "flex",
      duration: 0.2,
      opacity: 1,
      scale: 1,
    }
  );
});

closeLogin.addEventListener("click", function () {
  tlLogin.to("#overlayLogin", {
    display: "none",
    y: -50,
    duration: 0.4,
    opacity: 0,
  });
});
closeUser.addEventListener("click", function () {
  tlLogin.to("#overlayCreateAccount", {
    display: "none",
    y: -50,
    duration: 0.4,
    opacity: 0,
  });
});

swiper.on("slideChange", function () {
  runAnimations();
});
runAnimations();
