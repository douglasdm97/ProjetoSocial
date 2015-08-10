
controllers.
controller('BuscarController', function($scope, $state, $ionicLoading, $ionicModal, $ionicPopup) {
	
	
	Parse.initialize("DGGAyXG486w5hxkzdlX38yqbqfnKb9gywUXGFunJ", "WaKyF5ZAxo9zkieeDENUPxPlXKQd9CBCZtc6VRPW");

	$scope.dados = {};


	$scope.searchnow = function (valorbusca) {
		if(valorbusca.length>3) {
			var Usuario = Parse.Object.extend("User");
			var userquery = new Parse.Query(Usuario);

			userquery.startsWith("nickname", valorbusca);  
			userquery.limit(20);
			userquery.find({
				success: function(resultados) {
					$scope.seminternet = false;
					resultados = JSON.stringify(resultados); 
					resultados =JSON.parse(resultados); 
					$scope.dados = resultados;
					if(resultados.length > 0) {
						$scope.numero = false;
					}else {
						$scope.numero = true;
					}

				}, error: function(error) {
						$scope.numero = false;
						$scope.seminternet = true;
				}
			});
		}else {
			$scope.dados = {};
		}
	};


	$scope.showAlert = function(error,cod) {
		var alertPopup = $ionicPopup.alert({
			template: error
		});
		alertPopup.then(function(res) {

		});
	};
	$scope.verificarfoto = function(fotoperfil) {
		if (!fotoperfil) {
			return "img/no-profile-image.jpg";
		}else{
			return fotoperfil.url;
		}
	};

});