// Sample users
const users = [
  { email: "mujahid@example.com", password: "12345", name: "Mohamed Mujahid", rcNo: "A-8009" },
  { email: "magri@example.com", password: "12345", name: "Magrib Ibrahim", rcNo: "A-8038" },
  { email: "ruhush@example.com", password: "12345", name: "Ruhushath Ahmed", rcNo: "A-8089" },
  { email: "moahmed@example.com", password: "12345", name: "Moahmed Jeezan", rcNo: "A-8156" },
  { email: "aisha@example.com", password: "12345", name: "Aishath Aroosha", rcNo: "A-8544" }
];

function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const user = users.find(u => u.email === email && u.password === password);

  if(user){
    localStorage.setItem("currentUser", user.name);
    localStorage.setItem("currentRCNo", user.rcNo);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("errorMsg").innerText = "Invalid email or password!";
  }
}

function logout(){
  localStorage.removeItem("currentUser");
  localStorage.removeItem("currentRCNo");
  window.location.href = "login.html";
}

function DC(){
  
  window.location.href = "DutyChange.html";
}
