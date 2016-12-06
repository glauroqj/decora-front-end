'use strict';

angular.module('decora')
.factory('PlanoEscolarService', function($http, $q) {
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
   create: function (id) {
    return $http.post('http:localhost:8080/materia/save/', contract)
    .then(returnResponseData, handleResponseError('Erro ao salvar materia'));
  },
  fetchAll: function () {
    return $http.get('http://localhost:8080/materia/')
    .then(returnResponseData, handleResponseError('Error ao buscar listas materias'));
  },
  findByCurso: function (id) {
    return $http.get('http://localhost:8080/materia/findByCurso/' + id)
    .then(returnResponseData, handleResponseError('erro ao buscar materias por curso'));
  }
};
});
