angular.module('starter.controllers', ['ionic', 'ionic-modal-select'])

.controller('AccueilCtrl',['$scope','$ionicSlideBoxDelegate','$http','$localstorage','$timeout','Home', function($scope,$ionicSlideBoxDelegate,$http,$localstorage,$timeout,Home) {

    /* la fonction associée au slider de la page d'accueil*/

     $scope.navSlide = function(index) {
        $ionicSlideBoxDelegate.slide(index, 500);
    }

    /*--------------------------------*/
    // le service qui renvoit au tab-accueil.html les  images
    
Home.Lien().then(function (resp) {
           // Here will be the data after the request finished
           $scope.liens = resp.data;
          //$localstorage.setObject('news',infos);

   }, function (err) {
          // Here will be if there was an error
          console.error('ERR', err);
   });
  //$timeout($scope.news = $localstorage.getObject('news'),1);

    /*----------------------------------*/
    /* Le service qui affiche les news*/
    
Home.News().then(function (resp) {
           // Here will be the data after the request finished
           var infos = resp.data;
           $scope.news=infos;
          //$localstorage.setObject('news',infos);

   }, function (err) {
          // Here will be if there was an error
          console.error('ERR', err);
   });
  //$timeout($scope.news = $localstorage.getObject('news'),1);


  
}])


.controller('EcolesCtrl',['$scope','$http','$localstorage','$timeout','Ecole', function ($scope,$http,$localstorage,$timeout,Ecole) {
  //Classement des ecoles
  Ecole.Classement().then(function (resp) {
           // Here will be the data after the request finished
           var donnees = resp.data;
           $scope.classement=donnees;
          //$localstorage.setObject('classement',donnees);

   }, function (err) {
          // Here will be if there was an error
          console.error('ERR', err);
   });


 // $timeout($scope.classement = $localstorage.getObject('classement'),1);

//Listes des Ecoles
  Ecole.Ecoles().then(function (resp) {
           // Here will be the data after the request finished
           var donnees = resp.data;
           $scope.ecoles=donnees;
          //$localstorage.setObject('ecoles',donnees);

   }, function (err) {
          // Here will be if there was an error
          console.error('ERR', err);
   });
//$timeout($scope.ecoles = $localstorage.getObject('ecoles'),1);

  $scope.getInfoEcole= function(Infoecole){
   Ecole.Matchs(Infoecole).then(function (resp) {
      $scope.matchs_ecole = resp.data;
   }, function (err) {
          // Here will be if there was an error
          console.error('ERR', err);
   })
  }
 

}])

.controller('ClassementCtrl',['$scope','$http', function ($scope,$http) {
  //Classement des ecoles
  $http.get('http://challenge-2016.eclair.ec-lyon.fr/api/ecoles/classement').then(function(resp) {
    $scope.classement = resp.data.data;
    // For JSON responses, resp.data contains the result

  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  });
}])

.controller('MatchsCtrl',['$scope','$http','$state','Matchs', function ($scope,$http,$state,Matchs) {
  
  $scope.recherche = function(matchs){
      var sport=matchs.sport;
      var genre=matchs.sexe;
      //Resultat de la recherche
  Matchs.Matchs(sport,genre).then(function (resp) {
           // Here will be the data after the request finished
           var res = resp.data;
           if(res.sport==="Football" || res.sport==="Basketball" || res.sport==="Handball" || res.sport==="Rugby" || res.sport==="Volley"){
              //$localstorage.setObject('classement',donnees);
              $state.go("tab.resultatMatch", { resultat: res});
            }
            else{
              $state.go("tab.resultatMatchSpeciaux", { resultat: res});
            }

   }, function (err) {
          // Here will be if there was an error
          console.error('ERR', err);
   });

    }  
   $scope.sexe=[
  {text:'Homme', value:'Homme',logo:'img/homme.png'},
  {text:'Femme', value:'Femme',logo:'img/femme.png'},
  {text:'Mixte', value:'Mixte',logo:'img/mixte.png'}
  ];


  $scope.matchs = {
    sexe: 'Homme',
  };

  $scope.sports=[
  {text:"Basketball", valeur:'Basketball', logo:'/img/Logos_sport/basket.png'},
  {text:"Football", valeur:'Football', logo:'/img/Logos_sport/foot2.png'},
  {text:"Handball", valeur:'Handball', logo:'/img/Logos_sport/handball.png'},
  {text:"Rugby", valeur:'Rugby', logo:'/img/Logos_sport/rugby.png'},
  {text:"Volley", valeur:'Volley', logo:'/img/Logos_sport/volley.png'},
  {text:"Athlétisme", valeur:'Athletisme', logo:'/img/Logos_sport/athle.png'},
  {text:"Badminton", valeur:'Badminton', logo:'/img/Logos_sport/badminton.png'},
  {text:"Escalade", valeur:'Escalade', logo:'/img/Logos_sport/escalade.png'},
  {text:"Escrime", valeur:'Escrime', logo:'/img/Logos_sport/escrime.png'},
  {text:"Golf", valeur:'Golf', logo:'/img/Logos_sport/golf.png'},
  {text:"Judo", valeur:'Judo', logo:'/img/Logos_sport/judo.png'},
  {text:"Natation", valeur:'Natation', logo:'/img/Logos_sport/natation.png'},
  {text:"Raid", valeur:'Raid', logo:'/img/Logos_sport/raid.png'},
  {text:"Ski", valeur:'Ski', logo:'/img/Logos_sport/ski.png'},
  {text:"Tennis", valeur:'Tennis', logo:'/img/Logos_sport/tennis.png'},
  {text:"Tennis de table", valeur:'Tennis_table', logo:'/img/Logos_sport/tennistable.png'},
  {text:"Ultimate", valeur:'Ultimate', logo:'/img/Logos_sport/ultimate.png'},
  {text:"Waterpolo", valeur:'Waterpolo', logo:'/img/Logos_sport/waterpolo.png'},
  ];

}])

