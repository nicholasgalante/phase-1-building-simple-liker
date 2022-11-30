// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const allHearts = document.querySelectorAll('.like-glyph');

allHearts.forEach(element => {
  element.addEventListener('click', (event) => {
    mimicServerCall()
      .then(() => {
        updateHeart(event);
      })
      .catch(() => {
        const modal = document.querySelector('#modal');
        const modalMessage = document.querySelector('#modal-message');
        modal.classList.remove('hidden');
        modalMessage.innerText = "Random server error. Try again."
        setTimeout(() => {
          modal.classList.add('hidden');
        }, 3000)
      });
  })
});

updateHeart = (event) => {
  if (event.target.classList.contains('activated-heart')){
    event.target.innerText = EMPTY_HEART;
    event.target.classList.remove('activated-heart');
  } else {
    event.target.innerText = FULL_HEART;
    event.target.classList.add('activated-heart');
  }
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  })
}
