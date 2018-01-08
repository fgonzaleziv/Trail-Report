//appkeys
var a = config.APP_KEY;
var s = config.SECRET_KEY;
//facebooksdk
window.fbAsyncInit = function() {
  FB.init({
    appId: '129933994469246',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v2.11'
  });
  FB.api(
    '/779590278790557/posts', {
      access_token: a + '|' + s,
      'limit': '1'
    },
    function(response) {
      var time = response.data[0].created_time;
      var date = time.split('T')[0];
      time = time.split('T')[1].substring(0,8);
      document.getElementById("latest-message").innerHTML = response.data[0].message;
      document.getElementById("time").innerHTML = time;
    });
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
