(function() {
	'use strict';

	angular
	.module('decora')
	.controller('LoginController', LoginController);

	function LoginController($rootScope, $uibModal, $log, $document, Notification, $location, AuthService) {
		var vm = this;
		vm.submit = submit;

		$rootScope.boxTitle = 'Login'

		vm.enviarBimestre = function() {
			Notification({message: 'Taleta Registrada Com Sucesso'}, 'success');
		}

		vm.login = login;
		function login(email, password) {
			AuthService.login(email, password).then(function() {
				$location.path('/');
			});
		}

		/* envio dados login form */
		function submit(email, password) {
			AuthService.login(email, password).then(function(response) {
				/*Lidar com a resposta de sucesso do back-end*/
				Profile.setRoles(response.data.roles);
			}).catch(function(response) {
				/* Lidar com casos de erro*/
			});
		}
	}

})();
