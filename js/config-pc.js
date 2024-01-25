document.addEventListener('DOMContentLoaded', (event) => {
   let url_config_json = 'https://api.jsonsilo.com/public/9cc38ad9-10a8-413f-ba95-679427ea4e27';

   // Afficher les composant de la petite config

   fetch(url_config_json)
     .then(response => response.json())
     .then(data => {
      let ids = ['petite-config-carte-graphique', 'petite-config-processeur', 'petite-config-carte-mere', 'petite-config-ram', 'petite-config-ssd', 'petite-config-alimentation', 'petite-config-boitier-pc', 'petite-config-refroidissement', 'petite-config-prix'];

      ids.forEach(id => {
        let element = document.getElementById(id);
        let textNodes = Array.from(element.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);

        // Supprime uniquement le texte "Chargement..."
        textNodes.forEach(textNode => {
          if (textNode.textContent.trim() === "Chargement...") {
            element.removeChild(textNode);
          }
        });

        // Ajoute le nouveau texte
        let textNode = document.createTextNode(data["petite-config"][id]);
        element.appendChild(textNode);
      });
     })
     .catch(error => console.error('Erreur:', error));

   // Afficher les composants de la moyenne config
 
   fetch(url_config_json)
     .then(response => response.json())
     .then(data => {
      let ids = ['moyenne-config-carte-graphique', 'moyenne-config-processeur', 'moyenne-config-carte-mere', 'moyenne-config-ram', 'moyenne-config-ssd', 'moyenne-config-alimentation', 'moyenne-config-boitier-pc', 'moyenne-config-refroidissement', 'moyenne-config-prix'];

      ids.forEach(id => {
        let element = document.getElementById(id);
        let textNodes = Array.from(element.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);

        // Supprime uniquement le texte "Chargement..."
        textNodes.forEach(textNode => {
          if (textNode.textContent.trim() === "Chargement...") {
            element.removeChild(textNode);
          }
        });

        // Ajoute le nouveau texte
        let textNode = document.createTextNode(data["moyenne-config"][id]);
        element.appendChild(textNode);
      });
     })
     .catch(error => console.error('Erreur:', error));

   // Afficher les composants de la grande config
 
   fetch(url_config_json)
     .then(response => response.json())
     .then(data => {
      let ids = ['grande-config-carte-graphique', 'grande-config-processeur', 'grande-config-carte-mere', 'grande-config-ram', 'grande-config-ssd', 'grande-config-alimentation', 'grande-config-boitier-pc', 'grande-config-refroidissement', 'grande-config-prix'];

      ids.forEach(id => {
        let element = document.getElementById(id);
        let textNodes = Array.from(element.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);

        // Supprime uniquement le texte "Chargement..."
        textNodes.forEach(textNode => {
          if (textNode.textContent.trim() === "Chargement...") {
            element.removeChild(textNode);
          }
        });

        // Ajoute le nouveau texte
        let textNode = document.createTextNode(data["grande-config"][id]);
        element.appendChild(textNode);
      });
     })
     .catch(error => console.error('Erreur:', error));
 });
 