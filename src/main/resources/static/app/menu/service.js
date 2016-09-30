'use strict';

angular.module('myApp')

.value('MenuService', [{
    title: 'manage_admin',
    role: ['ROLE_SUPER_ADMIN'],
    link: '/admin'
}, {
    title: 'manage_applicant',
    role: ['ROLE_SUPER_ADMIN', 'ROLE_ADMIN'],
    link: '/applicant'
}]);