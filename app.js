const thumbsUpBtn = document.getElementById("thumbsUpBtn");
const thumbsDownBtn = document.getElementById("thumbsDownBtn");

function btnClicked(event) {
  event.target.classList.add("clicked");
}

function btnNotClicked(event) {
  event.target.classList.remove("clicked");
}

thumbsDownBtn.addEventListener("click", btnClicked);

function likeOrNot() {
  thumbsUpBtn.addEventListener("click", btnClicked);
  if (thumbsUpBtn.classList.contains("clicked")) {
    console.log("it has clicked class");
  }

  // and remove attribute "clicked" in thumbsDownBtn
  // thumbsDownBtn.addEventListener("click", btnNotClicked);
  //vice versa
}

likeOrNot();
