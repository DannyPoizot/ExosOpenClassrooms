let parent = document.getElementById("parent");

let child = document.getElementById("child");

let cptParent = 0;
let cptChild = 0;

document.getElementById("parent-count").innerHTML = cptParent;
document.getElementById("child-count").innerHTML = cptChild;

parent.addEventListener("click", function(e){
  cptParent++;
 document.getElementById("parent-count").innerHTML = cptParent;
});

child.addEventListener("click", function(e){
  cptChild++;
 document.getElementById("child-count").innerHTML = cptChild;
  event.stopPropagation();
  event.preventDefault();
});

child.addEventListener("mouseover", function(e){
  cptChild++;
 document.getElementById("child-count").innerHTML = cptChild;
});
