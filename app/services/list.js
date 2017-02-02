/* John McCutchan ============================== */
console.log('List Services')
app.service('ListServices', function($q, $http) {
  return {
    getUser(){
      return firebase.auth().currentUser.uid
    }
  }
});


// return {
//     getBoard: (board) => {
//       return $http.get('https://pinterested-in-scott-pins.firebaseio.com/boards/.json')
//     },
// return $http
//           .get(`http://api.wunderground.com/api/69e0974e13868fe4/conditions/q/${zipcode}.json`)
//           .then((response) => ({ // same as `=> return {`
//               temp: response.data.current_observation.temp_f,
//               city: response.data.current_observation.display_location.full,
//             })
//           )
