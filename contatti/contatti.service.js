angular.module('app').service('ContattiSrv',function(){

  var contatti = {
    citta: "Ancona",
    via: "Colle Ameno",
    nazione: "Italia",
    mappa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.654726808134!2d13.618856115493077!3d43.5095378791265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13327eb3a7d77ea7%3A0xcea6ed2f087bdb7d!2sVia+Colle+Ameno%2C+60026+Numana+AN!5e0!3m2!1sit!2sit!4v1489574557552"
  };


  var getContatti = function(){
    return contatti;
  };


  return{
    getContatti: getContatti
  }
});
