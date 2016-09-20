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
      inline: '@',
      listBy: '@'
    },
    link: function($scope, $element, attrs) {
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
});
