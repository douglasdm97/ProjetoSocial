(function(){

  // VALIDAR LOGADO

  Parse.initialize("DGGAyXG486w5hxkzdlX38yqbqfnKb9gywUXGFunJ", "WaKyF5ZAxo9zkieeDENUPxPlXKQd9CBCZtc6VRPW");

  
var currentUser = Parse.User.current();
if (currentUser) {
   console.log(currentUser);
   toRoute('#/auth/inicio');
} else {
  console.log('Nao esta logado');
}



})();


function toRoute(rota){
window.location.href=rota;
}