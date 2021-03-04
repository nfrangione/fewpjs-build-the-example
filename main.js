// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let allHearts = document.querySelectorAll(".like-glyph");

function likeCallBack(e) {
  let heart = e.target;
  mimicServerCall()
  .then(() => {
    if (heart.innerText === FULL_HEART) {
      heart.innerText = EMPTY_HEART;
      heart.className = '';
    }
    else {
      heart.innerText = FULL_HEART;
      heart.className = 'activated-heart'
    }
  })
  .catch(() => {
    document.getElementById("modal").className = "";
  })
}

for (let likeGlyph of allHearts) {
  likeGlyph.addEventListener('click', likeCallBack)
}
  

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
