(function() {
	'use strict';

	angular
	.module('decora')
	.controller('ListaPresencaController', ListaPresencaController);

	function ListaPresencaController($rootScope, AlunoClasseService, $uibModal, $log, $document, Notification) {
		var vm = this;
		vm.animationsEnabled = true;
		$rootScope.boxTitle = 'lista de presença';

		vm.chamadas = [];
		var posicao = 0;
		vm.acabou = true;
		vm.click_sala = false;

		vm.imagens = ['menino1.png','menino2.png','menino3.jpg','japa.jpg','menina1.jpg'];

		vm.editar_presenca = function ($element) {
			if(vm.chamadas[$element.$index].status == 'ausente'){
				vm.chamadas[$element.$index].status = 'presente';
			}else{
				vm.chamadas[$element.$index].status = 'ausente';
			}
		}

		vm.aluno_ausente = function () {
			posicao++;
			if(vm.listas[posicao] == undefined){
				vm.acabou = false;
				console.log(vm.acabou);
				return false;

			}
			vm.aluno = vm.listas[posicao].aluno;
			vm.aluno.classe = vm.listas[posicao].classe.id;
			vm.aluno.aluno_classe_id = vm.listas[posicao].id;
			vm.chamadas.push({ nome: vm.aluno.nome, id_aluno: vm.aluno.id, classe_id: vm.aluno.classe, aluno_classe_id: vm.aluno.aluno_classe_id ,status: 'ausente'});
		};

		vm.aluno_presente = function () {
			posicao++;
			if(vm.listas[posicao] == undefined){
				vm.acabou = false;
				console.log(vm.acabou);
				return false;
			}
			vm.aluno = vm.listas[posicao].aluno;
			vm.aluno.classe = vm.listas[posicao].classe.id;
			vm.aluno.aluno_classe_id = vm.listas[posicao].id;
			vm.chamadas.push({nome: vm.aluno.nome, id_aluno: vm.aluno.id, classe_id: vm.aluno.classe, aluno_classe_id: vm.aluno.aluno_classe_id, status: 'presente'});
		};

		vm.listapresenca = function lista_presenca_aluno () {
			vm.response = {};
			AlunoClasseService.findByProfessor(3).then(function(response) {
				vm.listas = response;

				vm.listas.forEach(function(lista){
					lista.aluno.foto = vm.imagens[Math.floor(Math.random() * vm.imagens.length)];
				});

				vm.aluno = vm.listas[posicao].aluno;
				vm.aluno.classe = vm.listas[posicao].classe.id;
				vm.aluno.aluno_classe_id = vm.listas[posicao].id;
				vm.click_sala = true;
				console.log('data', vm.aluno);
			});
		};

		vm.salvarpresenca = function(size, parentSelector) {
			var parentElem = parentSelector ? 
			angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
			var modalInstance = $uibModal.open({
				animation: vm.animationsEnabled,
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				templateUrl: 'myModalContent.html',
				controller: 'ListaPresencaController',
				controllerAs: 'ListaPresenca',
				size: size,
				appendTo: parentElem
			});
		}

		vm.alert_ok = function() {
			Notification({message: 'Chamada Enviada Com Sucesso'}, 'success');

		}
		vm.alert_failed = function() {
			Notification({message: 'Envio Cancelado'}, 'danger');
		}



	}

})();