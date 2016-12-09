(function() {
	'use strict';

	angular
	.module('decora')
	.controller('DashboardController', DashboardController);

	function DashboardController($rootScope, $uibModal, $log, $document, Notification, $location, AuthLoginService, $cookies) {
		var vm = this;
		$rootScope.boxTitle = 'painel de controle';

	}

})();
