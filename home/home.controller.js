angular.module('app').controller('HomeCtr', function ($scope,$state) {

  $scope.titolo =$state.current.data.titolo;


});
