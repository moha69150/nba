// Sélection de l'élément du bouton de bascule du mot de passe
let togglePasswordButton = document.querySelector("#togglePassword");

// Sélection de l'élément du champ de mot de passe
let passwordField = document.querySelector("#passwordInput");

// Fonction de bascule du mot de passe
function togglePasswordVisibility() {
  // Vérifie le type du champ de mot de passe
  if (passwordField.type === "password") {
    // Si le mot de passe est masqué, le rendre visible
    passwordField.type = "text";
    togglePasswordButton.style.color = "red"; // Change la couleur de l'icône en rouge
    togglePasswordButton.classList.remove("fa-eye-slash");
    togglePasswordButton.classList.add("fa-eye");
  } else {
    // Si le mot de passe est visible, le rendre masqué
    passwordField.type = "password";
    togglePasswordButton.style.color = "#c7c7c7"; // Restaure la couleur de l'icône en gris
    togglePasswordButton.classList.remove("fa-eye");
    togglePasswordButton.classList.add("fa-eye-slash");
  }
}

// Sélection de l'élément du champ de mot de passe
let input = document.getElementById('passwordInput');
// Sélection de l'élément du conteneur du champ de mot de passe
let div = document.getElementById('passwordDiv');

// Gestionnaire d'événement pour l'événement "focus"
input.addEventListener('focus', function() {
  // Modification de la bordure de l'élément du conteneur lorsque le champ de mot de passe reçoit le focus
  div.style.border = '1px solid blue';
});

// Gestionnaire d'événement pour l'événement "blur"
input.addEventListener('blur', function() {
  // Rétablissement de la bordure de l'élément du conteneur lorsque le champ de mot de passe perd le focus
  div.style.border = '1px solid black';
});
