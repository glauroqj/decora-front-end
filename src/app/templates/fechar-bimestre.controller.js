(function() {
	'use strict';

	angular
	.module('decora')
	.controller('FecharBimestreController', FecharBimestreController);

	function FecharBimestreController($rootScope, $uibModal, $log, $document, Notification) {
		var vm = this;
		$rootScope.boxTitle = 'Fechar Bimestre'

		vm.enviarBimestre = function() {
			Notification({message: 'Taleta Registrada Com Sucesso'}, 'success');
		}

	}

})();
