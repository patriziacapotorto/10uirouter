angular.module('app').config(function($stateProvider){

  $stateProvider.state('home', {
    url:'/home',
    templateUrl:'home/home.template.html',
    controller: 'HomeCtr',
    data:{
    titolo: 'Lista degli amici'
    }
  })
  .state('home.dettaglio',{
    url:'/dettaglio:id',
    templateUrl:'home/home.dettaglio.html',
    controller: 'dettaglioCtrl'
  })
  .state('contatti', {
    url:'/contatti',
    templateUrl:'contatti/contatti.template.html',
    controller: 'ContattiCtr',
    data: {
      titolo: 'questa è la pagina dei contatti',
      citta: 'Ancona',
      via: 'via Colle Ameno',
    },
    resolve:{
      contatti: function(ContattiSrv){
           return ContattiSrv.getContatti();
           }
        }
  })
  .state('chisiamo', {
    abstract: true,
    url:'/chisiamo',
    templateUrl:'chisiamo/chisiamo.template.html',
    controller: 'ChisiamoCtr'
  })
  .state( 'chisiamo.about', {
    url:'/about',
    templateUrl:'chisiamo/chisiamo.about.html',
    // controller: 'ChisiamoCtr'
  })
  .state( 'chisiamo.mission', {
    url:'/mission',
    templateUrl:'chisiamo/chisiamo.mission.html',
    // controller: 'ChisiamoCtr'
  })
});
