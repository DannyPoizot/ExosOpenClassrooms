$(document).ready(function(){

  let reset = $("#rafraichir");
  let $error = $("#erreur");
  let $champ = $(".champ");
  let $confirmation = $("#confirmation");
  let $mdp = $("#mdp");
  let $pseudo = $("#pseudo");
  let mail = $("#mail");
  let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  $error.css("display", "none");
  reset.on("click", function(){
    $champ.css("border-color", "#ccc", "color", "#555");
    $error.css("display", "none");
  });

  $champ.keyup(function() {
    if($(this).val().length < 5){
      $(this).css("border-color", "red");
    } else {
      $(this).css("border-color", "green");
    }
  });


  $confirmation.keyup(function(){
    if($(this).val() != $mdp.val()){
      $(this).css("border-color", "red");
    } else {
      $(this).css("border-color", "green");
    }
  });

  function verifier(champ) {
    if(champ.val() == ""){
      champ.after('<span class="error">Ce champ est requis</span>');
      $error.css("display", "block");
      champ.css("border-color", "red");
    }
  }

  $("#envoi").click(function(e){
    e.preventDefault();
    $(".error").remove();
    verifier($pseudo);
    verifier($mdp);
    verifier($confirmation);
    verifier(mail);
    if(regex.test(mail.val())==false && mail.val()!=""){
      mail.after('<span class="error">Entrez un mail valide</span>');
    }
  });

});
