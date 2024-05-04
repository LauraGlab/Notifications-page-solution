const unreadNotifs = document.querySelectorAll(".unread");
const readBtn = document.querySelector(".read-btn");
const notifCount = document.querySelector(".notif-count");
const redDots = document.querySelectorAll("small");
let i = unreadNotifs.length;

let clicked = false;

readBtn.addEventListener('click', () => {
  unreadNotifs.forEach((e) => {
    e.classList.replace("unread", "read");
    redDots.forEach((redDot) => {
      redDot.style.display = "none";
    });
  });
  i = 0;
  notifCount.textContent = i;
  clicked = true;
}, {once: true});


unreadNotifs.forEach((e) =>{
  e.addEventListener('click', () => {
    if(clicked === false || i>0){
      redDots.forEach((redDot) => {
        redDot.style.display = "none";
      });
    e.classList.replace("unread", "read");
    i--;
    notifCount.textContent = i;
    }else if(i = 0){
      clicked = true;
    }
  }, { once:true })
});








