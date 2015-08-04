
controllers.
controller('ConfirmController', function($scope, $state, $ionicLoading, $ionicModal, $ionicPopup) {
	
	
	Parse.initialize("DGGAyXG486w5hxkzdlX38yqbqfnKb9gywUXGFunJ", "WaKyF5ZAxo9zkieeDENUPxPlXKQd9CBCZtc6VRPW");

	User = Parse.User.current();
	$('#celular').focusout(function(){
		var phone, element;
		element = $(this);
		element.unmask();
		phone = element.val().replace(/\D/g, '');
		if(phone.length > 10) {
			element.mask("(99) 99999-999?9");
		} else {
			element.mask("(99) 9999-9999?9");
		}
	}).trigger('focusout');

	if(User) {

		//PEga dados do facebook
		facebookConnectPlugin.api( "me/?fields=id,email", ["user_birthday"],
			function (response) { 

				// Seta dados 
				email = response.email;
				usuario = email.split("@")[0];

				$scope.$apply(function () {
					// Passa os dados 
					$scope.username = usuario;
					$scope.email = email;

				});

			}); 

		$scope.cadastro = function(username, password, email){
			$ionicLoading.show();
			if (!username) {$ionicLoading.hide();$scope.showAlert('Por favor Informe o seu username!');return false;};
			if (!email) {$ionicLoading.hide();$scope.showAlert('Por favor Informe o seu email!');return false;};
			if (!password) {$ionicLoading.hide();$scope.showAlert('Por favor Informe a sua senha!');return false;};
			User.set("completo_facebook", 1);
			celular = $('#celular').val().replace('_', '');

			User.set("nickname", username);
			User.set("username", email);
			User.set("password", password);
			User.set("email", email);
			User.set("phonenumber", celular);
			User.save(null,{
				success: function(User) {


					$ionicLoading.hide();
					var alertPopup = $ionicPopup.alert({
						title: 'Cadastrado com sucesso!'
					});
					return $state.go('auth.inicio');
					alertPopup.then();
				},
				error: function(user, error) {

				    // Show the error message somewhere and let the user try again.
				    // alert("Error: " + error.code + " " + error.message);
				    $ionicLoading.hide();
				    $scope.erromsg(error.message,error.code);
				}
			});
			


		};
		$scope.erromsg = function(error,cod){

			console.log(cod);
			if (cod==125) {error="Email Inválido!"};
			if (cod==202) {error="Email ou username ja esta cadastrado!"};
			
			$scope.showAlert(error,cod)
			


		};
		
	}
	$scope.showAlert = function(error,cod) {
		var alertPopup = $ionicPopup.alert({
			template: error
		});
		alertPopup.then(function(res) {

		});
	};
	$scope.associar = function (password) {
		if (!password) {$scope.showAlert('Por favor Informe a sua senha!');return false;};

		facebookConnectPlugin.api( "me/?fields=id,email", ["user_birthday"],
			function (dados) {
			

				username =	dados.email;

				Parse.User.logIn(username, password, {
					success: function(user) {
						facebookConnectPlugin.getLoginStatus( 
							function (response) { 


								user.set("completo_facebook", 1);

								user.save();

								userMain = user;
								// Faz a Data ficar no formato perfeitoOoO
								var data = new Date(new Date().getTime() + response['authResponse']['expiresIn'] * 1000);

								Parse.FacebookUtils.link(user, {

									"id": response['authResponse']['userID']+"",
									"access_token": response['authResponse']['accessToken'],
									"expiration_date": data
								}, 
								{
									success: function(user) {
										return $state.go('auth.inicio');
									},
									error: function(user, error) {
										userMain.set("completo_facebook", 0);

								userMain.save();
										alert("Não foi possivel associar sua conta :(");
									}
								});







							});
					},
					error: function(user, error) {
						$ionicLoading.hide();
						$scope.showAlert('Senha incorreta.');
					}
				});

			});
};

	//Final do IF
});