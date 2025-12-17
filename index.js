document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const button = document.querySelector(".btn-login");
    const errorDisplay = document.getElementById("error-message");

    // On cache le message d'erreur à chaque nouvelle tentative
    errorDisplay.style.display = "none";

    if (username === "Baudin09" && password === "Aurel22@") {
        
        button.textContent = "Connexion...";
        button.disabled = true;

        setTimeout(() => {
            window.location.href = "inter.html";
        }, 1800);

    } else {
        // Au lieu de l'alerte, on affiche le texte dans la balise <p>
        errorDisplay.textContent = "Identifiants incorrects. Veuillez réessayer.";
        errorDisplay.style.display = "block";
        
        // Optionnel : On fait vibrer ou on vide le champ mot de passe
        document.getElementById("password").value = "";
    }
});
  







