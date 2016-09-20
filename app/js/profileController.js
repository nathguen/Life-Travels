angular.module('myApp')
.controller('profileCtrl', ['$scope', '$firebaseObject', '$firebaseArray', 'growl', function($scope, $firebaseObject, $firebaseArray, growl){

  var rootRef = firebase.database().ref();
  var nathanRef = rootRef.child('users').child('nathguen');
  var usersRef = rootRef.child('users');

  this.user = $firebaseObject(nathanRef);
  this.users = $firebaseArray(usersRef);
  this.houseStyles = $firebaseArray(rootRef.child('houseStyles'));
  this.cityStyles = $firebaseArray(rootRef.child('cityStyles'));
  this.geoStates = $firebaseArray(rootRef.child('geoStates'));


  $scope.saveProfile = function(user){
    // clean inputs
    if(user.age == undefined) user.age = null;
    if(user.city == undefined || user.city == null) user.city = '';
    if(user.email == undefined || user.email == null) user.email = '';
    if(user.cityStylePref == undefined || user.cityStylePref == null) user.cityStylePref = '';
    if(user.housePref == undefined || user.housePref == null) user.housePref = '';
    if(user.name == undefined || user.name == null) user.name = '';
    if(user.salary == undefined) user.salary = '';
    if(user.state == undefined || user.state == null) user.state = '';
    if(user.state_abbrev == undefined || user.state_abbrev == null) user.state_abbrev = '';


    firebase.database().ref('users/' + user.$id).set({
      age: user.age,
      city: user.city,
      cityStylePref: user.cityStylePref,
      email: user.email,
      housePref: user.housePref,
      name: user.name,
      salary: user.salary,
      state: user.state,
      state_abbrev: user.state_abbrev
    });

    growl.success("Profile updated.");
  };
}]);
