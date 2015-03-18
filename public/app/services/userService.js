angular.module('userService', [])

.factory('User', function($http) {

	// create a new object
	var userFactory = {};


	// get a single user
	userFactory.get = function(id) {
		return $http.get('/collections/users/' + id);
	};

	// get all users
	userFactory.all = function() {
		return $http.get('/collections/users/');
	};

	// create a user
	userFactory.create = function(userData) {
		return $http.post('/collections/users/', userData);
	};

	// update a user
	userFactory.update = function(id, userData) {
		return $http.put('/collections/users/' + id, userData);
	};

	// delete a user
	userFactory.delete = function(id) {
		return $http.delete('/collections/users/' + id);
	};
	
	// return our entire userFactory object
	return userFactory;
	


});