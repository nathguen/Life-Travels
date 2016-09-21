'use strict';

// Declare app level module which depends on views, and components
angular
.module('myApp', ['ngRoute', 'firebase', 'angular-growl', 'ngAnimate'])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  // $locationProvider.hashPrefix('!');

  $routeProvider
  .when('/dashboard', {controller: 'dashboardCtrl as ctrl', templateUrl: '/html/dashboard.html'})
  .when('/search', {controller: 'searchCtrl as ctrl', templateUrl: '/html/search.html'})
  .when('/profile', {controller: 'profileCtrl as ctrl', templateUrl: '/html/profile.html'})
  .otherwise({redirectTo: '/dashboard'});
}]);
