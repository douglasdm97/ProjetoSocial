// Controller Do PErfil
controllers.
controller('PerfilController', function($scope, $state, $ionicLoading, $ionicModal, $ionicPopup, $ionicHistory) {

	Parse.initialize("DGGAyXG486w5hxkzdlX38yqbqfnKb9gywUXGFunJ", "WaKyF5ZAxo9zkieeDENUPxPlXKQd9CBCZtc6VRPW");


	User = Parse.User.current();

	$scope.username = User.get("username");
	$scope.nome = User.get("nome");
	$scope.email = User.get("email");

	$scope.submit = function (username, nome, email) {
		User.set('username', username);
		User.set('nome', nome);
		User.set('email', email);
		User.save(null, {
			success: function (){
				var alertPopup = $ionicPopup.alert({
					title: "Salvo com sucesso"
				});
				alertPopup.then(function(res) {
					$ionicHistory.goBack();
				});
			}
		});
	};
	$scope.sair = function () {
		Parse.User.logOut();
		return $state.go('inicio');
	};
	$scope.page = function (local) {

		return $state.go(local);
	};

});