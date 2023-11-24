const butInstall = document.getElementById("buttonInstall");

let deferredPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the default behavior to avoid showing the browser's install prompt
  event.preventDefault();

  // Store the event for later use
  deferredPrompt = event;

  // Update the UI to notify the user that the app can be installed
  butInstall.style.display = "block";
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  // Check if the deferredPrompt is available
  if (deferredPrompt) {
    // Show the installation prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const userChoice = await deferredPrompt.userChoice;

    // Reset deferredPrompt after the user has made a choice
    deferredPrompt = null;

    // Hide the install button regardless of the user's choice
    butInstall.style.display = "none";
  }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  // Perform actions after the app is successfully installed
  console.log("App installed successfully!");
});