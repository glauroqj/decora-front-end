(function() {
	'use strict';

	angular
	.module('decora')
	.controller('DashboardController', DashboardController);

	function DashboardController($rootScope, $uibModal, $log, $document, ngNotify, $location, $cookies) {
		var vm = this;
		vm.no_user = true;
		vm.yes_user = false;
		vm.no_task = true;
		vm.yes_task = false;
		$rootScope.boxTitle = 'painel de controle';

		vm.isActive = function (destination) {
			return destination === $location.path();
		}

		vm.lista_users = JSON.parse(localStorage.getItem('cadastro-usuario'));
		vm.lista_tasks = JSON.parse(localStorage.getItem('cadastro-tarefa'));

		if ( vm.lista_users != null ) {
			vm.no_user = false;
			vm.yes_user = true;
		}

		if ( vm.lista_tasks != null ) {
			vm.no_task = false;
			vm.yes_task = true;
		}

		var actualCookie = $cookies.get('logado');
		vm.actualCookie = actualCookie;


	}/*end*/

})();
