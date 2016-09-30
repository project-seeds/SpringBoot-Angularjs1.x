'use strict';


angular.module('myApp')

.factory('AlertService', ['$rootScope', function($rootScope) {
    return {
        success: function(msg, link) {
            var alert = {
                message: msg,
                type: 'success',
                link: link
            }

            $rootScope.alerts = [];
            $rootScope.alerts.push(alert);
        },
        error: function(msg, link) {
            var alert = {
                message: msg,
                type: 'danger',
                link: link
            }
            $rootScope.alerts = [];
            $rootScope.alerts.push(alert);
        },
        reset: function() {
            $rootScope.alerts = [];
        }
    }
}]);