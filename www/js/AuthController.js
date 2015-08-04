// Controller Do Auth
controllers.
controller('AuthController', function($scope, $state, $ionicLoading, $ionicModal, $ionicPopup) {

	//Inicia o Parse
	Parse.initialize("DGGAyXG486w5hxkzdlX38yqbqfnKb9gywUXGFunJ", "WaKyF5ZAxo9zkieeDENUPxPlXKQd9CBCZtc6VRPW");
	Parse.User.logOut();

//Entrar com o parse
$scope.entrar = function (email, password) {
	if (!email) {$scope.showAlert('Por favor Informe o seu email!');return false;};
	if (!password) {$scope.showAlert('Por favor Informe a sua senha!');return false;};

	$ionicLoading.show();



	Parse.User.logIn(email, password, {
		success: function(user) {
			$ionicLoading.hide();
			return $state.go('auth.inicio');
		},
		error: function(user, error) {
			$ionicLoading.hide();
			$scope.showAlert('E-mail ou senha incorretos.');
		}
	});

	// Parse.User.logIn(username, password, {
		
	// });
};
//Alert
$scope.showAlert = function(error,cod) {
	var alertPopup = $ionicPopup.alert({
		title: "ERRO",
		template: error
	});
	alertPopup.then(function(res) {

	});
};
	//Facebook SDK
	$scope.facebook = function(){

		$ionicLoading.show();
		// Reliza Login com o  Facebook

		facebookConnectPlugin.logout();

		facebookConnectPlugin.login( ["email"],
			function (response) {

		//Pega o Status do Login
		facebookConnectPlugin.getLoginStatus( 
			function (response) { 
				facebookConnectPlugin.api( "me/?fields=id,email", ["user_birthday"],
					function (dados) {
						
						var query = new Parse.Query(Parse.User);
						query.equalTo("email", dados.email);  

						query.find({
							success: function(user) {

								if(user.length>0 ) {
								
									if(user[0].get("completo_facebook") == 1) {
										$scope.sdkliga(response);
										
									}else {
										$scope.RedirectState('associar');
										$ionicLoading.hide();
									}

								}else {

									$scope.sdkliga(response);

								}

								


								


							}, error: function (error) {
								alert('Sem conexão');
								
							}
						});

					});
			});
	},  function (response) { $ionicLoading.hide();alert(JSON.stringify(response));

	});







	};
	//Facebook SDK

	$scope.sdkliga = function (response) {
	// Faz a Data ficar no formato perfeitoOoO
	var data = new Date(new Date().getTime() + response['authResponse']['expiresIn'] * 1000);


	Parse.FacebookUtils.logIn({

		"id": response['authResponse']['userID']+"",
		"access_token": response['authResponse']['accessToken'],
		"expiration_date": data
	}, {
		success: function(user) {
			$ionicLoading.hide();
						// Função caso tenha logado tanto no face quanto no Parse
						if(user.get("completo_facebook") != 1) {
							$scope.RedirectState('confirmar');
						}else {
							$scope.Redirect('#/auth/inicio');
						}

						

					}});
};

//Redireciona a page via angular
$scope.Redirect = function (rota) {
	window.location.href= rota;
};
//Redireciona a page via angular
$scope.RedirectState = function (rota) {
	return $state.go(rota);
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