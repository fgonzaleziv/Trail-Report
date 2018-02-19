//appkeys
var a = config.APP_KEY;
var s = config.SECRET_KEY;
//facebook sdk
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
      'limit': '2'
    },
    function(response) {
      //console.log(response);
      //need to add filter to ignore api response which has story (Shared post w image)
      var time = new Date(response.data[0].created_time);
      document.getElementById("latest-message").innerHTML = response.data[0].message;
      document.getElementById("time").innerHTML = time.toDateString() + ' ' + time.toLocaleTimeString();
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
