(function() {
  'use strict';

  angular
  .module('decora', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngCookies',
    'ngResource', 'ngRoute', 'ui.bootstrap', 'gajus.swing', 'chart.js','ui-notification'])
  .config(config);


  function config($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/login', {
      templateUrl: 'app/templates/login.html',
      controller: 'LoginController',
      controllerAs: 'login'
    })
    .when('/admin', {
      templateUrl: 'app/templates/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'dashboard',
      resolve: {
        checkRoles: function(RouteAccessService, Profile) {
          return RouteAccessService.checkRoles(Profile.isAdmin());
        }
      }
    })
    .when('/user', {
      templateUrl: 'app/templates/lista-presenca.html',
      controller: 'ListaPresencaController',
      controllerAs: 'listapresenca',
      resolve: {
        checkRoles: function(RouteAccessService, Profile) {
          return RouteAccessService.checkRoles(Profile.isAdmin() || Profile.isModification());
        }
      }
    })
    .otherwise({
      redirectTo: '/login'
    });

  }

  angular
  .module('notificationTest', ['ui-notification'])
  .config(function(NotificationProvider) {
    NotificationProvider.setOptions({
      delay: 10000,
      startTop: 20,
      startRight: 10,
      verticalSpacing: 20,
      horizontalSpacing: 20,
      positionX: 'left',
      positionY: 'bottom'
    });
  });

})();
