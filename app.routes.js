angular.module('app')
	.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'home/home.template.html'
			})
			.state('contatti', {
				url: '/contatti',
				templateUrl: 'contatti/contatti.template.html',
				data: {
					via: "tal dei tali n 20",
					contacts: [{
						nome: "Alice"
					}, {
						nome: "Bob"
					}]
				},

				controller: 'ContattiCtrl'

			})
			.state('contatti.figlio1', {
				url: '/figlio1',
				templateUrl: 'contatti/contatti.figlio1.template.html',
			})
			.state('contatti.figlio2', {
				url: '/figlio2',
				templateUrl: 'contatti/contatti.figlio2.template.html',
			})
			.state('about', {
				url: '/about',
				templateUrl: 'about/about.template.html',
				controller: 'AboutCtrl',
				resolve: {
					prova: function ($timeout) {
						return $timeout(function () {
							return "questa è una prova"
						}, 1000)
					},
				},
				informazioni: {
					nome: "Paolo",
					cognome: "Calvaresi",
				}
			});
	});