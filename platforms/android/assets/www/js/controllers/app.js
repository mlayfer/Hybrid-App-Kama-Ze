'use strict';
/* App Module */

var app = angular.module('app', [
  'ngRoute',
  'appFilters',
  'appDirectives',
  'appControllers',
  'appServices'
]);

app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/main', {
            templateUrl: 'partials/main.html',
            controller: 'mainCtrl'
        }).
        otherwise({
            redirectTo: '/main'
        });
  }]);
app.run(function ($rootScope) {
    document.addEventListener('deviceready', function () {
        $rootScope.$broadcast('deviceready', null);
    });
});