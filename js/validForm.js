let champ = document.getElementById("code")

champ.addEventListener("input", function(e){

  let validCode = /^CODE-$/;

  let value = validCode.test(champ.value) ;

  let submit = document.getElementById("submit-btn");

  if(value){
    document.getElementById("code-validation").innerHTML = "Code valide";
    submit.disabled = false;
  }
  else {
    document.getElementById("code-validation").innerHTML = "Code invalide";
    submit.disabled = true;
  }
});
