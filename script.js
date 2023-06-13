// Ajouter une classe au conteneur pour activer le responsive
function toggleResponsive() {
  var container = document.querySelector('.container');
  container.classList.toggle('responsive');
}

// Écouter le clic sur le bouton de la sidebar pour activer/désactiver le responsive
var toggleButton = document.querySelector('.sidebar h1');
toggleButton.addEventListener('click', toggleResponsive);

 
 


