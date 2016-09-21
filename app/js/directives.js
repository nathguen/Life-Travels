angular.module('myApp')
.directive('successMessage', function(){
  return {
    restrict: 'E',
    replace: false,
    template: '<p></p>',
    link: function($scope, $element, attrs){
      var el = $element[0];
      el.innerText = attrs.message;
      el.classList.add('success-message');
    }
  }
})

.directive('textAutoComplete', function(){
  return {
    restrict: 'E',
    templateUrl: '/html/text-auto-complete.html',
    scope: {
      list: '=',
      input: '=',
      label: '@',
      listBy: '@'
    },
    link: function($scope, $element, attrs) {
      if(attrs.inline === 'false') {
        $scope.inline = false;
      } else {
        $scope.inline = true;
      }

      $scope.checkAgainstList = function(input){
        if(input.length) {
          if(typeof this.list == String) this.list = JSON.parse(this.list);
          if(this.listBy === 'value') {
            this.possibilities = this.list.filter(function(item){
              return item.$value.indexOf(input) > -1;
            });
          } else if(this.listBy === 'key') {
            this.possibilities = this.list.filter(function(item){
              return item.$id.indexOf(input) > -1;
            });
          }
        } else {
          this.possibilities = [];
        }
      };

      $scope.selectItem = function(item){
        if(this.listBy === 'value') {
          $scope.input = item.$value;
        } else if(this.listBy === 'key') {
          $scope.input = item.$id;
        }
        $scope.possibilities = [];
      };
    }
  }
})

.filter('capitalize', function(){
  return function(input) {
    output = input.substring(0,1).toUpperCase() + input.substring(1, input.length);
    return output;
  }
})

.filter('percentage', function(){
  return function(input){
    output = (input - 1) * 100;
    output = Math.round(output);
    output = output += '%';
    return output;
  }
})

.filter('orderObjectBy', function() {
  return function(items, field, reverse) {
    var filtered = [];
    angular.forEach(items, function(item) {
      filtered.push(item);
    });
    filtered.sort(function (a, b) {
      return (a[field] > b[field] ? 1 : -1);
    });
    if(reverse) filtered.reverse();
    return filtered;
  };
});;
