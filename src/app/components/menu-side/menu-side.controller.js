(function() {
	'use strict';

	angular
	.module('decora')
	.controller('MenuSideController', MenuSideController);

	function MenuSideController($location, $cookies) {
		var vm = this;

		var actualCookie = $cookies.get('logado');
		vm.actualCookie = actualCookie;

		/* verify url and add class on menu */
		vm.isActive = function (destination) {
			return destination === $location.path();
		}

	}//end

})();