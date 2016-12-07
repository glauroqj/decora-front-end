(function() {
	'use strict';

	angular
	.module('decora')
	.controller('NavbarHeaderController', NavbarHeaderController);

	function NavbarHeaderController($rootScope, $location, $cookies) {
		var vm = this;

		$rootScope.boxTitle = 'Login';

		var url = $location.path().split('/')[1];
		console.log(url)
		if ( url === 'admin' ) {
			vm.user_on = 'Admin'
		}
		else if ( url === 'user' ) {
			vm.user_on = 'User'
		}

		vm.leave_session = function leave_session() {
			var actualCookie = $cookies.remove('logado');
			$location.path('/login');
		}

	}//end

})();