const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll(".page-section");

navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);

    sections.forEach(section => section.classList.remove("active"));  /*removing active class from the section*/
    document.getElementById(targetId).classList.add("active"); /*adding the active class to the targetId*/

    if (targetId === "home") runCounters();
  });
});


/* concept of this active, here specified something like .active in css and then we gave the opacity
now in js we gave that if something have this active then put this to it ...nowunderstsnd ?
now classList.add makes only that thing visible in the screen !!*/



// 🔢 Counter Animation
function runCounters() {
  const counters = document.querySelectorAll(".counter");
  counters.forEach(counter => {
    counter.innerText = "0";
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;
      const increment = target / 300;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}
runCounters(); // initial load

// 🧠 Typewriter Animation
const typewriterElement = document.querySelector(".typewriter-text");
const typewriterTexts = [
  "Welcome to Sacchi Raah Foundation",
  "We believe in real change",
  "Empowering with education, love & dignity"
];
let textIndex = 0;
let charIndex = 0;

function typeText() {
  if (textIndex >= typewriterTexts.length) textIndex = 0;

  const currentText = typewriterTexts[textIndex];
  const visibleText = currentText.substring(0, charIndex + 1);
  typewriterElement.innerText = visibleText;
  charIndex++;

  if (charIndex < currentText.length) {
    setTimeout(typeText, 100);
  } else {
    setTimeout(() => {
      charIndex = 0;
      textIndex++;
      typewriterElement.innerText = "";
      setTimeout(typeText, 100);
    }, 1500);
  }
}
typeText();


// 🔍 Lightbox gallery
const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.style.display = "flex";
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});


const slides = document.querySelectorAll(".testimonial-slide");
let currentSlide = 0;

/*concept of this .active, here specified something like .active in css and then we gave the opacity
now in js we gave that if something have this active then put this to it ...nowunderstsnd ?
now classList.add makes only that thing visible in the screen !!*/

function showNextSlide(){
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1 )% slides.length; /* move to next one and move back to 0 at the end */
   slides[currentSlide].classList.add("active");
}
setInterval(showNextSlide,2000); //evry four sec


/*same upper part is the normal function but this is arrow function

const showNextSlide = () => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
};

*/

document.getElementById("unlock-founder").addEventListener('click', () => {
  const password = prompt("Enter Founder's Password");

  if(password === "Sacchiraah@786"){
    document.getElementById("founder-panel").classList.remove("founder-hidden");
    founderPanel.classList.add("founder-visible")
    alert("Access Granted Sir !!");
  }
  else{
    alert("Incorrect password");
  }
});


document.querySelector(".cta-btn").addEventListener('click',()=> {
  const contactSection = document.getElementById("contact");

  document.querySelectorAll(".page-section").forEach(section => {
    section.classList.remove("active");
  });
  contactSection.classList.add("active");
  contactSection.scrollIntoView({ behavior: "smooth"}); // this section make the call that to open this with smoothly
});


const openChatBtn = document.getElementById("open-chat");
const chatBox = document.getElementById("chat-box");
const chatBody = document.getElementById("chat-body");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

openChatBtn.addEventListener("click", () => {
  chatBox.classList.toggle("hidden");
});

sendBtn.addEventListener("click", () => {
  const message = userInput.value.trim();
  if (message !== "") {
    appendMessage("user", message);
    respondTo(message.toLowerCase());
    userInput.value = "";
  }
});

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.className = `chat-msg ${sender}`;
  msg.textContent = text;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function respondTo(msg) {
  let reply = "";

  if (msg.includes("volunteer")) {
    reply = "You can volunteer by filling the Google form under Contact section!";
  } else if (msg.includes("join")) {
    reply = "We'd love to have you! Visit the Join Us button or Contact section.";
  } else if (msg.includes("founder")) {
    reply = "Our founder Shahzan started Sacchi Raah with a deep mission to serve.";
  } else {
    reply = "Sorry, I'm still learning. Try asking about volunteering, joining, or founder!";
  }

  setTimeout(() => appendMessage("bot", reply), 500);
}




