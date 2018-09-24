app.config(function ($mdThemingProvider,$stateProvider) {

    $mdThemingProvider.theme('default')
        .primaryPalette('red')
        .accentPalette('red');
 
 
    //Routes for Controllers
     $stateProvider
        .state('event', {
            url:'/',
            templateUrl:'pages/event.html',
            controller:'eventCtrl'
        })
        .state('profile', {
            url:'/profile',
            templateUrl:'pages/profile.html',
            controller:'profileCtrl'
        });
 });