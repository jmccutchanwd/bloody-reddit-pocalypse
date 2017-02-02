/* John McCutchan ============================== */
console.log('Config')
app.config(function ($routeProvider, $locationProvider){
$locationProvider.hashPrefix('');
  var config = {
    apiKey: "AIzaSyAnHguePY0AuuFSkNlQOetm8-eka9xlwEg",
    authDomain: "restpractice-8ab2e.firebaseapp.com",
    databaseURL: "https://restpractice-8ab2e.firebaseio.com",
    storageBucket: "restpractice-8ab2e.appspot.com",
    messagingSenderId: "986120756026"
  };
  //
  firebase.initializeApp(config);
  //
  const checkForAuth = {
    checkForAuth ($location) {
      // http://stackoverflow.com/questions/37370224/firebase-stop-listening-onauthstatechanged
      const authReady = firebase.auth().onAuthStateChanged(user => {
        authReady()
        if (!user) {
          $location.url('/')
        }
      })
    }
  }
  //
  $routeProvider
    .when('/', {
      controller: 'MainCtrl',
      templateUrl: 'partials/main.html'
    })
    .when('/login', {
      controller: 'LoginCtrl',
      templateUrl: 'partials/login.html'
    })
    .when('/post', {
      controller: 'PostCtrl',
      templateUrl: 'partials/post.html'
    })
    .otherwise({
      redirectTo: '/'
    })
})
