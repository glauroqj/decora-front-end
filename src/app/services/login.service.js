'use strict';

function AuthService($http) {
  this.login = function(email, password) {
    var request = {
      username: email,
      password: password
    };
    return $http.post(url, request);
  };
}


/*
angular.module('decora')
.factory('AuthService', function($http, $q) {
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
    return $http.post('http:localhost:8080/server/profile.json', object)
    .then(returnResponseData, handleResponseError('Error!'));
  },
	salvarpresenca: function (list) {
		return $http.post('http://localhost:8080/presenca/saveList', list)
		 .then(returnResponseData, handleResponseError('Error!'));
 	},
  fetchAll: function () {
    return $http.get('http:localhost:8080/server/profile.json')
    .then(returnResponseData, handleResponseError('Error ao efetuar login!'));
  },
  findByProfessor: function (id) {
    return $http.get('http://localhost:8080/alunoclasse/findAllByClasse/' + id)
    .then(returnResponseData, handleResponseError('Error ao buscar aluno classe por professor'));
  }
};
});
*/