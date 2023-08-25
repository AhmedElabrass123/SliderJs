//Get slider items(images)
const sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);
//Get number of slider items
const slidesCount = sliderImages.length;
//current first item(image)
var currentSlide = 1;
//Slide number string element
const slideNumber = document.getElementById("slide-number");
//previous and next buttons
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
//Handle click on previous and next buttons

prevButton.addEventListener("click", () => {
  prevSlide();
});
nextButton.addEventListener("click", () => {
  nextSlide();
});

//Create main UL Element
var ULelement = document.createElement("ul");
ULelement.setAttribute("id", "pagination-ul");
//append li element based on item count
for (let i = 1; i <= sliderImages.length; i++) {
  //create li element
  var LIelement = document.createElement("li");
  //Set Custom Attribute
  LIelement.setAttribute("dataIndex", i);
  //set item content
  LIelement.appendChild(document.createTextNode(i));
  //append items to parent
  ULelement.appendChild(LIelement);
}
//add ULelement in page
var indicator = document.getElementById("pagenation");
indicator.appendChild(ULelement);

//Create the new created ul
var ULCreateEle = document.getElementById("pagination-ul");
//Get Pagination items(images)
const sliderPagination = Array.from(
  document.querySelectorAll("#pagination-ul li")
);
sliderPagination.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    currentSlide = parseInt(ele.getAttribute("dataindex"));
    Checker();
  });
});
// Trigger the checker function
Checker();

//function next slide
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    Checker();
  }
}

//function prev slide
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    Checker();
  }
}

//create the checker function
function Checker() {
  // set the slide number
  slideNumber.innerHTML = "Slide #" + currentSlide + " of " + slidesCount;

  //remove all active class from images
  removeAllActive();
  //set class active on current slide
  sliderImages[currentSlide - 1].classList.add("active");
  //set class active on current pagination item
  ULCreateEle.children[currentSlide - 1].classList.add("active");

  //check if the current slide is the first slide===========
  if (currentSlide === 1) {
    // add disabled class on previous button
    prevButton.classList.add("disabled");
  } else {
    // add disabled class on previous button
    prevButton.classList.remove("disabled");
  }
  //check if the current slide is the first slide==============
  if (currentSlide === slidesCount) {
    // add disabled class on previous button
    nextButton.classList.add("disabled");
  } else {
    // add disabled class on previous button
    nextButton.classList.remove("disabled");
  }
}

//remove active class from all images and pagination element
function removeAllActive() {
  sliderImages.forEach((img) => {
    img.classList.remove("active");
  });
  sliderPagination.forEach((bullet) => {
    bullet.classList.remove("active");
  });
}
