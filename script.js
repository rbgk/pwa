if ('wakeLock' in navigator) {
  // supported
  document.getElementById("wakeLock").innerText = "wakeLock supported";
} else {
  // unsupported
  document.getElementById("wakeLock").innerText = "wakeLock unsupported";
}
