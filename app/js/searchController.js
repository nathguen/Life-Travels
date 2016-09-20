angular.module('myApp')
.controller('searchCtrl', ['$scope', '$firebaseObject', function($scope, $firebaseObject){
  var rootRef = firebase.database().ref();
  var nathanRef = rootRef.child('users').child('nathguen');
  this.user = $firebaseObject(nathanRef);
}]);
