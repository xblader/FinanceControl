angular.module("listaTelefonica").controller("signUpCtrl", function($scope, $location, signUpAPI){
	$scope.register =  function(user){
		signUpAPI.register(user).success(function(data){
			if(data.success){
				$location.path("/login");
			}
		});
	}			
});