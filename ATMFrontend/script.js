// Fake balance (stored in browser memory)
let balance = 1000;
const correctPIN = "1234";

// Login
function login() {
  let pin = document.getElementById("pinInput").value;
  if (pin === correctPIN) {
    alert("Login successful ✅");
    document.getElementById("menu").style.display = "block";
  } else {
    alert("Incorrect PIN ❌");
  }
}

// Withdraw
function withdraw() {
  let amount = parseFloat(document.getElementById("withdrawAmount").value);
  let msg = document.getElementById("withdrawMsg");
  if (amount > 0 && amount <= balance) {
    balance -= amount;
    msg.innerText = `✅ Withdrawn: ₹${amount}. New Balance: ₹${balance}`;
  } else {
    msg.innerText = "❌ Insufficient Balance or Invalid Amount";
  }
}

// Deposit
function deposit() {
  let amount = parseFloat(document.getElementById("depositAmount").value);
  let msg = document.getElementById("depositMsg");
  if (amount > 0) {
    balance += amount;
    msg.innerText = `✅ Deposited: ₹${amount}. New Balance: ₹${balance}`;
  } else {
    msg.innerText = "❌ Enter a valid amount";
  }
}

// Show Balance
function showBalance() {
  document.getElementById("balanceAmount").innerText = `💰 Current Balance: ₹${balance}`;
}
