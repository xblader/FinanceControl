angular.module("listaTelefonica").factory("AuthenticationService", function($window){	
	var auth = {
        isAuthenticated: $window.sessionStorage.token
    }
 
    return auth;
});

