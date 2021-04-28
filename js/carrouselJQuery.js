$(document).ready(function(){

let $carrousel = $("#carrousel");
let $img = $("#carrousel img");
let index = $img.length - 1;
let i = 0;
let $currentImg = $img.eq(i);

$img.css("display", "none");
$currentImg.css("display", "block");


$(".fa-arrow-right").click(function(){
  i++;
  if(i <= index){
    $img.css("display", "none");
    $currentImg = $img.eq(i);
    $currentImg.css("display", "block");
  } else {
    i = index;
  }
});

$(".fa-arrow-left").click(function(){
  i--;
  if(i >= 0){
    $img.css("display", "none");
    $currentImg = $img.eq(i);
    $currentImg.css("display", "block");
  } else {
    i = 0;
  }
});

function slideImg(){
    setTimeout(function(){
      if(i < index){
	      i++;
      } else {
	       i = 0;
	}

	$img.css('display', 'none');

	$currentImg = $img.eq(i);
	$currentImg.css('display', 'block');

	slideImg();

  }, 5000);
}
slideImg();
});
