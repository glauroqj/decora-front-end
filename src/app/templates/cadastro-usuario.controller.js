(function() {
	'use strict';

	angular
	.module('decora')
	.controller('CadastroUsuarioController', CadastroUsuarioController);

	function CadastroUsuarioController($rootScope, ngNotify, $document, $location, $cookies) {
		var vm = this;
		vm.yes_user = false;
		$rootScope.boxTitle = 'cadastro de usuários';
		verify();

		vm.submit = function submit (user, password, acess) {		
			vm.usuarios_cadastrados = JSON.parse(localStorage.getItem('cadastro-usuario')) || [];

			vm.usuarios_cadastrados.push({name: user, pass: password, acess: acess});

			localStorage.setItem('cadastro-usuario', JSON.stringify(vm.usuarios_cadastrados));

			ngNotify.set('Usuário cadastrado com sucesso', {
				position: 'top',
				type: 'success',
				duration: 800
			});

			verify();
		};

		function verify() {
			vm.lista_users = JSON.parse(localStorage.getItem('cadastro-usuario'));

			if ( vm.lista_users != null ) {
				vm.yes_user = true;
			}
		}

	};

})();
