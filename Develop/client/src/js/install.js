const butInstall = document.getElementById('buttonInstall');
// var deferredPrompt ;
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
   window.deferredPrompt = event;
    butInstall.style.visibility = 'visible';
   
  
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
   const event = window.deferredPrompt;
   if(!event){
    return;
   }
   event.prompt();
   window.deferredPrompt = null;
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Installed!';
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
   window.deferredPrompt = null;
  console.log('👍', 'appinstalled', event);
});
