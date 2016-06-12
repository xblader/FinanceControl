angular.module("listaTelefonica").factory("signUpAPI", function($http, config){

	var _register = function(user){
		return $http.post(config.UrlnoAuth + "/signup", user);
	}

	var _login = function(user){
		return $http.post(config.UrlnoAuth + "/login", user);
	}
		
	return {
		register: _register,
		login: _login
	};
});