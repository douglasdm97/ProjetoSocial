controllers.
controller('VerificarController', function($scope, $state, $ionicLoading, $ionicModal, $ionicPopup, $ionicHistory) {

	Parse.initialize("DGGAyXG486w5hxkzdlX38yqbqfnKb9gywUXGFunJ", "WaKyF5ZAxo9zkieeDENUPxPlXKQd9CBCZtc6VRPW");

	//AQUI ENVIA O SMS
	$scope.submit = function () {
		//AQUI VERIFICA TEM Q COLOCAR UM IF
		alert('Confirmado com sucesso');
		User = Parse.User.current();
		User.set("telefone_verificado", 1);
		User.save();
		$ionicHistory.goBack();
		
	};
});