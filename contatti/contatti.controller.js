angular.module('app').controller('ContattiCtrl', function ($scope, $state) {
	$scope.via = $state.current.data.via;
	$scope.contatti = $state.current.data.contacts;
})