angular.module('starter.services', [])

.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
}])

.factory('Home',function($http, $q){
     
            return{
                News:function(){
                    var deferred = $q.defer();
                    $http({
                          method  : 'GET',
                          url     : 'http://challenge-2016.eclair.ec-lyon.fr/api/home/infos',
                          //params :{id:1}
               
                        }).success(function (response){
                                   // This is the data from your request
                                        deferred.resolve(response)
                                   }).error(function () {
                                    // If something was wrong
                                  deferred.reject();
                                  });
                       return deferred.promise;
                    },
                Gallery:function(){
                    var deferred = $q.defer();
                    $http({
                          method  : 'GET',
                          url     : 'http://challenge-2016.eclair.ec-lyon.fr/api/home/galerie',
                          //params :{id:1}
               
                        }).success(function (response){
                                   // This is the data from your request
                                        deferred.resolve(response)
                                   }).error(function () {
                                    // If something was wrong
                                  deferred.reject();
                                  });
                       return deferred.promise;
                    },
                Lien:function(){
                    var deferred = $q.defer();
                    $http({
                          method  : 'GET',
                          url     : 'http://challenge-2016.eclair.ec-lyon.fr/api/home/galerie/liens',
                          //params :{id:1}
               
                        }).success(function (response){
                                   // This is the data from your request
                                        deferred.resolve(response)
                                   }).error(function () {
                                    // If something was wrong
                                  deferred.reject();
                                  });
                       return deferred.promise;
                    }
                  }
                })

.factory('Ecole',function($http, $q){
        
            return{
                Ecoles:function(){
                    var deferred = $q.defer();
                    $http({
                          method  : 'GET',
                          url     : 'http://challenge-2016.eclair.ec-lyon.fr/api/ecoles',
                          //params :{id:1}
               
                        }).success(function (response){
                                   // This is the data from your request
                                        deferred.resolve(response)
                                   }).error(function () {
                                    // If something was wrong
                                  deferred.reject();
                                  });
                       return deferred.promise;
                    },
                Classement:function(){
                    var deferred = $q.defer();
                    $http({
                          method  : 'GET',
                          url     : 'http://challenge-2016.eclair.ec-lyon.fr/api/ecoles/classement',
                          //params :{id:1}
               
                        }).success(function (response){
                                   // This is the data from your request
                                        deferred.resolve(response)
                                   }).error(function () {
                                    // If something was wrong
                                  deferred.reject();
                                  });
                       return deferred.promise;
                    },
                  Matchs:function(abrev){
                    var deferred = $q.defer();
                    $http({
                          method  : 'GET',
                          url     : 'http://challenge-2016.eclair.ec-lyon.fr/api/ecoles/'+abrev+'',
                          //params :{id:1}
               
                        }).success(function (response){
                                   // This is the data from your request
                                        deferred.resolve(response)
                                   }).error(function () {
                                    // If something was wrong
                                  deferred.reject();
                                  });
                       return deferred.promise;
                    }
                  }
                })

.factory('Matchs',function($http, $q){
        
            return{
                Matchs:function(sport,genre){
                    var deferred = $q.defer();
                    $http({
                          method  : 'GET',
                          url     : 'http://challenge-2016.eclair.ec-lyon.fr/api/matchs/'+sport+'-'+genre+'',
                          //params :{id:1}
               
                        }).success(function (response){
                                   // This is the data from your request
                                        deferred.resolve(response)
                                   }).error(function () {
                                    // If something was wrong
                                  deferred.reject();
                                  });
                       return deferred.promise;
                    }
                  }
                })

.factory('Compte',function($http, $q){
        
            return{
                Compte:function(login,mdp){
                    var deferred = $q.defer();
                    $http({
                          method  : 'GET',
                          url     : 'http://challenge-2016.eclair.ec-lyon.fr/api/users/'+login+'-'+mdp+'',
                          //params :{id:1}
               
                        }).success(function (response){
                                   // This is the data from your request
                                        deferred.resolve(response)
                                   }).error(function () {
                                    // If something was wrong
                                  deferred.reject();
                                  });
                       return deferred.promise;
                    }
                  }
                })

