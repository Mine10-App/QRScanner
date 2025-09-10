// Get current user
const currentUser = localStorage.getItem("currentUser");
if(!currentUser){
  alert("Please login first!");
  window.location.href = "index.html";
} else {
  document.getElementById("userName").innerText = currentUser;
}

// Navigation functions
function goToDutyChange(){ window.location.href="dutychange.html"; }
function logout(){ localStorage.clear(); window.location.href="index.html"; }

// Load requests from Firestore
function loadRequests(){
  const incomingContainer = document.getElementById("incomingRequests");
  const sentContainer = document.getElementById("sentRequests");

  db.collection("dutyRequests").orderBy("timestamp","desc").onSnapshot(snapshot=>{
    let incomingHTML = "";
    let sentHTML = "";

    snapshot.forEach(doc=>{
      const req = doc.data();
      const id = doc.id;

      // Incoming requests
      if(req.recipient === currentUser){
        incomingHTML += `
          <div class="request-card">
            <div>
              <p><strong>From:</strong> ${req.requestedStaff}</p>
              <p><strong>Date:</strong> ${req.date}</p>
              <p><strong>Duty Time:</strong> ${req.dutyTime}</p>
              <p><strong>Status:</strong> ${req.status}</p>
            </div>
            <div>
              ${req.status==="pending" ? `<button class="button-small accept-btn" onclick="acceptRequest('${id}')">Accept</button>
              <button class="button-small reject-btn" onclick="rejectRequest('${id}')">Reject</button>` : ""}
              <button class="button-small cancel-btn" onclick="cancelRequest('${id}')">Cancel</button>
            </div>
          </div>`;
      }

      // Sent requests
      if(req.requestedStaff === currentUser){
        sentHTML += `
          <div class="request-card">
            <div>
              <p><strong>To:</strong> ${req.recipient}</p>
              <p><strong>Date:</strong> ${req.date}</p>
              <p><strong>Duty Time:</strong> ${req.dutyTime}</p>
              <p><strong>Status:</strong> ${req.status}</p>
            </div>
            <div>
              <button class="button-small cancel-btn" onclick="cancelRequest('${id}')">Cancel</button>
            </div>
          </div>`;
      }
    });

    incomingContainer.innerHTML = incomingHTML || "<p>No incoming requests.</p>";
    sentContainer.innerHTML = sentHTML || "<p>No sent requests.</p>";
  });
}

// Request actions
function acceptRequest(id){ db.collection("dutyRequests").doc(id).update({status:"accepted"}); }
function rejectRequest(id){ db.collection("dutyRequests").doc(id).update({status:"rejected"}); }
function cancelRequest(id){ db.collection("dutyRequests").doc(id).delete(); }

// Initial load
loadRequests();
