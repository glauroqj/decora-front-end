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
        "check":function($cookies, $location, Notification){ 
          var actualCookie = $cookies.get('logado');
          console.log(actualCookie)
          if( actualCookie == null ){ 
            Notification({message: 'Você não está logado! Faço login!'}, 'error');
          }
        }
      }
    })
    .when('/admin/dashboard', {
      templateUrl: 'app/templates/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'dashboard',
      resolve:{
        "check":function($cookies, $location, Notification){ 
          var actualCookie = $cookies.get('logado');
          console.log(actualCookie)
          if( actualCookie == 'admin' ){ 
            /*Do something*/
            console.log("admin")
            $location.path('/admin/dashboard');
          }
          else if ( actualCookie == 'user' ) {
            console.log("user")
            $location.path('/user/dashboard');
          }
          else {
            $location.path('/login');    /*redirect user to home.*/
            Notification({message: 'Você não tem acesso! Faço login!'}, 'error');
            //alert("You don't have access here");
          }
        }
      }
    })
    .when('/user/dashboard', {
      templateUrl: 'app/templates/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'dashboard',
      resolve:{
        "check":function($cookies, $location, Notification){ 
          var actualCookie = $cookies.get('logado');
          console.log(actualCookie)
          if( actualCookie == 'admin' ){ 
            /*Do something*/
            console.log("admin")
            $location.path('/admin/dashboard');
          }
          else if ( actualCookie == 'user' ) {
            console.log("user")
            $location.path('/user/dashboard');
          }
          else {
            $location.path('/login');    /*redirect user to home.*/
            Notification({message: 'Você não tem acesso! Faço login!'}, 'error');
            //alert("You don't have access here");
          }
        }
      }
    })
    .when('/404', {
      templateUrl: 'app/templates/404.html',
      controller: 'NotFoundController',
      controllerAs: '404',
      resolve:{
        "check":function($cookies, $location, Notification){ 
          var actualCookie = $cookies.get('logado');
          console.log(actualCookie)
          if( actualCookie == 'admin' ){ 
            /*Do something*/
            console.log("admin")
            $location.path('/admin/dashboard');
          }
          else if ( actualCookie == 'user' ) {
            console.log("user")
            $location.path('/user/dashboard');
          }
          else {
            $location.path('/login');    /*redirect user to home.*/
            Notification({message: 'Você não tem acesso!'}, 'error');
            //alert("You don't have access here");
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
