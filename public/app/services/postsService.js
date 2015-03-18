(function() {
    'use strict';
angular.module('postService', [])

.factory('postsApi', postsFactory);

postsFactory.$inject = ['$http'];

function postsFactory($http){
    return {
        getPosts: getPosts,
        allPosts: allPosts
    };
    function getPosts() {
        return $http.post('/collections/users/posts' + id, userData)
		.then(function(response) {
		    return response.data;
		});
    }
    	
	 function allPosts() {
		return $http.get('/collections/users/posts')
		.then(function(response) {
		    return response.data;
		});
	}

}
    
}());
