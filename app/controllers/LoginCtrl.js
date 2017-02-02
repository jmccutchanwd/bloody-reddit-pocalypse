/* John McCutchan ============================== */
console.log('LoginCtrl')
app.controller('LoginCtrl', function ($scope, LoginServices, ListServices,$location) {
  //$scope.model = ListServices
  const userId = firebase.auth().currentUser
  console.log('Current user', userId)
    let obj = {
        firstName: $scope.firstName,
        lastName: $scope.lastName,
        email: $scope.email,
        //uid: firebase.auth().currentUser.uid
    }
    console.log('User Object (#1)',obj)
  $scope.login = () => LoginServices
    .login($scope.email, $scope.password)
    .then (console.log("Signed In"))
    .then(() => $location.url('/'))
  $scope.logout = () => LoginServices
    .logout()
    .then(console.log("Logged Out"))
  $scope.create = () => LoginServices
    .create($scope.email, $scope.password)
    .then(() => $location.url('/'))
    .then(console.log("Signed In"))
    .then($scope.register())
  $scope.getUserId = () =>  LoginServices
    .getUserId()
    .then(function(data){
      $scope.UID = data;
    })
    console.log("Get User: ", $scope.UID)
  $scope.register = (obj) => LoginServices
    .register($scope.obj)
    .then(console.log("Passed to register: ",$scope.obj))
});
