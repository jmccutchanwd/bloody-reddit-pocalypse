/* John McCutchan ============================== */
console.log('Login Services')
app.service('LoginServices', function($q, $http) {
  return {
    login: function(email, pass){
      // converts native ES6 promise to angular promise so no $scope.$apply needed
      return $q.resolve(firebase.auth().signInWithEmailAndPassword(email, pass))
    },
    getUserId: function(){
      return firebase.auth().currentUser
        .then (function(response){
          return response.data
          .then(console.log("getUserId: ", response.data))
      })
    },
    logout: function(){
      return firebase.auth().signOut()
    },
    create: function(email, pass){
      return $q.resolve(firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then(console.log))
    },
    register: function(obj){
      return $http
        .post('https://restpractice-8ab2e.firebaseio.com/.json', obj)
        .then(console.log("Sent to Firebase: ",obj))
    }
  }//return
});//service
