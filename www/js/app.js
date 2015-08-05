// Doug App



angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ngCordova', 'ui.router'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
  if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
  }
  if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {



  // Rotas -- Desenvolvido por Doga 
  $stateProvider

 // ---------------------
 // Prefixo de login
 // ---------------------
 // ---------------------
 .state('auth', {
  url: "/auth",
  templateUrl: "templates/tabs.html"
})

  // Paginas Auth

  .state('auth.inicio', {


    url: '/inicio',
    views: {
      'inicio': {
        templateUrl: 'pages/inicio.html',
        controller: 'InicioController'
      }
    }
  })
  .state('verificar', {
    url: '/verificar',
    templateUrl: "pages/verificar.html",
    controller: 'VerificarController'
  })
  .state('auth.myperfil', {
    url: '/myperfil',
    views: {
      'perfil': {
        templateUrl: 'pages/my_perfil.html',
        controller: 'PerfilController'
      }
    }
  })
  .state('auth.editar_perfil', {
   url: '/editar_perfil',
   views: {
    'perfil': {
     templateUrl: "pages/editar_perfil.html",
     controller: 'PerfilController'
   }
 }

})
  .state('auth.notificacoes', {
    url: '/notificacoes',
    views: {
      'notificacoes': {
        templateUrl: 'pages/notificacoes.html',
        controller: 'MainController'
      }
    }
  })
  .state('auth.search', {
    url: '/search',
    views: {
      'search': {
        templateUrl: 'pages/search.html',
        controller: 'MainController'
      }
    }
  })
  

  //Paginas não logado
  .state('inicio', {
    url: '/noAuth/inicio',
    templateUrl: "pages/noAuth/inicio.html",
    controller: 'AuthController'
  })
  .state('cadastrar', {
    url: '/noAuth/cadastrar',
    templateUrl: "pages/noAuth/cadastrar.html",
    controller: 'CadastroController'
  })

  .state('confirmar', {
    url: '/noAuth/confirmar',
    templateUrl: "pages/noAuth/confirmar.html",
    controller: 'ConfirmController'
  })
  .state('associar', {
    url: '/noAuth/associar',
    templateUrl: "pages/noAuth/associar.html",
    controller: 'ConfirmController'
  });


  Parse.initialize("DGGAyXG486w5hxkzdlX38yqbqfnKb9gywUXGFunJ", "WaKyF5ZAxo9zkieeDENUPxPlXKQd9CBCZtc6VRPW");

  
  var currentUser = Parse.User.current();
  console.log(currentUser);
  if (currentUser) {
  // Retonra a Route 
  $urlRouterProvider.otherwise('/auth/inicio')
} else {
   // Retonra a Route 
   $urlRouterProvider.otherwise('/noAuth/inicio');
 }



});
