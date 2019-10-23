var dropIdx;
var getIdx;
var dropLatitude;
var dropLongitude;

var getLatitude;
var getLongitude;

var nextBtn = document.querySelector(".hosts__nextBtn");

function setDrop(e) {
  dropIdx = e.getAttribute("idx");
  dropLatitude = e.getAttribute("latitude");
  dropLongitude = e.getAttribute("longitude");
  e.style.visibility = "hidden";
}

function setGet(e) {
  getIdx = e.getAttribute("idx");
  getLatitude = e.getAttribute("latitude");
  getLongitude = e.getAttribute("longitude");
  e.style.visibility = "hidden";
}

nextBtn.addEventListener("click", function(e) {
  console.log({ dropLatitude, dropLongitude });
  console.log({ getLatitude, getLongitude });
});
