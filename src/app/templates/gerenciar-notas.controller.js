(function() {
	'use strict';

	angular
	.module('decora')
	.controller('GerenciarNotasController', GerenciarNotasController);

	function GerenciarNotasController($rootScope, AlunoClasseService, Notification) {
		var vm = this;
		$rootScope.boxTitle = 'gerenciar notas';

		vm.exibeProvas = false;
		vm.listaAlunos = false;

		vm.avaliacoes = [
		{id:1,valor: 10,titulo:'Prova de trigonometria',data:'2016-03-01T23:28:56.782Z'},
		{id:2,valor: 10,titulo:'Avaliação 1',data:'2016-05-05T23:28:56.782Z'},
		{id:3,valor: 10,titulo:'Trabalho de LOG',data:'2016-05-010T23:28:56.782Z'}
		];

		vm.listaAvaliacoes = function () {
			var vm = this;
			vm.exibeProvas = true;
		};

		vm.avaliar = function ($element) {
			var vm = this;
			vm.listaAlunos = true;
			vm.valorMaximo = vm.avaliacoes[$element.$index].valor;
			vm.response = {};
			AlunoClasseService.findByProfessor(3).then(function(response) {
				vm.listas = [];
				response.forEach(function(dados) {
					dados.aluno.nota = '';
					vm.listas.push(dados.aluno);

				});
				// vm.aluno = vm.listas[posicao].aluno;
				// vm.aluno.classe = vm.listas[posicao].classe.id;
				// vm.aluno.aluno_classe_id = vm.listas[posicao].id;
				// vm.click_sala = true;
				// console.log('data', vm.aluno);
			});

		}

		vm.alert_ok = function() {
			Notification({message: 'Notas Salvas Com Sucesso'}, 'success');

		}

	}

})();
