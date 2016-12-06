(function() {
	'use strict';

	angular
	.module('decora')
	.controller('MenuSideController', MenuSideController);

	function MenuSideController($location) {
		var vm = this;

		/* verify url and add class on menu */
		vm.isActive = function (destination) {
			return destination === $location.path();
		}

	}//end

})();