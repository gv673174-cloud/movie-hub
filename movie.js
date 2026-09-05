// category
function filterMovies(category) {

const movies = document.querySelectorAll(".moviecontainer");
const searchInput = document.getElementById("search");

movies.forEach(moviecontainer => {

if(category === "all"){
moviecontainer.style.display = "";
}
else if(moviecontainer.getAttribute("data-category") === category){
moviecontainer.style.display = "";
}
else{
moviecontainer.style.display = "none";
}
});
}

// search
function searchItem() {

  const input = document.getElementById("searchInput").value.toLowerCase();
  const items = document.querySelectorAll(".moviecontainer");

  items.forEach(item => {

    const text = item.textContent.toLowerCase();
    // console.log(text);

    if(text.includes(input)){
      item.style.display = " ";
    }else{
      item.style.display = "none";
    }

  });

}

// sliders
let slides = document.querySelectorAll(".slide");
let index = 0;
// console.log(slides[i]);
function showSlide(i){
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
  // console.log(slides[i]);
}


function nextSlide(){
  index++;
  if(index >= slides.length){
    index = 0;
  }
  showSlide(index);
  // showSlide(0);
}

function prevSlide(){
  index--;
  if(index < 0){
    index = slides.length - 1;
  }
  showSlide(index);
}

showSlide(index);
