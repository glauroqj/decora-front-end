'use strict';

angular.module('decora')
.factory('AuthLoginService', function($http, $q) {
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
    verify: function () {
      return $http.get('http://localhost:3000/server/profile.json')
      .then(returnResponseData, handleResponseError('Error ao efetuar login!'));
    }
  };
});