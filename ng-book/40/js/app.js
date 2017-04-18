var app = angular.module('myApp', ['myApp.filters']);

app.controller('DemoController', function($scope, $filter){
  $scope.isCapitalized = function(str)
    { return str[0] == str[0].toUpperCase(); }
});

angular.module('myApp.filters', [])
.filter('capitalize', function() {
  return function(input) {
    if (input)
      return input[0].toUpperCase() + input.slice(1);
  }
});
