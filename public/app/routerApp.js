(function() { 
'use strict';
	var routerApp = angular.module('routerApp', ['ui.router']);

	routerApp.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/home');

		$stateProvider

		// route for the home page
		.state('home', {
			url : '/home',
				templateUrl: 'app/views/pages/home.html'
		})
		
		// login page
		.state('login', {
				url: '/login',
			templateUrl : 'app/views/pages/login.html',
   			controller  : 'mainController',
    			controllerAs: 'login'
		});
		

		/*//create a new user login
		.state('/create', {
			templateUrl: 'app/views/pages/create.html',
			controller: 'userController',
			controllerAs: 'user'
		})

		// form to create a new user
		// same view as edit page
		.when('/users/create', {
			templateUrl: 'app/views/pages/users/single.html',
			controller: 'userCreateController',
			controllerAs: 'user'
		})

		// page to edit a user
		.when('/users/:user_id', {
			templateUrl: 'app/views/pages/users/single.html',
			controller: 'userEditController',
			controllerAs: 'user'
		});
*/



});
}());