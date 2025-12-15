function login() {
  if (username.value === "admin" && password.value === "1234") {
    login.classList.add("hidden");
    dashboard.classList.remove("hidden");
  } else {
    error.innerText = "Username atau password salah";
  }
}

function logout() {
  dashboard.classList.add("hidden");
  login.classList.remove("hidden");
}

// SEARCH
function searchProduct() {
  let input = search.value.toLowerCase();
  document.querySelectorAll(".card").forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(input) ? "block" : "none";
  });
}

// FILTER
function filterCategory() {
  let cat = category.value;
  document.querySelectorAll(".card").forEach(card => {
    card.style.display = (cat === "all" || card.classList.contains(cat)) ? "block" : "none";
  });
}

// AI + GRAFIK
function runAI() {
  let text = inputAI.value.toLowerCase();
  let value = 0;

  if (text.includes("makanan")) {
    resultAI.innerText = "AI menyarankan TikTok & Instagram";
    value = 80;
  } else if (text.includes("fashion")) {
    resultAI.innerText = "AI menyarankan influencer marketing";
    value = 70;
  } else {
    resultAI.innerText = "AI menyarankan iklan digital";
    value = 60;
  }

  drawChart(value);
}

function drawChart(value) {
  let ctx = chart.getContext("2d");
  ctx.clearRect(0,0,400,200);
  ctx.fillStyle = "#2563eb";
  ctx.fillRect(50,200-value,100,value);
  ctx.fillText("Efektivitas",50,195);
}
