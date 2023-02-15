const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
   window.deferredPrompt = event;
    butInstall.style.visibility = 'visible';
   
  
});

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


window.addEventListener('appinstalled', (event) => {
   window.deferredPrompt = null;
  console.log('👍', 'appinstalled', event);
});
