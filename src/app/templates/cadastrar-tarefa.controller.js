(function() {
	'use strict';

	angular
	.module('decora')
	.controller('CadastroTarefaController', CadastroTarefaController);

	function CadastroTarefaController($rootScope, ngNotify, $document, $location, $cookies) {
		var vm = this;
		vm.yes_user = false;
		$rootScope.boxTitle = 'cadastro de tarefas';
		verify();

		vm.submit = function submit (name, description, date) {		
			vm.tarefas_cadastradas = JSON.parse(localStorage.getItem('cadastro-tarefa')) || [];

			vm.tarefas_cadastradas.push({name: name, description: description, data: date});

			localStorage.setItem('cadastro-tarefa', JSON.stringify(vm.tarefas_cadastradas));

			ngNotify.set('Tarefa cadastrado com sucesso', {
				position: 'top',
				type: 'success',
				duration: 800
			});

			verify();
		};

		function verify() {
			vm.lista_tasks = JSON.parse(localStorage.getItem('cadastro-tarefa'));

			if ( vm.lista_tasks != null ) {
				vm.yes_user = true;
			}
		}
	}

})();
