// Sélectionnez tous les liens dans le menu
var menuLinks = document.querySelectorAll('.wrapper ul li a');

// Ajoutez un écouteur d'événements à chaque lien
for (var i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', function() {
    // Décochez la case lorsque vous cliquez sur un lien
    document.getElementById('active').checked = false;
  });
}
