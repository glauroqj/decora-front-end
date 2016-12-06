(function() {
	'use strict';

	angular
	.module('decora')
	.controller('LoginController', LoginController);

	function LoginController($rootScope, $uibModal, $log, $document, Notification) {
		var vm = this;
		$rootScope.boxTitle = 'Login'

		vm.enviarBimestre = function() {
			Notification({message: 'Taleta Registrada Com Sucesso'}, 'success');
		}

	}

})();
