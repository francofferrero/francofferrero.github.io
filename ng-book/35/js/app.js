angular.module('myApp', ['emailParser'])
  .controller('MyController',
    ['$scope', 'EmailParser',
      function($scope, EmailParser) {
        $scope.to = 'ari@fullstack.io';
        $scope.emailBody = 'Hello __ to __';
        // Set up watch
        $scope.$watch('emailBody', function(body) {
          if (body) {
            $scope.previewText =
              EmailParser.parse(body, {
                to: $scope.to
              });
          }
        });
}]);

angular.module('emailParser', [])
  .config(['$interpolateProvider',
    function($interpolateProvider) {
      $interpolateProvider.startSymbol('__');
      $interpolateProvider.endSymbol('__');
}])
.factory('EmailParser', ['$interpolate',
  function($interpolate) {
  // a service to handle parsing
  return {
    parse: function(text, context) {
      var template = $interpolate(text);
      return template(context);
    }
  }
}]);
