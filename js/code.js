var y= document.getElementById("top-nav");
function responsive(){
	if(y.className==="nav-links"){
		y.className+="open" ;
	}else{y.className="nav-links";}}
/*
=====================================================================================
=====================================================================================
*/
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/*
=====================================================================================
=====================================================================================
*/
var imgSrc=[
	"images/selection/1.jpg",
	"images/selection/2.jpg",
	"images/selection/3.jpg",
	"images/selection/4.jpg",
	"images/selection/5.jpg",
	"images/selection/6.jpg"
];
var img=document.getElementsByClassName("img");
for(var x=0;x<imgSrc.length;x++){
for(var i=0;i <img.length;i++){
	if(x==i){
	img[i].style.backgroundImage="url("+imgSrc[x]+")";}
}
}

/*
=====================================================================================
=====================================================================================
*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}	
			
			

