
let sec = 0;
const secAry = [];
const eCount = document.getElementById("counter");
const btnMinus = document.getElementById('minus');
const btnPlus = document.getElementById('plus');
const btnHeart = document.getElementById('heart');
const eLikes = document.getElementById('likes');
const btnPause = document.getElementById('pause');
const btnSubmit = document.getElementById('submit');
const commentField = document.getElementById('comment-input');

function startTimer() {
  timer = setInterval( function() {eCount.innerHTML = ++sec;}, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
  startTimer();
});

btnMinus.addEventListener('click', function (event) {
  eCount.innerHTML = --sec;
});

btnPlus.addEventListener('click', function (event) {
  eCount.innerHTML = ++sec;
});

btnHeart.addEventListener('click', function (event) {
  const secLike = sec
  secAry.push(secLike);
  secAryCopy = secAry.slice().sort((el1, el2) => el1 - el2);
  const secItemStart = secAryCopy.indexOf(secLike);
  const secItemEnd = secAryCopy.lastIndexOf(secLike);
  console.log("secAryCopy = " + secAryCopy);
  console.log("secItemStart = " + secItemStart);
  console.log("secItemEnd = " + secItemEnd);
  //const secItemAry = secAry.splice(secItemStart, secItemEnd);
  //const secItemCount = secItemAry.length
  //console.log("secItemAry = " + secItemAry);
  //console.log("secItemCount = " + secItemCount);
  //if (secItemCount == 1) {
      //const likeNode = document.createElement('li');
      //let msgLikeNode = document.createTextNode(`${sec} has been liked ${secItemCount} time`);
      //likeNode.appendChild(msgLikeNode);
      //document.querySelector('ul.likes').appendChild(likeNode).id = sec;
    //} else {
      //console.log("error")
      //document.getElementById(sec).innerHTML = `${sec} has been liked ${secItemCount} times`;
    //}
});

btnPause.addEventListener('click', function (event) {
  if (btnPause.className == "resume") {
    btnPause.className = "pause";
    btnPause.innerHTML = " pause ";
    startTimer();
    btnMinus.disabled = false;
    btnPlus.disabled = false;
    btnHeart.disabled = false;
    btnSubmit.disabled = false;
  } else {
    btnPause.className = "resume";
    btnPause.innerHTML = " resume ";
    clearInterval(timer)
    //btnMinus.disabled = true;
    //btnPlus.disabled = true;
    //btnHeart.disabled = true;
    btnSubmit.disabled = true;
  }
});

btnSubmit.addEventListener('click', function (event) {
  const commentNode = document.createElement('p');
  const commentTextNode = document.createTextNode(commentField.value);
  event.preventDefault();
  commentNode.appendChild(commentTextNode);
  document.querySelector('div#list').appendChild(commentNode);
  commentField.value = '';
});
