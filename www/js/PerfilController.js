// Controller Do PErfil
controllers.
controller('PerfilController', function($scope, $state, $ionicLoading, $ionicModal, $ionicPopup) {

	Parse.initialize("DGGAyXG486w5hxkzdlX38yqbqfnKb9gywUXGFunJ", "WaKyF5ZAxo9zkieeDENUPxPlXKQd9CBCZtc6VRPW");


	User = Parse.User.current();
	$scope.username = User.get("username");
	$scope.nome = User.get("nome");

	$scope.submit = function (username, nome) {
		User.set('username', username);
		User.set('nome', nome);
		User.save(null, {
			success: function (){
				alert('teste');
			}
		});
	};

});