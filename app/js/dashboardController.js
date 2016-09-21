angular.module('myApp')
.controller('dashboardCtrl', ['$scope', '$firebaseObject', '$firebaseArray', '$timeout', function($scope, $firebaseObject, $firebaseArray, $timeout){
  var rootRef = firebase.database().ref();
  var nathanRef = rootRef.child('users').child('nathguen');
  this.user = $firebaseObject(nathanRef);

  $scope.orderBy = {
    highIncome: true
  };
  // $scope.changeFeedOrder = function(){
  //   var newFeed = [];
  //   $scope.sampleLocations.forEach(function(location){
  //     newFeed.push(location);
  //   });
  //   if($scope.orderBy.highIncome) {
  //     // sort to show high income
  //     var highSalary = newFeed[0].compare.salary.diff;
  //     for(var i = 0; i < newFeed.length; i++) {
  //       if(newFeed[i].compare.salary.diff > highSalary) {
  //         highSalary = newFeed[i].compare.salary.diff;
  //         var feedItem = newFeed.splice(i, 1);
  //         newFeed.unshift(feedItem[0]);
  //         i = 0;
  //       }
  //     }
  //   } else {
  //     // sort to show low income
  //     var lowSalary = newFeed[0].compare.salary.diff;
  //     for(var i = 0; i < newFeed.length; i++) {
  //       if(newFeed[i].compare.salary.diff < lowSalary) {
  //         lowSalary = newFeed[i].compare.salary.diff;
  //         var feedItem = newFeed.splice(i, 1);
  //         newFeed.unshift(feedItem[0]);
  //         i = 0;
  //       }
  //     }
  //   }
  //
  //   $scope.sampleLocations = [];
  //   $scope.sampleLocations = newFeed;
  //   // $timeout;
  //   // newFeed.forEach(function(location){
  //   //   location;
  //   //   $timeout(function(){
  //   //     $scope.sampleLocations.push(location);
  //   //   });
  //   // });
  // };

  $scope.sampleLocations = [
    {
      "city": "Augusta",
      "state": "Maine",
      "longitude": 69.78
    },
    {
      "city": "Boston",
      "state": "Massachusetts",
      "longitude": 71.07
    },
    {
      "city": "Providence",
      "state": "Rhode Island",
      "longitude": 71.42
    },
    {
      "city": "Concord",
      "state": "New Hampshire",
      "longitude": 71.53
    },
    {
      "city": "Montpelier",
      "state": "Vermont",
      "longitude": 72.58
    },
    {
      "city": "Hartford",
      "state": "Connecticut",
      "longitude": 72.68
    },
    {
      "city": "Albany",
      "state": "New York",
      "longitude": 73.75
    },
    {
      "city": "Trenton",
      "state": "New Jersey",
      "longitude": 74.77
    },
    {
      "city": "Dover",
      "state": "Delaware",
      "longitude": 75.52
    },
    {
      "city": "Annapolis",
      "state": "Maryland",
      "longitude": 76.48
    },
    {
      "city": "Harrisburg",
      "state": "Pennsylvania",
      "longitude": 76.88
    },
    {
      "city": "Richmond",
      "state": "Virginia",
      "longitude": 77.43
    },
    {
      "city": "Raleigh",
      "state": "North Carolina",
      "longitude": 78.63
    },
    {
      "city": "Columbia",
      "state": "South Carolina",
      "longitude": 81.03
    },
    {
      "city": "Charleston",
      "state": "West Virginia",
      "longitude": 81.62
    },
    {
      "city": "Columbus",
      "state": "Ohio",
      "longitude": 83.0
    },
    {
      "city": "Tallahassee",
      "state": "Florida",
      "longitude": 84.28
    },
    {
      "city": "Atlanta",
      "state": "Georgia",
      "longitude": 84.38
    },
    {
      "city": "Lansing",
      "state": "Michigan",
      "longitude": 84.55
    },
    {
      "city": "Frankfort",
      "state": "Kentucky",
      "longitude": 84.88
    },
    {
      "city": "Indianapolis",
      "state": "Indiana",
      "longitude": 86.17
    },
    {
      "city": "Montgomery",
      "state": "Alabama",
      "longitude": 86.3
    },
    {
      "city": "Nashville",
      "state": "Tennessee",
      "longitude": 86.78
    },
    {
      "city": "Madison",
      "state": "Wisconsin",
      "longitude": 89.38
    },
    {
      "city": "Springfield",
      "state": "Illinois",
      "longitude": 89.65
    },
    {
      "city": "Jackson",
      "state": "Mississippi",
      "longitude": 90.18
    },
    {
      "city": "Baton Rouge",
      "state": "Louisiana",
      "longitude": 91.18
    },
    {
      "city": "Jefferson City",
      "state": "Missouri",
      "longitude": 92.17
    },
    {
      "city": "Little Rock",
      "state": "Arkansas",
      "longitude": 92.28
    },
    {
      "city": "Saint Paul",
      "state": "Minnesota",
      "longitude": 93.1
    },
    {
      "city": "Des Moines",
      "state": "Iowa",
      "longitude": 93.6
    },
    {
      "city": "Topeka",
      "state": "Kansas",
      "longitude": 95.68
    },
    {
      "city": "Lincoln",
      "state": "Nebraska",
      "longitude": 96.7
    },
    {
      "city": "Oklahoma City",
      "state": "Oklahoma",
      "longitude": 97.5
    },
    {
      "city": "Austin",
      "state": "Texas",
      "longitude": 97.73
    },
    {
      "city": "Pierre",
      "state": "South Dakota",
      "longitude": 100.35
    },
    {
      "city": "Bismarck",
      "state": "North Dakota",
      "longitude": 100.78
    },
    {
      "city": "Cheyenne",
      "state": "Wyoming",
      "longitude": 104.82
    },
    {
      "city": "Denver",
      "state": "Colorado",
      "longitude": 104.98
    },
    {
      "city": "Santa Fe",
      "state": "New Mexico",
      "longitude": 105.93
    },
    {
      "city": "Salt Lake City",
      "state": "Utah",
      "longitude": 111.88
    },
    {
      "city": "Helena",
      "state": "Montana",
      "longitude": 112.02
    },
    {
      "city": "Phoenix",
      "state": "Arizona",
      "longitude": 112.1
    },
    {
      "city": "Boise",
      "state": "Idaho",
      "longitude": 116.2
    },
    {
      "city": "Carson City",
      "state": "Nevada",
      "longitude": 119.77
    },
    {
      "city": "Sacramento",
      "state": "California",
      "longitude": 121.5
    },
    {
      "city": "Olympia",
      "state": "Washington",
      "longitude": 122.9
    },
    {
      "city": "Salem",
      "state": "Oregon",
      "longitude": 123.03
    },
    {
      "city": "Juneau",
      "state": "Alaska",
      "longitude": 134.42
    },
    {
      "city": "Honolulu",
      "state": "Hawaii",
      "longitude": 157.85
    }
  ];

  for(var i = 0; i < $scope.sampleLocations.length; i++) {

    // sample data
    // ultimately this should come from a database
    if(this.user.salary == undefined || this.user.salary == null) this.user.salary = 80000;
    if(this.user.housingCost == undefined || this.user.housingCost == null) this.user.housingCost = 850;
    if(this.user.foodCost == undefined || this.user.foodCost == null) this.user.foodCost = 400;
    $scope.sampleLocations[i].costs = {
      housing: 600 + (2000 * Math.random()),
      food: 200 + (800 * Math.random())
    };
    var salaryRange = 40000;
    $scope.sampleLocations[i].salary = (this.user.salary - salaryRange) + (salaryRange * 1.5 * Math.random());


    $scope.sampleLocations[i].compare = {};
    for(type in $scope.sampleLocations[i].costs) {
      // define the comparison object if undefined
      if($scope.sampleLocations[i].compare[type] == undefined) $scope.sampleLocations[i].compare[type] = {};

      // break down of the costs for comparison
      $scope.sampleLocations[i].compare[type].cost = $scope.sampleLocations[i].costs[type];
      $scope.sampleLocations[i].compare[type].diff = $scope.sampleLocations[i].costs[type] - this.user[type + 'Cost'];
      $scope.sampleLocations[i].compare[type].percent = $scope.sampleLocations[i].costs[type] / this.user[type + 'Cost'];

      // define the salary vars if undefined
      if($scope.sampleLocations[i].compare.salary == undefined) $scope.sampleLocations[i].compare.salary = {};
      if($scope.sampleLocations[i].compare.salary.diff == undefined) $scope.sampleLocations[i].compare.salary.diff = $scope.sampleLocations[i].salary;
      // adjusts the comparable salary based on the costs of the new location
      $scope.sampleLocations[i].compare.salary.diff -= $scope.sampleLocations[i].compare[type].diff;
      $scope.sampleLocations[i].compare.salary.percent = $scope.sampleLocations[i].compare.salary.diff / this.user.salary;

    }
  };

}]);
