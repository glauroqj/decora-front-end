(function() {
	'use strict';

	angular
	.module('decora')
	.controller('CadastroUsuarioController', CadastroUsuarioController);

	function CadastroUsuarioController($rootScope, Notification, $document, $location, $cookies, $http) {
		var vm = this;
		$rootScope.boxTitle = 'cadastro de usuários';

		vm.submit = function submit (user, password, acess) {		
			vm.usuarios_cadastrados = JSON.parse(localStorage.getItem('cadastro-usuario')) || [];

			vm.usuarios_cadastrados.push({name: user, pass: password, acess: acess});
			
			localStorage.setItem('cadastro-usuario', JSON.stringify(vm.usuarios_cadastrados));

			Notification({message: 'Usuário '+user+' Cadastrado Com Sucesso'}, 'success');
		};

	};

})();
