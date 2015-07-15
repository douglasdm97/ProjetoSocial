// Controller Do Auth
controllers.
controller('AuthController', function($scope, $state, $ionicLoading, $ionicModal, $ionicPopup) {

	//Inicia o Parse
	Parse.initialize("DGGAyXG486w5hxkzdlX38yqbqfnKb9gywUXGFunJ", "WaKyF5ZAxo9zkieeDENUPxPlXKQd9CBCZtc6VRPW");



	//Facebook SDK
	$scope.facebook = function(){

		$ionicLoading.show();
		// Reliza Login com o  Facebook

		facebookConnectPlugin.login(['email'], function(response) {
		});
		//Pega o Status do Login
		facebookConnectPlugin.getLoginStatus( 
			function (response) { 
				// Faz a Data ficar no formato perfeitoOoO
				var data = new Date(new Date().getTime() + response['authResponse']['expiresIn'] * 1000)

				Parse.FacebookUtils.logIn({

					"id": response['authResponse']['userID']+"",
					"access_token": response['authResponse']['accessToken'],
					"expiration_date": data
				}, {
					success: function(user) {
						$ionicLoading.hide();
						// Função caso tenha logado tanto no face quanto no Parse
						if(user.get("completo_facebook") != 1) {
							$scope.Redirect('#/noAuth/cadastrar');
						}else {
							$scope.Redirect('#/auth/inicio');
						}

						

					}});
			});


		

		
		

	};
	//Facebook SDK


	//Autentica no Parse
	$scope.AutenticaParse = function (id, email, nome, img, access_token) {




	};


//Redireciona a page via angular
$scope.Redirect = function (rota) {
	window.location.href= rota;
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