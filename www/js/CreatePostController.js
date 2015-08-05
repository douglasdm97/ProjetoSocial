controllers.
controller('CreatePostController', function($scope,$http, $state, $ionicLoading, $ionicModal, $ionicPopup,$cordovaCamera,$cordovaGeolocation) {


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

        $scope.formated_adress = json.results[1].formatted_address
});


}


$scope.to64 = function(url, callback, outputFormat) 
{
  var canvas = document.createElement('CANVAS'),
        ctx = canvas.getContext('2d'),
        img = new Image;
    img.crossOrigin = 'Anonymous';
    img.onload = function(){
        var dataURL;
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 600, 600);
        dataURL = canvas.toDataURL(outputFormat);
        callback.call(this, dataURL);
        canvas = null; 
    };
    img.src = url;
}



var img64 = $scope.to64('img/photo1.jpg','','png');
$scope.getApic = function ()
{

$scope.myimage=1;

	 var options = {
      quality: 100,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: false,
      encodingType: Camera.EncodingType.PNG,
      targetWidth: 600,
      targetHeight: 600,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      cameraDirection:0

    };


       $cordovaCamera.getPicture(options).then(function(imageData) {
      var image = document.getElementById('myImage');
      image.src = "data:image/jpeg;base64," + imageData;
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