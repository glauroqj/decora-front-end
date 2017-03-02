(function() {
	'use strict';

	angular
	.module('decora')
	.controller('LoginController', LoginController);

	function LoginController($rootScope, $uibModal, $log, $document, ngNotify, $location, AuthLoginService, $cookies) {
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
						ngNotify.set('Olá, você está logado! ', {
							position: 'top',
							type: 'success',
							duration: 800
						});
						login_status_admin = true;
					}
					else if ((user === vm.name) && (password === vm.pass) && (vm.access === 'user')) {
						//alert("USER")
						$location.path('/dashboard');
						create_auth('user');
						ngNotify.set('Olá '+vm.nome+', você está logado! ', {
							position: 'top',
							type: 'success',
							duration: 800
						});
						login_status_user = true;
					}

				})/*each*/

				if ( (login_status_admin != true) && (login_status_user != true ) ) {
					ngNotify.set('Login ou Senha inválidos!', {
						position: 'top',
						type: 'error',
						duration: 800
					});
				}

			});

		};

		function create_auth (param) {
			$cookies.put('logado', param);
		}

		ngNotify.config({
			theme: 'pure',
			position: 'top',
			duration: 2000,
			sticky: false,
			button: true,
			html: false
		});

		// var actualCookie = $cookies.get('logado');
		// console.log(actualCookie);

	}/*end*/

})();