var plusBtn = document.querySelector(".plusImg");
var minusBtn = document.querySelector(".minusImg");
var bgCount = document.querySelector(".pending__contents__sub--bagCount");

plusBtn.addEventListener("click", function() {
  bgCount.value = (Number.parseInt(bgCount.value) + 1).toString();
});

minusBtn.addEventListener("click", function() {
  let temp = Number.parseInt(bgCount.value);

  if (temp - 1 < 0) {
    alert("갯수가 잘못 되었습니다.");
  } else {
    bgCount.value = (temp - 1).toString();
  }
});
