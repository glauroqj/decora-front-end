(function() {
	'use strict';

	angular
	.module('decora')
	.controller('DashboardController', DashboardController);

	function DashboardController($rootScope, $uibModal, $log, $document, Notification, $location, AuthLoginService, $cookies) {
		var vm = this;
		vm.no_user = true;
		$rootScope.boxTitle = 'painel de controle';


		vm.lista_users = JSON.parse(localStorage.getItem('cadastro-usuario'));

		if ( vm.lista_users != null ) {
			vm.no_user = false;
		}


	}/*end*/

})();
