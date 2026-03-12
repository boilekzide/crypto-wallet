// Words list
const wordList = [
  "alpha","brave","canvas","delta","eagle","frost","giant","harbor","icon",
  "jungle","karma","lemon","mirror","navy","oasis","pistol","quantum",
  "rival","spirit","tunnel","unity","vortex","whisper","zebra"
];

// SIGNUP VALIDATION
const form = document.getElementById("signupForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let p1 = document.getElementById("password").value;
    let p2 = document.getElementById("confirmPassword").value;

    if (p1 !== p2) {
      alert("Passwords do not match!");
      return;
    }

    window.location.href = "recovery.html";
  });
}

// RECOVERY PAGE LOGIC
function generateSeedPhrase() {
  let phrase = [];
  for (let i = 0; i < 12; i++) {
    let random = Math.floor(Math.random() * wordList.length);
    phrase.push(wordList[random]);
  }
  return phrase;
}

// If we are on recovery page:
if (document.getElementById("seedTextarea")) {
  const seed = generateSeedPhrase();

  // Fill textarea
  document.getElementById("seedTextarea").value = seed.join(" ");

  // Fill grid
  const grid = document.getElementById("seedGrid");
  seed.forEach((word, index) => {
    let box = document.createElement("div");
    box.className = "seed-box";
    box.textContent = `${index + 1}. ${word}`;
    grid.appendChild(box);
  });

  // Copy button
  document.getElementById("copyBtn").onclick = () => {
    navigator.clipboard.writeText(seed.join(" "));
    alert("Recovery phrase copied!");
  };
}