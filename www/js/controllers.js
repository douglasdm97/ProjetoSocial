angular.module('starter.controllers', [])

.controller('MainController', function($scope, $state, $ionicLoading, $ionicModal) {

  $scope.entrar = function(state){
    $ionicLoading.show();
    setTimeout(function(){

      $ionicLoading.hide();
      return $state.go('auth.inicio');

    }, 1500);
  };
  $scope.cadastrar = function(state){
    $ionicLoading.show();
    setTimeout(function(){

      $ionicLoading.hide();

    }, 3000);
  };
  $scope.navigateTo = function(state){
    return $state.go(state);
  }
}).controller('tabs', function($scope, $ionicModal){
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
