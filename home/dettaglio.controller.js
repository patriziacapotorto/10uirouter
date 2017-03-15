angular.module('app').controller('dettaglioCtrl', function ($scope,$state) {

//state.params contiene l'id
console.log($state.params.id);
var id = $state.params.id;
$scope.amico = $scope.listaAmici[id-1];

});
