browser.browserAction.onClicked.addListener(function(tab) {
    browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      var url = activeTab.url;
      browser.browserAction.setBadgeText({text: url});
    });
  });
  