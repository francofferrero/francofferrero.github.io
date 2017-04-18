var app = angular.module('myApp', []);
// open this example and type person.name into the test field
app.controller('MyController',
 function($scope, $interpolate) {
   $scope.to = 'ari@fullstack.io';
   $scope.emailBody = 'Hello {{ to }}, \n\nMy name is Ari too!';
  //Set up watch
  $scope.$watch('emailBody', function(body) {
    if (body) {
      var template = $interpolate(body);
      $scope.previewText =
        template({to: $scope.to});
    }
  });
});
