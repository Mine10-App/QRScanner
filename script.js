// Sample users
const users = [
  { username: "Sobah", password: "12345", name: "Mohamed Sobah", rcNo: "T-0160" },
  { username: "Shiara", password: "12345", name: "Mariyam Shiara", rcNo: "A-7503" },
  { username: "musrifa", password: "12345", name: "Musrifa Riyaaz", rcNo: "T-0112" },
  { username: "hussain", password: "12345", name: "Hussain Ahmed", rcNo: "T-0115" },
  { username: "inaz", password: "12345", name: "Mohamed Inaz", rcNo: "A-4206" },
  { username: "hamdulla", password: "12345", name: "Hamdulla Mohamed", rcNo: "A-5209" },
  { username: "fiyaza", password: "12345", name: "Fiyaza Abdulla", rcNo: "1081" },
  { username: "fazana", password: "12345", name: "Fazana Ali", rcNo: "T-0154" },
  { username: "haneef", password: "12345", name: "Hassan Haneef", rcNo: "A-3464" },
  { username: "fazeel", password: "12345", name: "Adam Fazeel", rcNo: "A-4210" },
  { username: "almas", password: "12345", name: "Aminath Almas", rcNo: "A-6313" },
  { username: "maisam", password: "12345", name: "Fathimath Maisam", rcNo: "A-7068" },
  { username: "zihan", password: "12345", name: "Ibrahim Zihan", rcNo: "A-70217" },
  { username: "shafaq", password: "12345", name: "Aishath Shafaq", rcNo: "A-7751" },
  { username: "mujahid", password: "12345", name: "Mohamed Mujahid", rcNo: "A-8009" },
  { username: "magrib", password: "12345", name: "Magrib Ibrahim", rcNo: "A-8038" },
  { username: "ruhushath", password: "12345", name: "Ruhushath Ahmed", rcNo: "A-8089" },
  { username: "jeezaan", password: "12345", name: "Mohamed Jeezaan", rcNo: "A-8156" },
  { username: "aroosha", password: "12345", name: "Aishath Aroosha", rcNo: "A-8544" },
  { username: "liushadha", password: "12345", name: "Liushadha Saeed", rcNo: "A-8551" },
  { username: "zalma", password: "12345", name: "Mariyam Zalma", rcNo: "A-8553" },
  { username: "rameez", password: "12345", name: "Hussain Rameez", rcNo: "A-8610" },
  { username: "shimmu", password: "12345", name: "Fathimath Shimmu", rcNo: "A-8917" },
  { username: "uoola", password: "12345", name: "Aminath Uoola", rcNo: "A-9623" },
  { username: "nasrulla", password: "12345", name: "Nasrulla Mohamed", rcNo: "T-0033" },
  { username: "ibrahim", password: "12345", name: "Ibrahim Easa", rcNo: "A-4202" },
  { username: "wisam", password: "12345", name: "Ibrahim Wisam", rcNo: "A-7465" },
  { username: "haulath", password: "12345", name: "Haulath Saeed", rcNo: "A-8538" },
  { username: "fazleena", password: "12345", name: "Fathmath Fazleena", rcNo: "A-9476" },
  { username: "nasma", password: "12345", name: "Nasma Ahmed", rcNo: "A-9480" },
  { username: "saffana", password: "12345", name: "Saffana Abdulla", rcNo: "A-9481" },
  { username: "irufan", password: "12345", name: "Abdulla Irufan", rcNo: "979" },
  { username: "mohamed", password: "12345", name: "Mohamed Ibrahim", rcNo: "623" }
];

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMsg");

  db.collection("users")
    .where("username", "==", username)
    .where("password", "==", password)
    .get()
    .then(snapshot => {
      if (snapshot.empty) {
        errorMsg.innerText = "Invalid username or password!";
      } else {
        const userData = snapshot.docs[0].data();
        localStorage.setItem("currentUser", userData.name);
        localStorage.setItem("currentRCNo", userData.rcNo);
        window.location.href = "dashboard.html";
      }
    })
    .catch(err => {
      console.error(err);
      errorMsg.innerText = "Error connecting to server!";
    });
}

