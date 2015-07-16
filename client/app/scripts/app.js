'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
var app = angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(['$routeProvider', 'RestangularProvider', function ($routeProvider, RestangularProvider) {
    
    RestangularProvider.setBaseUrl('http://52.24.30.233:3000');
      
      RestangularProvider.setRestangularFields({
	  id: "_id"
      });
      
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl',
        
      })
      .when('/create/movie', {
        templateUrl: 'views/movie-add.html',
        controller: 'MovieAddCtrl',
        
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie-view.html',
        controller: 'MovieViewCtrl',
       
      })
      .when('/movie/:id/delete', {
        templateUrl: 'views/movie-delete.html',
        controller: 'MovieDeleteCtrl',
        
      })
      .when('/movie/:id/edit', {
        templateUrl: 'views/movie-edit.html',
        controller: 'MovieEditCtrl',
        
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
    //.factory('MovieRestangular', ['Restangular', function(Restangular) {
	//return Restangular.withConfig(function(RestangularConfigurer) {
	    //RestangularConfigurer.setRestangularFields({
		//id: '_id'
	    //});
	//});
    //}])
    .factory('Movie', ['Restangular', function(MovieRestangular) {
	return MovieRestangular.service('movie');
    }])

.directive('youtube', function() {
  return {
    restrict: 'E',
    scope: {
      src: '='
    },
    templateUrl: 'views/youtube.html'
  };
})
.filter('trusted', function ($sce) {
  return function(url) {
    return $sce.trustAsResourceUrl(url);
  };
});
