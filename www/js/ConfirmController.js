
controllers.
controller('ConfirmController', function($scope, $state, $ionicLoading, $ionicModal, $ionicPopup) {
	
	
	Parse.initialize("DGGAyXG486w5hxkzdlX38yqbqfnKb9gywUXGFunJ", "WaKyF5ZAxo9zkieeDENUPxPlXKQd9CBCZtc6VRPW");

	User = Parse.User.current();
	if(User) {


		$scope.cadastro = function(username, password, email, celular){
			$ionicLoading.show();
			User.set("completo_facebook", 1);
			User.set("username", username);
			User.set("password", password);
			User.set("email", email);
			User.set("phonenumber", celular);
			User.save(null,{
				success: function(User) {

					$ionicLoading.hide();
					var alertPopup = $ionicPopup.alert({
						title: 'Cadastrado com sucesso!',
						template: 'Por favor confirme seu numero do celular.'
					});
					return $state.go('auth.inicio');
					alertPopup.then();
				}
			});
			


		};

	}
});