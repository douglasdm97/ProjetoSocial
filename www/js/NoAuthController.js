
controllers.
controller('NoAuthController', function($scope, $state, $ionicLoading, $ionicModal, $ionicPopup) {

$scope.Redirect = function (rota) {
	return $state.go(rota);
};



});