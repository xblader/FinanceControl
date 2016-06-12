angular.module("listaTelefonica").controller("LoginCtrl", function ($scope, $location,  signUpAPI) {

	$scope.authenticate = function(user){
		signUpAPI.login(user).success(function(data){
			if(data.success){
				$location.path("/contatos");
			}
		});
	}
});