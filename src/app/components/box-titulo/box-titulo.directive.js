(function() {
	'use strict';

	angular
	.module('decora')
	.directive('boxtitulo', function() {
		return {
			scope: {
				title: '='
			},
			restrict: 'AE',
			replace: 'true',
			templateUrl: 'app/components/box-titulo/box-titulo.html'
		};
	});

})();