angular.module('myApp')
.controller('searchCtrl', ['$scope', '$firebaseObject', '$firebaseArray', 'locationFactory', function($scope, $firebaseObject, $firebaseArray, locationFactory){
  var rootRef = firebase.database().ref();
  var nathanRef = rootRef.child('users').child('nathguen');
  this.user = $firebaseObject(nathanRef);
  this.geoStates = $firebaseArray(rootRef.child('geoStates'));
  this.geoCities = $firebaseArray(rootRef.child('geoCities'));

  $scope.future = {
    state: '',
    city: ''
  };

  $scope.compareCities = function(user, future){
    $scope.results = {
      future: {
        housing: {
          cost: 600 + (Math.random() * 2000),
        }
      }
    };

    $scope.results.compare = {
      housing: {
        diff: $scope.results.future.housing.cost - user.housingCost,
        percent: $scope.results.future.housing.cost / user.housingCost
      }
    };
  };
}]);
