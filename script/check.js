
function check(){
  var valeur=0;
  if (document.getElementById('t1').checked) {
    valeur = document.getElementById('t1').value;
  }
  if (document.getElementById('t2').checked) {
    valeur = document.getElementById('t2').value;
  }
  if (document.getElementById('t3').checked) {
    valeur = document.getElementById('t3').value;
  }
  if (document.getElementById('t4').checked) {
    valeur = document.getElementById('t4').value;
  }

  console.log(valeur);

  return valeur;
}
