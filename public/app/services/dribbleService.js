angular.module('dribbleService', [])
    .factory('Dribble', function($http,$resource) {
        return $resource('', {'callback': 'JSON_CALLBACK'}, {
                    query: {
                        method: 'JSONP',
                        url: 'http://api.dribbble.com/shots/popular'

                    }

                });
            });


