var myApp = angular.module('myApp', []);
          
myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
    when('/view1', { 
            templateUrl: '/js/templates/view1.ejs',
            controller: 'SimpleController'
      }).
    when('/view2', { 
            templateUrl: '/js/templates/view2.ejs',
            controller: 'SimpleController2'
      }).
    when('/boots', { 
            templateUrl: '/js/templates/boots.ejs',
            controller: 'SimpleController'
      }).
    otherwise({ redirectTo: '/view1' });  
}]);

myApp.controller('SimpleController', function($scope) {
  
    $scope.message = 'Simple Controller test';
    
});


myApp.controller('SimpleController2', function($scope) {
  
    $scope.message = 'Simple Controller2 test';
    
});
