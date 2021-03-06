(function() {
  'use strict';

  angular
  .module('decora', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngCookies',
    'ngResource', 'ngRoute', 'ui.bootstrap', 'gajus.swing', 'chart.js', 'ngNotify'])
  .config(config);


  function config($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/login', {
      templateUrl: 'app/templates/login.html',
      controller: 'LoginController',
      controllerAs: 'Login',
      resolve:{
        "check_login":function($cookies, $location, ngNotify){
          var actualCookie = $cookies.get('logado');
          if( actualCookie === 'admin' ){
            $location.path('/dashboard');
          }
          else if ( actualCookie == 'user' ) {
            $location.path('/dashboard');
          }
          else {
            $location.path('/login');    /*se não estiver logado, retorna para logar*/
          }

        }
      }
    })
    .when('/dashboard', {
      templateUrl: 'app/templates/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'Dashboard',
      resolve:{
        "check_dashboard":function($cookies, $location, ngNotify){ 
          var actualCookie = $cookies.get('logado');
          if( actualCookie === 'admin' ){
            $location.path('/dashboard');
          }
          else if ( actualCookie == 'user' ) {
            $location.path('/dashboard');
          }
          else {
            $location.path('/login');    /*se não estiver logado, retorna para logar*/
          }
        }
      }
    })
    .when('/cadastro-usuario', {
      templateUrl: 'app/templates/cadastro-usuario.html',
      controller: 'CadastroUsuarioController',
      controllerAs: 'CadastroUsuario',
      resolve:{
        "check_cadastro":function($cookies, $location, ngNotify){ 
          var actualCookie = $cookies.get('logado');
          if( actualCookie === 'admin' ){
            $location.path('/cadastro-usuario');
          }
          else if ( actualCookie == 'user' ) {
            $location.path('/cadastro-tarefa');
          }
          else {
            $location.path('/login');    /*se não estiver logado, retorna para logar*/
          }
        }
      }
    })
    .when('/cadastro-tarefa', {
      templateUrl: 'app/templates/cadastrar-tarefa.html',
      controller: 'CadastroTarefaController',
      controllerAs: 'CadastroTarefa',
      resolve:{
        "check_cadastro":function($cookies, $location, ngNotify){ 
          var actualCookie = $cookies.get('logado');
          if( actualCookie === 'admin' ){
            $location.path('/cadastro-tarefa');
          }
          else if ( actualCookie == 'user' ) {
            $location.path('/cadastro-tarefa');
          }
          else {
            $location.path('/login');    /*se não estiver logado, retorna para logar*/
          }
        }
      }
    })
    .otherwise({
      redirectTo: '/login'
    });

  }

})();
