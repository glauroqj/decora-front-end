(function() {
	'use strict';

	angular
	.module('decora')
	.controller('LoginController', LoginController);

	function LoginController($rootScope, $uibModal, $log, $document, Notification, $location, AuthLoginService, $cookies) {
		var vm = this;

		$rootScope.boxTitle = 'Login'

		vm.submit = function submit (user, password) {
			vm.response = {};
			//console.log(user, password)
			AuthLoginService.verify().then(function(response) {
				vm.roles = response;

				vm.user_admin = vm.roles.admin.name;
				vm.pass_admin = vm.roles.admin.pass;

				vm.user_user = vm.roles.user.name;
				vm.pass_user = vm.roles.user.pass;

				if ((user === vm.user_admin) && (password === vm.pass_admin)) {
					//alert("ADMIN");
					$location.path('/admin/dashboard');
					create_auth('admin');
					Notification({message: 'Olá '+vm.user_admin+', você está logado!'}, 'success');
				} 
				else if ((user === vm.user_user) && (password === vm.pass_user)) {
					//alert("USER")
					$location.path('/user/dashboard');
					create_auth('user');
					Notification({message: 'Olá '+vm.user_user+' você está logado!'}, 'success');
				}
				else {
					// alert("Login ou Senha inválidos!");
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