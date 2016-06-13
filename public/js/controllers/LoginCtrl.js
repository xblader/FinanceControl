angular.module("listaTelefonica").controller("LoginCtrl", function ($scope, $location, $window, signUpAPI, AuthenticationService) {

	$scope.authenticate = function(user){
		signUpAPI.login(user).success(function(data){
			if(data.success){
				AuthenticationService.isAuthenticated = true;
                $window.sessionStorage.token = data.token;
                $location.path("/contatos");
			}
		});
	}
});