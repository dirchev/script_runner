/* global angular */
(function () {
  var _templateBase = './scripts'

  angular.module('app', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: _templateBase + '/script/script.html',
        controller: 'scriptController',
        controllerAs: '_ctrl'
      })
      $routeProvider.otherwise({ redirectTo: '/' })
    }
  ])
})()
