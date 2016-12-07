'use strict';

function Session($cookieStore) {
    return {
        create: create,
        destroy: destroy,
        isAuthenticated: isAuthenticated
    };

    function create(id) {
        $cookieStore.put('session', id);
    }
    function destroy() {
        $cookieStore.remove('session');
    }
    function isAuthenticated() {
        !!$cookieStore.get('session');
    }
}