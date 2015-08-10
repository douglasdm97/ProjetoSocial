// Controller Do PErfil
controllers.
controller('ProfileController', function($scope, $state, $ionicLoading, $ionicModal, $ionicPopup, $ionicHistory, $stateParams) {

	Parse.initialize("DGGAyXG486w5hxkzdlX38yqbqfnKb9gywUXGFunJ", "WaKyF5ZAxo9zkieeDENUPxPlXKQd9CBCZtc6VRPW");
	//Seta usuario
	$scope.User = Parse.User.current();


	var Usuario = Parse.Object.extend("User");
	var query = new Parse.Query(Usuario);


	query.equalTo("objectId", $stateParams.id);

	query.first({
		success: function(results) {
			
			$scope.$apply(function () {

				$scope.json = results;
				$scope.nickname = results.get("nickname");
				$scope.email = results.get("email");
				$scope.refreshprofilepic(results);
				$scope.VerificaBotao();
			});

		},
		error: function(error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});

	//FOTO
	$scope.refreshprofilepic = function (User){
		fotoperfil = User.get("profile_pic");
		if (!fotoperfil) {
			$scope.pic_file = "img/no-profile-image.jpg";
		}else{
			$scope.pic_file = fotoperfil._url;
		}
	};

	$scope.seguir = function (objectId){
		if($scope.User.id == objectId) { $scope.showAlert('Você não pode seguir a si mesmo.'); return false; }
		
		var Seguidores = Parse.Object.extend("seguidores");
		var query = new Seguidores();

		query.set("idSeguidor", $scope.User.id);
		query.set("idSeguindo", objectId);

		query.save(null, {
			success: function(Resultados) {
				$ionicLoading.hide();
				$scope.$apply(function () {
					$scope.btnSeguir = false;
					$scope.btnDeixarSeguir = true;
				});

			},
			error: function(Resultados, error) {
				$ionicLoading.hide();
				$scope.showAlert('Sem conexão ao banco de dados.');
			}
		});

	};
	$scope.deixarSeguir = function (objectId){
		idSeguindo = objectId;
		idSeguidor = $scope.User.id;



		var Seguidores = Parse.Object.extend("seguidores");
		var query = new Parse.Query(Seguidores);


		query.equalTo("idSeguidor", idSeguidor);
		query.equalTo("idSeguindo", idSeguindo);

		query.find({
			success: function(dados) {
				for (var i = 0; i < dados.length; i++) {
					results = dados[i];
					results.destroy({
						success: function(myObject) {
							$scope.$apply(function () {
								$scope.btnSeguir = true;
								$scope.btnDeixarSeguir = false;
							});
						},
						error: function(myObject, error) {
							$scope.showAlert('Sem conexão ao banco de dados.');
						}
					});
				}
				//Inicia exclusao
				

			},
			error: function(Resultados, error) {
				$scope.showAlert('Sem conexão ao banco de dados.');
			}
		});

	};

	$scope.VerificaBotao = function() {
		idSeguindo = $stateParams.id;
		idSeguidor = $scope.User.id;

		console.log(idSeguidor +' - '+ idSeguindo);

		var Seguidores = Parse.Object.extend("seguidores");
		var query = new Parse.Query(Seguidores);


		query.equalTo("idSeguidor", idSeguidor);
		query.equalTo("idSeguindo", idSeguindo);

		query.count({
			success: function(count) {
				$scope.$apply(function () {
					if(count>0) {
						$scope.btnSeguir = false;
						$scope.btnDeixarSeguir = true;
					}else {
						$scope.btnSeguir = true;
						$scope.btnDeixarSeguir = false;

					}
				});

			},
			error: function() {
				$scope.btnSeguir = true;
				$scope.btnDeixarSeguir = false;
				$scope.showAlert("Error: " + error.code + " " + error.message);
			}
		});

	};

	$scope.showAlert = function(error,cod) {
		var alertPopup = $ionicPopup.alert({
			template: error
		});
		alertPopup.then(function(res) {

		});
	};


});
