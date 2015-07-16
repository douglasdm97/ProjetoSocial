// Controller Do Cadastro
controllers.
controller('CadastroController', function($scope, $state, $ionicLoading, $ionicModal, $ionicPopup) {


	
	Parse.initialize("CpHpZpZg3FXuBG7rfg4LoFAvKRPy7YiLDNmX1YBl", "eY3NCOFRwhleMKGZ2uaBZG4H9quRowyGJW4UQaGY");

	var user = new Parse.User();




	$scope.erromsg = function(error,cod){

		console.log(cod);
		if (cod==125) {error="Email Inválido!"};
		if (cod==202) {error="Este email ja esta cadastrado!"};
		
		$scope.showAlert(error,cod)
		


	}

	$scope.showAlert = function(error,cod) {
		var alertPopup = $ionicPopup.alert({
			title: "ERRO",
			template: error
		});
		alertPopup.then(function(res) {
			
		});
	};

	$scope.dologin = function(username,password){

		Parse.User.logIn(username,password, {
		  success: function(user) {
		  $scope.Redirect('#/auth/inicio');
		  
		  },
		  error: function(user, error) {
		   $scope.erromsg('Erro ao logar, por fazer tente logar novamente, ou se cadastrar',null);
		  }
		});

	}


$scope.Redirect = function (rota) {
	window.location.href= rota;
};




	$scope.cadastro = function(nome, password, email, celular){
		$scope.username=email;
		$scope.password=password;

		if (!nome) {$scope.showAlert('Por favor Informe o seu nome!');return false;};
		if (!email) {$scope.showAlert('Por favor Informe o seu email!');return false;};
		if (!password) {$scope.showAlert('Por favor Informe a sua senha!');return false;};

		$ionicLoading.show();
		user.set("completo_facebook", 0);
		user.set("nome", nome);
		user.set("email", email);
		user.set("username",email);
		user.set("password", password);
		user.set("phonenumber", celular);
		user.signUp(null, {
			success: function(user,email,password) {
				    // Hooray! Let them use the app now.
					
				    $scope.dologin($scope.username,$scope.password);
				    $ionicLoading.hide();


				},
				error: function(user, error) {
				    // Show the error message somewhere and let the user try again.
				    // alert("Error: " + error.code + " " + error.message);
				    $ionicLoading.hide();
				    $scope.erromsg(error.message,error.code);
				}
			});



	};









	$scope.doFaceCad = function(){
		alert('Facebook');

	}

	$scope.doGoogleCad = function(){
		alert('google');
	}

});