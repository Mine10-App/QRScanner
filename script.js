// Sample users

// ===== LOGIN FUNCTION =====
function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  // Look up user in users.js
  const user = users.find(u => u.username === username && u.password === password);

  if(user){
    localStorage.setItem("currentUser", user.name);
    localStorage.setItem("currentRCNo", user.rcNo);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("errorMsg").innerText = "Invalid username or password!";
  }
}





