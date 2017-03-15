angular.module('app').controller('HomeCtr', function ($scope,$state) {

  $scope.titolo =$state.current.data.titolo;

  $scope.listaAmici= [
    {
      id: 1,
      nome: 'Paolo'
    },
    {
      id: 2,
      nome: 'Michele'
    },
    {
      id: 3,
      nome: 'Gianni'
    }
];


});
