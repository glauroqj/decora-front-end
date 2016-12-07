'use strict';

function RouteAccess($location) {
    this.checkRoles = function(access) {
        if (!access) {
            $location.path('/');
        }
    }
}