angular.module('app').controller('ContattiCtr', function ($scope,$state,contatti) {

  // $scope.titolo =$state.current.data.titolo;
  // $scope.citta =$state.current.data.citta;
  // $scope.via =$state.current.data.via;

  console.log(contatti);
  $scope.contatti = contatti;

});
