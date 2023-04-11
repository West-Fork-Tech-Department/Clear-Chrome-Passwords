var callback = function () {
    console.log("Passwords Cleared!");
  };
  
// Check whether new version is installed
chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        var sincedate = 536457600000;
        chrome.browsingData.remove({
          "since": sincedate
        }, {
          "passwords": true
        }, callback);
    }
});




  
