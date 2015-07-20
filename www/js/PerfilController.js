// Controller Do PErfil
controllers.
controller('PerfilController', function($scope, $state, $ionicLoading, $ionicModal, $ionicPopup, $ionicHistory) {
var testefile='' ;
	Parse.initialize("DGGAyXG486w5hxkzdlX38yqbqfnKb9gywUXGFunJ", "WaKyF5ZAxo9zkieeDENUPxPlXKQd9CBCZtc6VRPW");


	User = Parse.User.current();

	$scope.username = User.get("username");
	$scope.nome = User.get("nome");
	$scope.email = User.get("email");
	fotoperfil = User.get("profile_pic");
	if (!fotoperfil) {
		$scope.pic_file = "img/no-profile-image.jpg";
	}else{
		$scope.pic_file = fotoperfil._url;
	}
	


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


	$scope.upload_pic_profile = function(){
		alert();
	}

    $scope.uploadImage = function () {
       
    	var fileUploadControl = $("#pic_file")[0];

    	if (fileUploadControl.files.length > 0) {
		  var file = fileUploadControl.files[0];
		  testefile = file;
		  var name = testefile.name;
		  

		  var parseFile = new Parse.File(name, file);

		  User.set('profile_pic', parseFile);
		User.save(null, {
			success: function (){
				var alertPopup = $ionicPopup.alert({
					title: "Foto de Perfil Atualizada!"
				});
				alertPopup.then(function(res) {
					$ionicHistory.goBack();
				});
			}
		});


		}



    }




	$scope.sair = function () {
		Parse.User.logOut();
		return $state.go('inicio');
	};
	$scope.page = function (local) {

		return $state.go(local);
	};

});