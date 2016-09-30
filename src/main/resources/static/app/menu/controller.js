'use strict';

angular.module('myApp')

.controller('MenuCtrl', ['$rootScope', '$location', '$scope', 'LoginService', 'MenuService', function($rootScope, $location, $scope, LoginService, MenuService) {

    $scope.userMenu = []

    angular.forEach(MenuService, function(item) {
        if (item.role.indexOf($rootScope.user.role) >= 0) {
            $scope.userMenu.push(item)
        }
    });

    $scope.logout = function() {
        LoginService.logout().then(function() {
            $location.path('/login');
            $rootScope.user = null;
        })
    }
}]);