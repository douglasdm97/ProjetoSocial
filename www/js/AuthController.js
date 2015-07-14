// Controller Do Auth
controllers.
controller('AuthController', function($scope, $state, $ionicLoading, $ionicModal, $ionicPopup) {

	//Inicia o Parse
	Parse.initialize("DGGAyXG486w5hxkzdlX38yqbqfnKb9gywUXGFunJ", "WaKyF5ZAxo9zkieeDENUPxPlXKQd9CBCZtc6VRPW");



	//Facebook SDK
	$scope.facebook = function(){

		// Reliza Login com o  Facebook

		facebookConnectPlugin.login(['email'], function(response) {
		});
		facebookConnectPlugin.api( "me/?fields=id,name,email,picture", ["user_photos"], function (dados) { 
			$scope.AutenticaParse(dados.email, dados.email.substring(0,8),dados.name, dados.picture.data.url);
			
		}, function (dados) { 
			$scope.erro();
			
		}); 

		
		

	};
	//Facebook SDK


	//Autentica no Parse
	$scope.AutenticaParse = function (email, senha, nome, img) {

		alert('Supostamente Auntenticado '+email +' - '+senha+' - '+ nome +' - '+img );
		var user = new Parse.User();
		user.set("username", email);
		user.set("password", senha);
		user.set("img", img);

		//Cadastra no Parse
		user.signUp(null, {
			success: function(user) {
			  return $state.go('auth.inicio');
			},
			error: function(user, error) {
			    $scope.erro();
			}
			});

	};

	//Mensagem Erro
	$scope.erro = function () {
		$ionicLoading.hide();
		var alertPopup = $ionicPopup.alert({
			title: 'Algo Errado!',
			template: 'Verifique sua conexão com a internet, ou se você possui o aplicativo que deseja logar.'
		});
		alertPopup.then();

	};



});