.controller('InformationsCtrl', function($scope) {})

.controller('HealthCtrl', function($scope) {})

.controller('GalleryCtrl', ['$scope','$http','$localstorage','$timeout','Home', function ($scope,$http,$localstorage,$timeout,Home) {

  Home.Gallery().then(function (resp) {
           // Here will be the data after the request finished
           var galerie = resp.data;
           $scope.photos=galerie;
           //$localstorage.setObject('photos',galerie);
   }, function (err) {
          // Here will be if there was an error
          console.error('ERR', err);
   });
//$timeout($scope.photos = $localstorage.getObject('photos'),1);

}])

.controller('CompteCtrl',['$scope','$rootScope','$state','$stateParams','Compte','$ionicPopup', function($scope, $rootScope, $state, $stateParams,Compte,$ionicPopup) {
  $scope.connexion = function(user){
      var login = user.login;
      var mdp = user.mdp;
      Compte.Compte(login,mdp).then(function (resp) {
        var compteAdmin= resp.data;
          if(compteAdmin!=null){
            $rootScope.connected=true;
            $scope.utilisateur=compteAdmin;
           }
        else{
            $scope.alertPopup = $ionicPopup.alert({
                title: 'Echec d\'autentifiaction !',
                template: 'Vérifiez vos paramètres de connexion !'
              });
            $state.go('tab.compte')
            }
           
   }, function (err) {
          // Here will be if there was an error
          console.error('ERR', err);
   });
      
   }
  $scope.deconnexion = function(){
      $rootScope.connected=null;
   }

}])

.controller('DetailMatchCtrl', function($scope, $stateParams,$state){
    // on récupère les paramètres dans l'url 
    $scope.user = $stateParams.user;
   // $scope.mdp = $stateParams.mdp;
   
    
  })


