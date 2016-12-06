(function() {
	'use strict';

	angular
	.module('decora')
	.controller('PlanoEscolarController', PlanoEscolarController);

	function PlanoEscolarController($rootScope, PlanoEscolarService) {
		var vm = this;
		$rootScope.boxTitle = 'plano escolar';

		vm.materias = [
		{planos: 'Materia 1', status: 'fa fa-check-square-o'},
		{planos: 'Materia 2', status: ''},
		{planos: 'Materia 3', status: ''},
		{planos: 'Materia 4', status: 'fa fa-check-square-o'},
		{planos: 'Materia 5', status: ''},
		{planos: 'Materia 6', status: 'fa fa-check-square-o'}
		]

		vm.materia_checked = function ($element) {
			if(vm.materias[$element.$index].status == 'fa fa-check-square-o'){
				vm.materias[$element.$index].status = 'fa fa-square-o';
			} else{
				vm.materias[$element.$index].status = 'fa fa-check-square-o';
			}
		}


	};

})();
