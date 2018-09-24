angular.module("app").factory('profileFactory', function($http){
    function getProfiles() {
        return $http.get('data/voldata.json');
    }
    return {
        getProfiles : getProfiles
    }
});