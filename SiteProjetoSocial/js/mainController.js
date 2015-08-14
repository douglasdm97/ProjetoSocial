    Social = angular.module( 'SocialApp', [ 'ngMaterial', 'ngAnimate', 'ui.router'] );

// Rotas

Social
.config(function($stateProvider, $urlRouterProvider,$location) {
	if(Parse.User.current()) {

		console.log($location.path());
	}
})

.config(function($stateProvider, $urlRouterProvider) {

	Parse.initialize("DGGAyXG486w5hxkzdlX38yqbqfnKb9gywUXGFunJ", "WaKyF5ZAxo9zkieeDENUPxPlXKQd9CBCZtc6VRPW");
  // Define Rota Normal

  

  // Rotas
  $stateProvider
  .state('publicacoes', {
  	url: "/publicacoes",
  	templateUrl: "pages/inicio.php"
  })
  .state('editarperfil', {
  	url: "/editarperfil",
  	templateUrl: "pages/editarperfil.php",
  	controller: 'perfilController'
  })
  .state('profile', {
  	url: '/profile/:id',

  	templateUrl: 'pages/profile.html',
  	controller: 'profileController'

  }
  );

  $urlRouterProvider.otherwise("/publicacoes");



});


// Controller
Social.controller('MainController',  function($scope, $state, $rootScope, $mdBottomSheet, $mdSidenav, $mdDialog){


	$scope.go = function ( path ) {
		return  $state.go( path );

	};

	$rootScope.popup = function (title, descricao) {
		$mdDialog.show(
			$mdDialog.alert()
			.clickOutsideToClose(true)
			.title(title)
			.content(descricao)
			.ok('Entendi!')
			);
	};
	$rootScope.carregandoShow = function () {
		$rootScope.carregando = true;
	};
	$rootScope.carregandoHide = function () {
		$rootScope.carregando = false;
	};


// Buscar
$rootScope.buscar = function () {
	$mdDialog.show({
		controller: 'BuscarController',
		templateUrl: 'templates/buscar.html',
		clickOutsideToClose:true
	})
	.then();
};





}).controller('BuscarController', function($scope, $location, $mdDialog, $q){


	$scope.entrarperfil = function (retorno) {

		$location.path('/profile/'+retorno.objectId);
		$mdDialog.hide();
	};



	$scope.searchnow = function (valorbusca) {
		var deferred = $q.defer();


		
		var Usuario = Parse.Object.extend("User");
		var userquery = new Parse.Query(Usuario);

		userquery.startsWith("nickname", valorbusca);  
		userquery.limit(20);
		userquery.find({
			success: function(resultados) {
				resultados = JSON.stringify(resultados); 
				resultados =JSON.parse(resultados); 
				deferred.resolve(resultados);
				

			}, error: function(error) {
				deferred.resolve(false);
			}
		});

		return deferred.promise;
		
	};

	$scope.retorna = function (dados) {

		return dados;
		
	};


	$scope.showAlert = function(error,cod) {
		var alertPopup = $ionicPopup.alert({
			template: error
		});
		alertPopup.then(function(res) {

		});
	};
	$scope.verificarfoto = function(fotoperfil) {
		if (!fotoperfil) {
			return "img/no-profile-image.jpg";
		}else{
			return fotoperfil.url;
		}
	};

	
});