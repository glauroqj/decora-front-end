(function() {
  'use strict';

  angular
  .module('decora', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 
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
    .when('/dashboard', {
      templateUrl: 'app/templates/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'dashboard'
    })
    .when('/lista-presenca', {
      templateUrl: 'app/templates/lista-presenca.html',
      controller: 'ListaPresencaController',
      controllerAs: 'listapresenca'
    })
    .when('/plano-escolar', {
      templateUrl: 'app/templates/plano-escolar.html',
      controller: 'PlanoEscolarController',
      controllerAs: 'planoescolar'
    })
    .when('/gerenciar-notas', {
      templateUrl: 'app/templates/gerenciar-notas.html',
      controller: 'GerenciarNotasController',
      controllerAs: 'gerenciarnotas'
    })
    .when('/fechar-bimestre', {
      templateUrl: 'app/templates/fechar-bimestre.html',
      controller: 'FecharBimestreController',
      controllerAs: 'fecharbimestre'
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