.factory('Update',function($http, $q){
        
            return{
                Poule:function(id_match,score1,score2){
                    var deferred = $q.defer();
                    $http({
                          method  : 'POST',
                          url     : 'http://challenge-2016.eclair.ec-lyon.fr/api/matchs/'+id_match+'-'+score1+'-'+score2+'',
                          //params :{id_match:id_match,score1:score1,score2:score2}
               
                        }).success(function (response){
                                   // This is the data from your request
                                        deferred.resolve(response)
                                   }).error(function () {
                                    // If something was wrong
                                  deferred.reject();
                                  });
                       return deferred.promise;
                    },
                PhaseFinal:function(id_match,equipe1,equipe2,score1,score2){
                    var deferred = $q.defer();
                    $http({
                          method  : 'POST',
                          url     : 'http://challenge-2016.eclair.ec-lyon.fr/api/matchs/'+id_match+'-'+equipe1+'-'+equipe2+'-'+score1+'-'+score2+'',
                          //params :{equipe1:equipe1,equipe2:equipe2,score1:score1,score2:score2}
               
                        }).success(function (response){
                                   // This is the data from your request
                                        deferred.resolve(response)
                                   }).error(function () {
                                    // If something was wrong
                                  deferred.reject();
                                  });
                       return deferred.promise;
                    },
                Special:function(id_match,classement){
                    var deferred = $q.defer();
                    $http({
                           method  : 'POST',
                          url     : 'http://challenge-2016.eclair.ec-lyon.fr/api/matchs/special/'+id_match+'-'+classement+''
                         // params :{classement:rang}
               
                        }).success(function (response){
                                   // This is the data from your request
                                        deferred.resolve(response)
                                   }).error(function () {
                                    // If something was wrong
                                  deferred.reject();
                                  });
                       return deferred.promise;
                    },
                  }
                })


.factory('Informations',function($http, $q){
        
            return{
                Calandar:function(){
                    var deferred = $q.defer();
                    $http({
                          method  : 'GET',
                          url     : 'http://challenge-2016.eclair.ec-lyon.fr/api/informations/calendrier',
               
                        }).success(function (response){
                                   // This is the data from your request
                                        deferred.resolve(response)
                                   }).error(function () {
                                    // If something was wrong
                                  deferred.reject();
                                  });
                       return deferred.promise;
                    },
                FAQ:function(){
                    var deferred = $q.defer();
                    $http({
                          method  : 'GET',
                          url     : 'http://challenge-2016.eclair.ec-lyon.fr/api/informations/faq',
                          //params :{id:1}
               
                        }).success(function (response){
                                   // This is the data from your request
                                        deferred.resolve(response)
                                   }).error(function () {
                                    // If something was wrong
                                  deferred.reject();
                                  });
                       return deferred.promise;
                    },
                Plan:function(){
                    var deferred = $q.defer();
                    $http({
                          method  : 'GET',
                          url     : 'http://challenge-2016.eclair.ec-lyon.fr/api/informations/plan',
                          //params :{id:1}
               
                        }).success(function (response){
                                   // This is the data from your request
                                        deferred.resolve(response)
                                   }).error(function () {
                                    // If something was wrong
                                  deferred.reject();
                                  });
                       return deferred.promise;
                    },
                Urgence:function(){
                    var deferred = $q.defer();
                    $http({
                          method  : 'GET',
                          url     : 'http://challenge-2016.eclair.ec-lyon.fr/api/informations/urgence',
                          //params :{id:1}
               
                        }).success(function (response){
                                   // This is the data from your request
                                        deferred.resolve(response)
                                   }).error(function () {
                                    // If something was wrong
                                  deferred.reject();
                                  });
                       return deferred.promise;
                    }
                  }
                })

.factory('Filtrage',function($http, $q){
        
            return{
                Phase:function(nomPhase,tableau){
                  var nvTableau=[];
                  for(var i=0;i<tableau.length;i++){
                    if(tableau[i].phase_match==="nomPhase"){
                    nvTableau[i]=tableau[i];
                  }
                }
                return nvTableau;
              }
            }
            });

