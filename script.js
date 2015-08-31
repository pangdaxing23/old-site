var patricksSiteApp = angular.module('patricksSiteApp', ['ngRoute', 'ngAnimate']);

patricksSiteApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'home.html',
        controller: 'mainController'
    })
    .when('/projects', {
        templateUrl: 'projects.html',
        controller: 'projectsController'
    })
    .when('/blog', {
        templateUrl: 'blog.html',
        controller: 'blogController'
    })
    .otherwise({
        redirectTo: '/'
    });
});

// prevent animation from firing on pageload by waiting 1 second to add animation class
patricksSiteApp.run(function($rootScope, $timeout) {
  $timeout(function() {
    $rootScope.pageProbablyLoaded = true;
  }, 1000)
});

// controllers
patricksSiteApp.controller('mainController', function($scope) {
    $scope.bodyTitle = "you've entered patrick's domain";
});

patricksSiteApp.controller('projectsController', function($scope) {
    $scope.bodyTitle = "projects";
});

patricksSiteApp.controller('blogController', function($scope) {
    $scope.bodyTitle = "blog";
});