(function() {
	'use strict';

	angular
	.module('decora')
	.controller('NavbarHeaderController', NavbarHeaderController);

	function NavbarHeaderController($location, $cookies) {
		var vm = this;

		vm.leave_session = function leave_session() {
			var actualCookie = $cookies.remove('logado');
			$location.path('/login');
		}

	}//end

})();