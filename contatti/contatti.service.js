angular.module('app').service('ContattiSrv',function(){

  var contatti = {
    citta: "Ancona",
    via: "Colle Ameno",
    nazione: "Italia"
  };


  var getContatti = function(){
    return contatti;
  };


  return{
    getContatti: getContatti
  }
});
