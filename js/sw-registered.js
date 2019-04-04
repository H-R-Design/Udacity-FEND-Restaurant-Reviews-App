if (navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js').then(function(reg) {
      console.log("Service Worker Registered");
    }).catch((event) =>{
      console.log("Service Worker Did Not Register", event);
    });
}