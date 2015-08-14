// Controller
Social.controller('perfilController', function($scope, $state, $rootScope) {

	//PArse
	Parse.initialize("DGGAyXG486w5hxkzdlX38yqbqfnKb9gywUXGFunJ", "WaKyF5ZAxo9zkieeDENUPxPlXKQd9CBCZtc6VRPW");


	User = Parse.User.current();

	$scope.refreshprofilepic = function (){
		fotoperfil = User.get("profile_pic");
		if (!fotoperfil) {
			$scope.pic_file = "img/no-profile-image.jpg";
		}else{
			$scope.pic_file = fotoperfil._url;
		}
	}

	$scope.nickname = User.get("nickname");
	$scope.email = User.get("email");
	$scope.phonenumber = User.get("phonenumber");
	$scope.refreshprofilepic();



	$scope.submit = function (nickname, email, phonenumber) {
		User.set('nickname', nickname);
		User.set('email', email);
		User.set('phonenumber', phonenumber);
		User.save(null, {
			success: function (){
				$rootScope.popup('Salvo com sucesso!', 'Suas informações foram salvas no nosso banco de dados');


			},
			error: function(user, error) {
				$rootScope.popup('Algo errado!', error.message);

				}
		});
	};




	$scope.uploadImage = function () {
		$rootScope.carregandoShow();

		var fileUploadControl = $("#pic_file")[0];

		if (fileUploadControl.files.length > 0) {
			var file = fileUploadControl.files[0];
			testefile = file;
			var type = file.type;
			if ((type !=="image/png") && (type !=="image/jpeg") ) {
				$rootScope.popup('Tipo e Arquivo invalido '+type, '');
			
				$rootScope.carregandoHide();
				return false;
			};

			console.log(testefile);
			var name = testefile.name;


			var parseFile = new Parse.File(name, file);

			User.set('profile_pic', parseFile);
			User.save(null, {
				success: function (){
					$rootScope.carregandoHide();
						$rootScope.popup('Foto de perfil atualizada com sucesso', '');
						$scope.refreshprofilepic();
				
				}
			});


		}


	};




});