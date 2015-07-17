controllers = angular.module('starter.controllers', []);

controllers.controller('MainController', function($scope, $state, $ionicLoading, $ionicModal) {




})
.controller('InicioController', function($scope, $state, $ionicLoading, $ionicModal) {

	Parse.initialize("DGGAyXG486w5hxkzdlX38yqbqfnKb9gywUXGFunJ", "WaKyF5ZAxo9zkieeDENUPxPlXKQd9CBCZtc6VRPW");

	User = Parse.User.current();

	if(User) {
		if(User.get("telefone_verificado") != 1) {

			return $state.go('verificar');
		}
	}else {
		return $state.go('inicio');
	}



})

.controller('tabs', function($scope, $ionicModal){
	$ionicModal.fromTemplateUrl('templates/camera.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal;
	});
	$scope.camera = function() {
		$scope.modal.show();
	};
});
