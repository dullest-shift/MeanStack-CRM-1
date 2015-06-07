

angular.module('socialCtrl', []).controller('socialController', function($scope, $timeout,Dribble, $log, $location) {
    $timeout(function() {
        return $scope.awesomeThings = ['HTML5', 'AngularJS', 'Karma', 'Slick', 'Bower', 'Coffee'];
    }, 1000);

console.log('Status');

    $scope.showDetails = true;

    $scope.maxSize = 5;
    $scope.currentPage = $location.search().page || 1;
    $scope.itemsPerPage = 15;
    $scope.totalItems = 750;





});