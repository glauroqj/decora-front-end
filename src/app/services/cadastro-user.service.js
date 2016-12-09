'use strict';

angular.module('decora')
.factory('CadastroUserService', function($http, $q) {
	var returnResponseData = function (response) {
		return response.data;
	};
	var handleResponseError = function (logMessage) {
		return function (errResponse) {
			console.error(logMessage);
			return $q.reject(errResponse);
		};
	};
	return {
		create: function () {
			return $http.post('http://localhost:3000/server/profile.json')
			.then(returnResponseData, handleResponseError('Erro ao salvar cadastro de usuário!'));
		}
	};
});