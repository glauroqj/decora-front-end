'use strict';

angular.module('decora')
.factory('AlunoClasseService', function($http, $q) {
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
   create: function (object) {
    return $http.post('http:localhost:8080/alunoclasse/save/', object)
    .then(returnResponseData, handleResponseError('Error ao salvar aluno_classe'));
  },
	salvarpresenca: function (list) {
		return $http.post('http://localhost:8080/presenca/saveList', list)
		 .then(returnResponseData, handleResponseError('Error ao salvar listapresenca'));
 	},
  fetchAll: function () {
    return $http.get('http://localhost:8080/alunoclasse/')
    .then(returnResponseData, handleResponseError('Error ao listar aluno_classe'));
  },
  findByProfessor: function (id) {
    return $http.get('http://localhost:8080/alunoclasse/findAllByClasse/' + id)
    .then(returnResponseData, handleResponseError('Error ao buscar aluno classe por professor'));
  }
};
});
