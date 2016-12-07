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
      controllerAs: 'login',
      resolve:{
        "check_login":function($cookies, $location, Notification){ 
          var actualCookie = $cookies.get('logado');
          if ( actualCookie == null ){
            //Notification({message: 'Você não está logado! Faça login!'}, 'error');
          }
          else if ( actualCookie === 'admin' ){
            $location.path('/admin/dashboard');
            Notification({message: 'Olá ADMIN, você está logado!'}, 'success');
          }
          else if ( actualCookie === 'user' ) {
            $location.path('/user/dashboard');
            Notification({message: 'Olá USER, você está logado!'}, 'primary');
          }
        }
      }
    })
    .when('/admin/dashboard', {
      templateUrl: 'app/templates/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'dashboard',
      resolve:{
        "check_admin":function($cookies, $location, Notification){ 
          var actualCookie = $cookies.get('logado');
          console.log(actualCookie)
          if( actualCookie === 'admin' ){ 
            $location.path('/admin/dashboard');
          }
          else if ( actualCookie == 'user' ) {
            $location.path('/user/dashboard');
            Notification({message: 'Olá USER, você não acesso a área ADMIN!'}, 'warning');
          }
          else {
            $location.path('/login');    /*redirect user to home.*/
          }
        }
      }
    })
    .when('/user/dashboard', {
      templateUrl: 'app/templates/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'dashboard',
      resolve:{
        "check_user":function($cookies, $location, Notification){ 
          var actualCookie = $cookies.get('logado');
          if( actualCookie === 'user' ){ 
            /*Do something*/
            $location.path('/user/dashboard');
          }
          else if ( actualCookie === 'admin' ){
            $location.path('/user/dashboard');
            Notification({message: 'Olá ADMIN, você está na área de USER!'}, 'warning');
          }
          else {
            $location.path('/login');    /*redirect user to home.*/
            Notification({message: 'Você não tem permissão!'}, 'error');
          }
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
