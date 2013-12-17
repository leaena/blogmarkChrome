$(document).ready(function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {
    var tabURL = arrayOfTabs[0].url;
    var html = '<form action="http://127.0.0.1:3000/websites" method="post"><input type="url" name="url" style="margin-left:20px;width: 200px;"value="'+ tabURL + '" required /><br/><input style="margin-left:20px;" class="btn btn-sm btn-primary" type="submit" value="Submit"></input></form>';
  $('.popup').append(html);
    });
});