// Doug App


angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

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
        controller: 'MainController'
      }
    }
  })
  .state('auth.perfil', {
    url: '/perfil',
    views: {
      'perfil': {
        templateUrl: 'pages/perfil.html',
        controller: 'MainController'
      }
    }
  })
  .state('auth.amigos', {
    url: '/amigos',
    views: {
      'amigos': {
        templateUrl: 'pages/amigos.html',
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