.controller('ResultatMatchCtrl',['$scope', '$stateParams','$state','$http','$state','Update','$ionicPopup',function($scope, $stateParams,$state,$http,$state,Update,$ionicPopup){
    // on récupère les paramètres dans l'url 
    $scope.resultat1 = $stateParams.resultat;
var resultat = $stateParams.resultat.matchs;
    var tableau1=[];
    var tableau2=[];
    var tableau3=[];
    var tableau4=[];
    var tableau5=[];
    var tableau6=[];
    for(var i=0;i<resultat.length;i++){
                    if(resultat[i].phase_match==="Finale"){
                    tableau1[i]=resultat[i];
                  }
                  if(resultat[i].phase_match==="Demie_finale"){
                    tableau2[i]=resultat[i];
                  }
                  if(resultat[i].phase_match==="Quart_finale"){
                    tableau3[i]=resultat[i];
                  }
                  if(resultat[i].phase_match==="Huitieme_finale"){
                    tableau4[i]=resultat[i];
                  }
                  if(resultat[i].phase_match==="Barrage"){
                    tableau5[i]=resultat[i];
                  }
                  if(resultat[i].phase_match==="Poule"){
                    tableau6[i]=resultat[i];
                  }
                }
    $scope.finales=tableau1;
    $scope.demie_finales=tableau2;
    $scope.quart_finales=tableau3;
    $scope.huitieme_finales=tableau4;
    $scope.barrages=tableau5;
    $scope.poules=tableau6;
    $scope.modifier=function(match){
      Update.Poule(match.id_match,match.score1,match.score2).then(function (resp) {
           var response = resp.data;
           if(response==="ok"){
              //alert("Résultat modifié!");
              $scope.alertPopup = $ionicPopup.alert({
                title: 'Modification',
                template: 'Le score a été modifié avec sucès!'
              });
            }
            else{
              $scope.alertPopup = $ionicPopup.alert({
                title: 'Echec Modification',
                template: 'Echec de la Modification du score!'
              });
            }
        }, function (err) {
           console.error('ERR', err);
       });
    //console.log(match);
   }
    
    $scope.modifier_tout=function(match){
      var id_match=match.id_match;
      var equipe1=match.equipe1;
      var equipe2=match.equipe2;
      var score1=match.score1;
      var score2=match.score2;
      $http.post('http://challenge-2016.eclair.ec-lyon.fr/api/matchs/'+id_match+'-'+equipe1+'-'+equipe2+'-'+score1+'-'+score2+'').then(function(resp) {
        var result = resp.data.data;
        if (result==="ok"){
              //alert("Résultat modifié!");
              $scope.alertPopup = $ionicPopup.alert({
                title: 'Modification',
                template: 'Le score a été modifié avec sucès!'
              });
            }
            else{
              $scope.alertPopup = $ionicPopup.alert({
                title: 'Echec Modification',
                template: 'Echec de la Modification du score!'
              });
            }
        }, function(err) {
         console.error('ERR', err);
        // err.status will contain the status code
       });
     }
   
  }])

.controller('ResultatMatchSpeciauxCtrl',['$scope', '$stateParams','$state','$http','$state','Update','$ionicPopup',function($scope, $stateParams,$state,$http,$state,Update,$ionicPopup){
    // on récupère les paramètres dans l'url 
    
    $scope.resultat = $stateParams.resultat;
    $scope.modifier_classement=function(matchSpecial){
    Update.Special(matchSpecial.id_match_special,matchSpecial.classement_equipe).then(function (resp) {
           var response = resp.data;
           if(response==="ok"){
              $scope.alertPopup = $ionicPopup.alert({
                title: 'Modification',
                template: 'Le score a été modifié avec sucès!'
              });
            }
            else{
              $scope.alertPopup = $ionicPopup.alert({
                title: 'Echec Modification',
                template: 'Echec de la Modification du score!'
              });
            }
        }, function (err) {
           console.error('ERR', err);
       });
   }
    
   
  }])

.controller('DeveloppementdurableCtrl', function($scope) {
})


.controller('CalendrierCtrl',['$scope','$state','$stateParams','Informations', function($scope,$state, $stateParams,Informations) {
 
Informations.Calandar().then(function (resp) {
           // Here will be the data after the request finished
           $scope.calendrier = resp.data;
          //$localstorage.setObject('news',infos);

   }, function (err) {
          // Here will be if there was an error
          console.error('ERR', err);
   });

}])

.controller('NumeroUrgenceCtrl',['$scope','$state','$stateParams','Informations', function($scope,$state, $stateParams,Informations) {
 
Informations.Urgence().then(function (resp) {
           // Here will be the data after the request finished
           $scope.urgences = resp.data;
          //$localstorage.setObject('news',infos);

   }, function (err) {
          // Here will be if there was an error
          console.error('ERR', err);
   });

}])
 
.controller('CampusCtrl',['$scope','$state','$stateParams','Informations', function($scope,$state, $stateParams,Informations) {
 
Informations.Plan().then(function (resp) {
           // Here will be the data after the request finished
           $scope.plans = resp.data;
          //$localstorage.setObject('news',infos);

   }, function (err) {
          // Here will be if there was an error
          console.error('ERR', err);
   });

}])

.controller('FaqCtrl',['$scope','$state','$stateParams','Informations', function($scope,$state, $stateParams,Informations) {
 
Informations.FAQ().then(function (resp) {
           // Here will be the data after the request finished
           $scope.faqs = resp.data;
          //$localstorage.setObject('news',infos);

   }, function (err) {
          // Here will be if there was an error
          console.error('ERR', err);
   });

}])
 
// Fin Code de Thomas: 09/12

.controller('ConsignesCtrl', function($scope) {
})

.controller('AutactionsCtrl', function($scope) {
})

.controller('CarteCtrl', function($scope) {
})

.controller('CharteCtrl', function($scope) {
})

.controller('EnplusCtrl', function($scope) {
})

.controller('StandsCtrl', function($scope) {
});