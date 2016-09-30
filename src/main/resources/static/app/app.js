'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute', 'pascalprecht.translate'
]).
config(['$routeProvider', '$httpProvider', '$translateProvider', function($routeProvider, $httpProvider, $translateProvider) {

    $routeProvider.otherwise({
        redirectTo: '/home'
    });

    $translateProvider.useStaticFilesLoader({
        prefix: 'messages/',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('ar');

    $httpProvider.defaults.headers.common['Accept-Language'] = 'ar';

}]).run(['$rootScope', '$location', 'LoginService', 'AlertService', function($rootScope, $location, LoginService, AlertService) {

    $rootScope.user = null;

    $rootScope.$on('$routeChangeStart', function(ev, next, curr) {
        AlertService.reset();

        if (next.$$route) {
            if (!curr) { //on page reload
                authenticateOnServer(LoginService, $rootScope, $location);
            } else {
                if ($rootScope.user) {
                    if (next.$$route.originalPath == '/login') {
                        $location.path('/')
                    }
                } else {
                    $location.path('/login');
                }
            }
        }
    });
}]);

function authenticateOnServer(LoginService, $rootScope, $location) {
    LoginService.login().then(
        function(user) {
            if (user) {
                $rootScope.user = user;
                $location.path('/')
                console.log('authenticated: ', user);
            } else {
                $rootScope.user = null
                $location.path('/login')
            }
        },
        function() {
            $rootScope.user = null
            $location.path('/login')
        });
}