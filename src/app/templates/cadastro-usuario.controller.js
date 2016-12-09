(function() {
	'use strict';

	angular
	.module('decora')
	.controller('CadastroUsuarioController', CadastroUsuarioController);

	function CadastroUsuarioController($rootScope, Notification, $document, $location, $cookies, $http) {
		var vm = this;
		vm.lista_cadastro_user = [];
		$rootScope.boxTitle = 'cadastro de usuários';

		vm.submit = function submit (user, password, acess, form) {
			vm.lista_cadastro_user.push({name: user, pass: password, acess: acess});
			console.log(vm.lista_cadastro_user)
			Notification({message: 'Usuário '+user+' Cadastrado Com Sucesso'}, 'success');
			
		};


	};

})();
