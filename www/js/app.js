// Doug App



angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ui.router'])


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
    controller: 'NoAuthController'
  })
  .state('cadastrar', {
    url: '/noAuth/cadastrar',
    templateUrl: "pages/noAuth/cadastrar.html",
    controller: 'CadastroController'
  })
  .state('logar', {
    url: '/noAuth/entrar',
    templateUrl: "pages/noAuth/entrar.html",
    controller: 'AuthController'
  })
  .state('confirmar', {
    url: '/noAuth/confirmar',
    templateUrl: "pages/noAuth/confirmar.html",
    controller: 'ConfirmController'
  })


  // Retonra a Route Inicial
  $urlRouterProvider.otherwise('/noAuth/inicio')

});
