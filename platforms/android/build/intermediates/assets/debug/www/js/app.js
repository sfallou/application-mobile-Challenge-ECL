// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])



.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $httpProvider){

  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.accueil', {
    cache: true,
    url: '/accueil',
    views: {
      'tab-accueil': {
        templateUrl: 'templates/tab-accueil.html',
        controller: 'AccueilCtrl'
      }
    }
  })

.state('tab.gallery', {
    cache: true,
    url: '/gallery',
    views: {
      'tab-accueil': {
        templateUrl: 'templates/tab-gallery.html',
        controller: 'GalleryCtrl'
      }
    }
  })


  .state('tab.matchs', {
    cache: true,
    url: '/matchs',
    views: {
      'tab-matchs': {
        templateUrl: 'templates/tab-matchs.html',
        controller: 'MatchsCtrl'
      }
    }
  })

  .state('tab.resultatMatch', {
    cache: true,
    url: '/resultatMatch/[{resultat:json}]',
    views: {
      'tab-matchs': {
        templateUrl: 'templates/tab-resultatMatch.html',
        controller: 'ResultatMatchCtrl',
        params: [{resultat:null}]
      }
    }
  })

  .state('tab.resultatMatchSpeciaux', {
    cache: true,
    url: '/resultatMatchSpeciaux/[{resultat:json}]',
    views: {
      'tab-matchs': {
        templateUrl: 'templates/tab-resultatMatchSpeciaux.html',
        controller: 'ResultatMatchSpeciauxCtrl',
        params: [{resultat:null}]
      }
    }
  })

  .state('tab.ecoles', {
    cache: true,
    url: '/ecoles',
    views: {
      'tab-ecoles': {
        templateUrl: 'templates/tab-ecoles.html',
        controller: 'EcolesCtrl'
      }
    }
  })

  .state('tab.classement', {
    cache: true,
    url: '/classement',
    views: {
      'tab-ecoles': {
        templateUrl: 'templates/tab-classement.html',
        controller: 'ClassementCtrl'
      }
    }
  })

  .state('tab.informations', {
      cache: true,
      url: '/informations',
      views: {
        'tab-informations': {
          templateUrl: 'templates/tab-informations.html',
          controller: 'InformationsCtrl'
        }
      }
    })

  .state('tab.compte', {
    cache: true,
    url: '/compte',
    views: {
      'tab-compte': {
        templateUrl: 'templates/tab-compte.html',
        controller: 'CompteCtrl'
      }
    }
  })

 
  .state('tab.developpementdurable', {
    cache: true,
    url: '/developpementdurable',
    views: {
      'tab-informations': {
        templateUrl: 'templates/tab-developpementdurable.html',
        controller: 'DeveloppementdurableCtrl'
      }
    }
  })

  // Début Code de Thomas: 09/12
 
  .state('tab.calendrier', {
    url: '/calendrier',
    views: {
      'tab-informations': {
        templateUrl: 'templates/tab-calendrier.html',
        controller: 'CalendrierCtrl'
      }
    }
  })
   
  .state('tab.campus', {
    url: '/campus',
    views: {
      'tab-informations': {
        templateUrl: 'templates/tab-campus.html',
        controller: 'CampusCtrl'
      }
    }
  })
   
  .state('tab.numerourgence', {
    url: '/numerourgence',
    views: {
      'tab-informations': {
        templateUrl: 'templates/tab-numerourgence.html',
        controller: 'NumeroUrgenceCtrl'
      }
    }
  })
   
  .state('tab.faq', {
    url: '/faq',
    views: {
      'tab-informations': {
        templateUrl: 'templates/tab-faq.html',
        controller: 'FaqCtrl'
      }
    }
  })
   
// Fin Code de Thomas: 09/12

  .state('tab.consignes', {
    url: '/consignes',
    views: {
      'tab-informations': {
        templateUrl: 'templates/tab-consignes.html',
        controller: 'ConsignesCtrl'
      }
    }
  })
  
   .state('tab.autactions', {
    url: '/autactions',
    views: {
      'tab-informations': {
        templateUrl: 'templates/tab-autactions.html',
        controller: 'AutactionsCtrl'
      }
    }
  })
  
    .state('tab.carte', {
    url: '/carte',
    views: {
      'tab-informations': {
        templateUrl: 'templates/tab-carte.html',
        controller: 'CarteCtrl'
      }
    }
  })
  
    .state('tab.charte', {
    url: '/charte',
    views: {
      'tab-informations': {
        templateUrl: 'templates/tab-charte.html',
        controller: 'CharteCtrl'
      }
    }
  })
  
    .state('tab.enplus', {
    url: '/enplus',
    views: {
      'tab-informations': {
        templateUrl: 'templates/tab-enplus.html',
        controller: 'EnplusCtrl'
      }
    }
  })
  
    .state('tab.stands', {
    url: '/stands',
    views: {
      'tab-informations': {
        templateUrl: 'templates/tab-stands.html',
        controller: 'StandsCtrl'
      }
    }
  });





  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/accueil');

});

