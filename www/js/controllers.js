controllers = angular.module('starter.controllers', []);

controllers.controller('MainController', function($scope, $state, $ionicLoading, $ionicModal) {




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
