controllers.
controller('CreatePostController', function($scope,$http, $state, $ionicLoading, $ionicModal, $ionicPopup,$cordovaCamera,$cordovaGeolocation,$cordovaSocialSharing,$cordovaInstagram) {


$scope.getPosition = function ()
{
   var posOptions = {timeout: 10000, enableHighAccuracy: true};
  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      var lat  = position.coords.latitude
      var lon = position.coords.longitude
      $scope.getAddress(lat,lon);
    }, function(err) {
      // alert('ERRO AO CONECTAR COM GPS');
    });
}

$scope.getAddress = function (lat,lon) {

$.getJSON('http://maps.google.com/maps/api/geocode/json?address='+lat+','+lon+'&sensor=false', function(json, textStatus) {
    /*optional stuff to do after success */

        console.log(json.results[1]);
        if (json.results[1].formatted_address) {
           $scope.formated_adress = json.results[1].formatted_address
         }else{
           $scope.formated_adress = "Cordenadas: "+lat+lon;
         }

       
});


}


$scope.faceShare = function()
{
  window.plugins.socialsharing.shareViaFacebook($scope.postCaptiom,$scope.postimg, null /* url */, function() {console.log('share ok')}, function(errormsg){alert(errormsg)});
}

$scope.instaShare = function()
{
   $cordovaInstagram.share($scope.postimg, $scope.postCaptiom).then(function() {
    // Worked
  }, function(err) {
    // Didn't work
  });
}
$scope.twitter = function ()
{
    $cordovaSocialSharing
    .shareViaTwitter($scope.postCaptiom, $scope.postimg, null)
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occurred. Show a message to the user
    });
}


$scope.getApic = function ()
{

$scope.myimage=1;

	 var options = {
      quality: 100,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: false,
      encodingType: Camera.EncodingType.PNG,
      targetWidth: 800,
      targetHeight: 600,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      cameraDirection:0

    };


       $cordovaCamera.getPicture(options).then(function(imageData) {
      var image = document.getElementById('myImage');
      image.src = "data:image/jpeg;base64," + imageData;
      $scope.postimg = "data:image/jpeg;base64," + imageData;
      // $scop.imgpost =  image.src;
    }, function(err) {
      // error
    });





}



$scope.picup = function() {


}

 



$scope.myGoBack = function(){

}



$scope.getPosition();

});