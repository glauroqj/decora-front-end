(function() {
	'use strict';

	angular
	.module('decora')
	.controller('LoginController', LoginController);

	function LoginController($rootScope, $uibModal, $log, $document, Notification, $location, AuthLoginService, $cookies) {
		var vm = this;
		var posicao = 0;
		var login_status_admin = false;
		var login_status_user = false;

		vm.submit = function submit (user, password) {
			vm.response = {};
			//console.log(user, password)
			AuthLoginService.verify().then(function(response) {
				vm.roles = response;
				vm.roles.worker.forEach(function(role){
					vm.name = role.name;
					vm.pass = role.pass;
					vm.access = role.access;

					if ((user === vm.name) && (password === vm.pass) && (vm.access === 'admin')) {
						//alert("ADMIN");
						$location.path('/dashboard');
						create_auth('admin');
						Notification({message: 'Olá '+vm.name+', você está logado!'}, 'success');
						login_status_admin = true;
					}
					else if ((user === vm.name) && (password === vm.pass) && (vm.access === 'user')) {
						//alert("USER")
						$location.path('/dashboard');
						create_auth('user');
						Notification({message: 'Olá '+vm.name+' você está logado!'}, 'success');
						login_status_user = true;
					}

				})/*each*/

				if ( (login_status_admin != true) && (login_status_user != true ) ) {
					Notification({message: 'Login ou Senha inválidos!'}, 'error');
				}

			});

		};

		function create_auth (param) {
			$cookies.put('logado', param);
		}

		// var actualCookie = $cookies.get('logado');
		// console.log(actualCookie);

	}/*end*/

})();