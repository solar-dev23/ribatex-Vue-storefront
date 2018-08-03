if ('serviceWorker' in navigator) {
  // Registers Service worker generated by SW Toolbox (see build/webpack.client.config.js)
  navigator.serviceWorker.register('/service-worker.js', { scope: '/' }).then(() => {
    if (navigator.serviceWorker.controller) {
      console.log('The service worker is currently handling network operations.')
    } else {
      console.log('Failed to register.')
    }
  })
}
