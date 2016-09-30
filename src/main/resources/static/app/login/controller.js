'use strict';

angular.module('myApp')

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'login/view.html',
        controller: 'LoginCtrl'
    });
}])

.controller('LoginCtrl', ['$scope', '$rootScope', '$location', 'LoginService', 'AlertService', function($scope, $rootScope, $location, LoginService, AlertService) {

    $scope.credentials = {
        username: '',
        password: ''
    };

    $scope.login = function() {
        LoginService.login($scope.credentials).then(
            function(user) {
                $rootScope.user = user;
                $location.path('/')
                console.log('authenticated: ', user);
            },
            function(error) {
                $rootScope.user = null;
                AlertService.error(error.data.message);
                console.error(error.data);
            });
    }

}]);