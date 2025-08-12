// Crear compte
var registerForm = document.getElementById("register-form");
if (registerForm) {
  registerForm.addEventListener("submit", function(e) {
    e.preventDefault();
    var email = document.getElementById("register-email").value;
    var password = document.getElementById("register-password").value;

    auth.createUserWithEmailAndPassword(email, password)
      .then(function(userCredential) {
        alert("Compte creat!");
        window.location.href = "intro.html"; // Primer cop, mostrar vídeo
      })
      .catch(function(error) {
        alert(error.message);
      });
  });
}

// Iniciar sessió
var loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;

    auth.signInWithEmailAndPassword(email, password)
      .then(function(userCredential) {
        window.location.href = "map.html"; // Anar directament al mapa
      })
      .catch(function(error) {
        alert(error.message);
      });
  });
}
