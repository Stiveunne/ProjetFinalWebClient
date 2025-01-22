
function showClient(clientNumber) {
  const clients = document.querySelectorAll('.avis');
  const buttons = document.querySelectorAll('.line'); 

  // enlève tout les textes
  clients.forEach(client => client.classList.remove('actif'));

  // Désactive boutons
  buttons.forEach(button => button.classList.remove('active'));

  // texte correspondant au client
  document.getElementById(`avis${clientNumber}`).classList.add('actif');

  // Active le bouton souhaité
  buttons[clientNumber - 1].classList.add('active'); 
}

function AfficheSearchBar(){
  var textInput = document.createElement("INPUT");
  textInput.id = "rechercheLoupe";
  textInput.name = "rechercheLoupe";
  textInput.type = "text";
  document.getElementById("SearchBar").innerHTML = `<input type="text" name="rechercheLoupe" id="rechercheLoupe" placeholder="Rechercher">`;
}