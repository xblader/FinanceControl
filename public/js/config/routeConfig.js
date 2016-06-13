angular.module("listaTelefonica").config(function($routeProvider){
	$routeProvider.when("/contatos",{
		templateUrl:"view/contatos.html",
		controller: "listaTelefonicaCtrl",
		access: { requiredLogin: true },
		resolve:{
			contatos: function(contatosAPI){
				return contatosAPI.getContatos();
			}
		}
	});

	$routeProvider.when("/novoContato",{
		templateUrl:"view/novoContato.html",
		controller: "NovoContatoCtrl",
		access: { requiredLogin: true },
		resolve:{
			operadoras: function(operadorasAPI){
				return operadorasAPI.getOperadoras();
			}
		}
	});

	$routeProvider.when("/detalhesContato/:id", {
		templateUrl: "view/detalhesContato.html",
		controller: "detalhesContatoCtrl",
		access: { requiredLogin: true },
		resolve: {
			contato: function (contatosAPI, $route) {
				return contatosAPI.getContato($route.current.params.id);
			}
		}
	});

	$routeProvider.when("/Error",{
		templateUrl:"view/Error.html"
	});

	$routeProvider.when("/login",{
		controller: "LoginCtrl",
		access: { requiredLogin: false },
		templateUrl:"view/login.html"
	});

	$routeProvider.when("/signup",{
		controller : "signUpCtrl",
		access: { requiredLogin: false },
		templateUrl:"view/signup.html"
	});

	$routeProvider.otherwise({redirectTo: "/"});
});

angular.module("listaTelefonica").run(function($rootScope, $location, AuthenticationService) {
    $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
        if (nextRoute.access.requiredLogin && !AuthenticationService.isAuthenticated) {
            $location.path("/login");
        }
    });
});