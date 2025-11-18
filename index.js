document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    // Simulation : identifiants "admin" / "1234"
    if (username === "greenberg9" && password === "Ottawa22@") {
      window.location.href = "inter.html";
    } else {
      alert("Identifiants incorrects.");
    }
  });

  
