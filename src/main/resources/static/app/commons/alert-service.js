'use strict';


angular.module('myApp')

.factory('AlertService', ['$rootScope', '$location', '$anchorScroll', function($rootScope, $location, $anchorScroll) {
    return {
        success: function(msg, link, timeMillis) {
            var alert = {
                message: msg ? msg : 'success',
                type: 'success',
                link: link,
                id: new Date().getTime()
            }

            doAlert($rootScope, $location, $anchorScroll, alert, timeMillis, 1000)
        },
        error: function(msg, link, timeMillis) {
            var alert = {
                message: msg ? msg : 'fail',
                type: 'danger',
                link: link,
                id: new Date().getTime()
            }
            doAlert($rootScope, $location, $anchorScroll, alert, timeMillis, 5000)
        },
        reset: function() {
            $rootScope.alerts = [];
        }
    }
}]);

function doAlert($rootScope, $location, $anchorScroll, alert, timeMillis, defaultTimeMillis) {
    var alertId = 'alert.' + alert.id;

    $rootScope.alerts = [];
    $rootScope.alerts.push(alert);
    autoHide(alertId, (timeMillis ? timeMillis : defaultTimeMillis))

    $location.hash(alertId);
    $anchorScroll();
}

function autoHide(alertId, timeMillis) {
    setTimeout(function() {
        console.log($('#alert'));
        $('#alert').fadeOut('slow')
    }, timeMillis);
}
