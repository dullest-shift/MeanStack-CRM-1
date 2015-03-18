(function() {
	'use strict';
angular.module('postCtrl', ['postService'])

.controller('postController', postController);
postController.$inject =['postApi'];

function postController(postApi) {

	var vm = this;
	vm.test = "baller";
}	

}());