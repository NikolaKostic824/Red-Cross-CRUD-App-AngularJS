angular.module("app").factory('eventFactory', function($http){
    function getEvents() {
        return $http.get('data/data.json');
    }
    return {
        getEvents : getEvents
    }
});