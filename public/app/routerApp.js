(function() { 
'use strict';
	var routerApp = angular.module('routerApp', ['ui.router']);

	routerApp.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/landing');

		$stateProvider

		// route for the home page
			.state('landing', {
				url : '/landing',
				templateUrl: 'app/views/pages/landing.html',css: '../../assets/css/landing.css'
			})
			.state('home', {
			url : '/home',
				templateUrl: 'app/views/pages/home.html',css: '../../assets/css/home.css'
		})
			.state('home.portfolio', {
				url : '/portfolio',
				templateUrl: 'app/views/pages/portfolio.html',css: '../../assets/css/home.css'
			})
			.state('about', {
				url : '/about',
				templateUrl: 'app/views/pages/about.html',css: '../../assets/css/home.css'
			})
			.state('blog', {
				url : '/blog',
				templateUrl: 'app/views/pages/blog.html',css: '../../assets/css/home.css'
			})
			.state('chat', {
				url : '/chat',
				templateUrl: 'app/views/pages/chat.html',css: '../../assets/css/home.css'
			})
			.state('contact', {
				url : '/contact',
				templateUrl: 'app/views/pages/contact.html',css: '../../assets/css/home.css'
			})

			.state('social', {
				url : '/social',
				templateUrl: 'app/views/pages/social.html',css: '../../assets/css/home.css'
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