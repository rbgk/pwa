if ('wakeLock' in navigator) {
  // supported
  document.getElementById("wakeLock").innerText = "wakeLock supported";
} else {
  // unsupported
  document.getElementById("wakeLock").innerText = "wakeLock unsupported";
}


// Request wake lock
async function requestWakeLock() {
  if ('wakeLock' in navigator) {
    try {
      // We don’t track release, just request it
      await navigator.wakeLock.request('screen');
      document.getElementById("status").innerText = ('Wake lock requested');
    } catch (err) {
      document.getElementById("status").innerText = (`Wake lock request failed: ${err.name}, ${err.message}`);
    }
  } else {
    document.getElementById("status").innerText = ('Wake Lock API not supported in this browser');
  }
}

// Detect first user interaction
document.addEventListener('pointerdown', async () => {
  await requestWakeLock();
}, { once: true });

// Re-request wake lock when the page becomes visible again
document.addEventListener('visibilitychange', async () => {
  if (document.visibilityState === 'visible') {
    await requestWakeLock();
  }
});
