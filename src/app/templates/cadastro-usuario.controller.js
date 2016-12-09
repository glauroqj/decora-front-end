(function() {
	'use strict';

	angular
	.module('decora')
	.controller('CadastroUsuarioController', CadastroUsuarioController);

	function CadastroUsuarioController($rootScope, Notification, $document, $location, $cookies, $http) {
		var vm = this;
		vm.lista_cadastro_user = [];
		$rootScope.boxTitle = 'cadastro de usuários';

		vm.submit = function submit (user, password, acess) {
			vm.usuarios_cadastrados = localStorage.getItem('cadastro-usuario');
			
			vm.lista_cadastro_user.push({name: user, pass: password, acess: acess});
			vm.lista_cadastro_user_string = JSON.stringify(vm.lista_cadastro_user);
			vm.lista_cadastro_user = vm.usuarios_cadastrados.concat(vm.lista_cadastro_user)

			localStorage.setItem('cadastro-usuario', vm.lista_cadastro_user_string);

			console.log(vm.lista_cadastro_user, vm.lista_cadastro_user_string)
			Notification({message: 'Usuário '+user+' Cadastrado Com Sucesso'}, 'success');
		};
		console.log(vm.usuarios_cadastrados)

	};

})();
