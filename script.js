// Sample users
const users = [
  { email: "mohamed.sobah@macl.aero", password: "12345", name: "Mohamed Sobah", rcNo: "T-0160" },
  { email: "mariyam.shiara@macl.aero", password: "12345", name: "Mariyam Shiara", rcNo: "A-7503" },
  { email: "musrifa.riyaaz@macl.aero", password: "12345", name: "Musrifa Riyaaz", rcNo: "T-0112" },
  { email: "hussain.didi@macl.aero", password: "12345", name: "Hussain Ahmed", rcNo: "T-0115" },
  { email: "inaz.maushoog@macl.aero", password: "12345", name: "Mohamed Inaz", rcNo: "A-4206" },
  { email: "hamdulla.mohamed@macl.aero", password: "12345", name: "Hamdulla Mohamed", rcNo: "A-5209" },
  { email: "fiyaza.abdulla@macl.aero", password: "12345", name: "Fiyaza Abdulla", rcNo: "1081" },
  { email: "fazana.ali@macl.aero", password: "12345", name: "Fazana Ali", rcNo: "T-0154" },
  { email: "h.haneef@macl.aero", password: "12345", name: "Hassan Haneef", rcNo: "A-3464" },
  { email: "adam.fazeel@macl.aero", password: "12345", name: "Adam Fazeel", rcNo: "A-4210" },
  { email: "a.almas@macl.aero", password: "12345", name: "Aminath Almas", rcNo: "A-6313" },
  { email: "fathimath.maisam@macl.aero", password: "12345", name: "Fathimath Maisam", rcNo: "A-7068" },
  { email: "i.zihan@macl.aero", password: "12345", name: "Ibrahim Zihan", rcNo: "A-70217" },
  { email: "aishath.shafaq@macl.aero", password: "12345", name: "Aishath Shafaq", rcNo: "A-7751" },
  { email: "mohamed.mujahid@macl.aero", password: "12345", name: "Mohamed Mujahid", rcNo: "A-8009" },
  { email: "magrib.ibrahim@macl.aero", password: "12345", name: "Magrib Ibrahim", rcNo: "A-8038" },
  { email: "ruhushath.ahmed@macl.aero", password: "12345", name: "Ruhushath Ahmed", rcNo: "A-8089" },
  { email: "mohamed.jeezaan@macl.aero", password: "12345", name: "Mohamed Jeezaan", rcNo: "A-8156" },
  { email: "aishath.aroosha@macl.aero", password: "12345", name: "Aishath Aroosha", rcNo: "A-8544" },
  { email: "liushadha.saeed@macl.aero", password: "12345", name: "Liushadha Saeed", rcNo: "A-8551" },
  { email: "mariyam.zalma@macl.aero", password: "12345", name: "Mariyam Zalma", rcNo: "A-8553" },
  { email: "hussain.rameez@macl.aero", password: "12345", name: "Hussain Rameez", rcNo: "A-8610" },
  { email: "fathimath.shimmu@macl.aero", password: "12345", name: "Fathimath Shimmu", rcNo: "A-8917" },
  { email: "uoola@macl.aero", password: "12345", name: "Aminath Uoola", rcNo: "A-9623" },
  { email: "nasrulla.mohamed@macl.aero", password: "12345", name: "Nasrulla Mohamed", rcNo: "T-0033" },
  { email: "ibrahim.easa@macl.aero", password: "12345", name: "Ibrahim Easa", rcNo: "A-4202" },
  { email: "ibrahim.wisam@macl.aero", password: "12345", name: "Ibrahim Wisam", rcNo: "A-7465" },
  { email: "haulath.saeed@macl.aero", password: "12345", name: "Haulath Saeed", rcNo: "A-8538" },
  { email: "fazleena@macl.aero", password: "12345", name: "Fathmath Fazleena", rcNo: "A-9476" },
  { email: "nasma@macl.aero", password: "12345", name: "Nasma Ahmed", rcNo: "A-9480" },
  { email: "saffana@macl.aero", password: "12345", name: "Saffana Abdulla", rcNo: "A-9481" },
  { email: "abdulla.irufan@macl.aero", password: "12345", name: "Abdulla Irufan", rcNo: "979" },
  { email: "mohamed.i@macl.aero", password: "12345", name: "Mohamed Ibrahim", rcNo: "623" }
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

