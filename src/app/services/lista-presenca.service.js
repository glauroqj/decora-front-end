'use strict';

angular.module('decora')
.factory('ListaPresencaService', function($http, $q) {
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
    		return $http.post('http:localhost:8080/presenca/save/', contract)
         .then(returnResponseData, handleResponseError('Error ao salvar listapresenca'));
     },
     fetchAll: function () {
        return $http.get('http://localhost:8080/presenca/')
        .then(returnResponseData, handleResponseError('Error ao listar presencas'));
    },
    delete: function (id) {
      return $http.get('http://localhost:8080/presenca/delete/' + id)
      .then(returnResponseData, handleResponseError('error ao deletar presenca'));
  }
};
});
