chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create('index.html', {
      id:"mainWin",
      frame: "none",
      innerBounds: {width: 1024, height: 800}
  }, function(win) {
    win.contentWindow.launchData = launchData;
  });
});
