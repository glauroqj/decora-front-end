(function() {
	'use strict';

	angular
	.module('decora')
	.directive('menuside', function() {
		return {
			scope: true,
			restrict: 'AE',
			replace: 'true',
			templateUrl: 'app/components/menu-side/menu-side.html' 
		};
	})

})();