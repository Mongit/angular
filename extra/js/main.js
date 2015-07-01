var app = angular.module('blog', ['ngRoute']);

app.config(function($routeProvider) {
    //set up routes
    $routeProvider
        .when('/', {
        templateUrl: 'partials/index.html',
        controller: 'HomeController'
    })
    .when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'AboutController'
    })
    .otherwise ({
        redirectTo: '/'
    })
});


app.controller('HomeController', function($scope) {
    $scope.blogposts = [
        'Blog post 1',
        'Blog post 2',
        'Blog post 3'
    ];
});

app.controller('AboutController', function($scope) {
    $scope.name = 'Monse';
    $scope.bio = 'Im checking angular';
    
});