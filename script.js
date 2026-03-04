if ('wakeLock' in navigator) {
  // supported
  document.getElementById("wakeLock").innerText = "wakeLock supported";
} else {
  // unsupported
  document.getElementById("wakeLock").innerText = "wakeLock unsupported";
}

// wakeLock requires User interaction. cannot call it upon initialize
document.addEventListener('pointerdown', (event) => {
  document.getElementById("status").innerText = "User tapped or clicked";
});
