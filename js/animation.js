window.onload = function() {
   var links = document.querySelectorAll('a');
   links.forEach(function(link) {
      link.addEventListener('click', function(event) {
         var id = this.getAttribute('href').slice(1); // Enlève le '#' du href
         var element = document.getElementById(id);
         if (element) {
            setTimeout(function() {
               element.classList.add('highlight');
               setTimeout(function() {
                  element.classList.remove('highlight');
               }, 2000); // Changez cette valeur pour ajuster la durée de la surbrillance
            }, 500); // Changez cette valeur pour ajuster le délai avant la surbrillance
         }
      });
   });
};