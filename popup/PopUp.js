browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    var url = activeTab.url;
    document.getElementById('currentUrl').textContent = 'URL : '+url;
  });
  