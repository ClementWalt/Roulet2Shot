
function check(){
  var valeur=0;

  if (document.getElementById('t1').checked) {
    valeur = document.getElementById('t1').value;
    document.querySelector("#choix").style.display = "None";
  }
  if (document.getElementById('t2').checked) {
    valeur = document.getElementById('t2').value;
    document.querySelector("#choix").style.display = "None";
  }
  if (document.getElementById('t3').checked) {
    valeur = document.getElementById('t3').value;
    document.querySelector("#choix").style.display = "None";
  }
  if (document.getElementById('t4').checked) {
    valeur = document.getElementById('t4').value;
    document.querySelector("#choix").style.display = "None";
  }
  roue(valeur);


}
